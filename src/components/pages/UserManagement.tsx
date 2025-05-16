import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, type FC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {[...Array(10)].map(() => (
        <WrapItem>
          <UserCard
            imageUrl="https://picsum.photos/160"
            userName="Taro"
            fullName="Taro Yamada"
          />
        </WrapItem>
      ))}
    </Wrap>
  );
});
