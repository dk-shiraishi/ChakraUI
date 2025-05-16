import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useEffect, type FC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllusers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllusers();
  const { open, onOpen, onClose } = useDisclosure();

  useEffect(() => getUsers(), []);

  const onClickUser = () => onOpen();

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://picsum.photos/160"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal open={open} onClose={onClose} />
    </>
  );
});
