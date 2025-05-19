import {
  Button,
  CloseButton,
  Dialog,
  Field,
  Input,
  Stack,
} from "@chakra-ui/react";
import { memo, useEffect, useState, type ChangeEvent, type FC } from "react";

import type { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  open: boolean;
  onClose: () => void;
  isAdmin?: boolean;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, open, onClose, isAdmin = false } = props;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onClickUpdate = () => alert();
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  return (
    <Dialog.Root
      open={open}
      onOpenChange={onClose}
      motionPreset="slide-in-bottom"
    >
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content mx={4} pb={2}>
          <Dialog.Header>ユーザー詳細</Dialog.Header>
          <Dialog.CloseTrigger>
            <CloseButton />
          </Dialog.CloseTrigger>
          <Dialog.Body>
            <Stack spaceY={4}>
              <Field.Root>
                <Field.Label>名前</Field.Label>
                <Input
                  value={username}
                  onChange={onChangeUserName}
                  readOnly={!isAdmin}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>フルネーム</Field.Label>
                <Input
                  value={name}
                  onChange={onChangeName}
                  readOnly={!isAdmin}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>MAIL</Field.Label>
                <Input
                  value={email}
                  onChange={onChangeEmail}
                  readOnly={!isAdmin}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>TEL</Field.Label>
                <Input
                  value={phone}
                  onChange={onChangePhone}
                  readOnly={!isAdmin}
                />
              </Field.Root>
            </Stack>
          </Dialog.Body>
          {isAdmin && (
            <Dialog.Footer>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </Dialog.Footer>
          )}
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
});
