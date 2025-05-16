import { CloseButton, Dialog, Field, Input, Stack } from "@chakra-ui/react";
import { memo, type FC } from "react";

import type { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  open: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, open, onClose } = props;
  return (
    <Dialog.Root
      open={open}
      onOpenChange={onClose}
      motionPreset="slide-in-bottom"
    >
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content mx={4} pb={4}>
          <Dialog.Header>ユーザー詳細</Dialog.Header>
          <Dialog.CloseTrigger>
            <CloseButton />
          </Dialog.CloseTrigger>
          <Dialog.Body>
            <Stack spaceY={4}>
              <Field.Root>
                <Field.Label>名前</Field.Label>
                <Input value={user?.username} readOnly />
              </Field.Root>
              <Field.Root>
                <Field.Label>フルネーム</Field.Label>
                <Input value={user?.name} readOnly />
              </Field.Root>
              <Field.Root>
                <Field.Label>MAIL</Field.Label>
                <Input value={user?.email} readOnly />
              </Field.Root>
              <Field.Root>
                <Field.Label>TEL</Field.Label>
                <Input value={user?.phone} readOnly />
              </Field.Root>
            </Stack>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
});
