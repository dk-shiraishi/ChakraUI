import { useCallback, useState } from "react";

import type { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// ユーザーを特定しモーダルを表示
export const useSelectUser = () => {
  const [selectedUser, setSelecteduser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelecteduser(targetUser!);
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
