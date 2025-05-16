import { CloseButton, Dialog, Field, Input, Stack } from "@chakra-ui/react";
import { memo, type FC } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { open, onClose } = props;
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
                <Input value="Taro" readOnly />
              </Field.Root>
              <Field.Root>
                <Field.Label>フルネーム</Field.Label>
                <Input value="Taro Yamada" readOnly />
              </Field.Root>
              <Field.Root>
                <Field.Label>MAIL</Field.Label>
                <Input value="abc@sample.com" readOnly />
              </Field.Root>
              <Field.Root>
                <Field.Label>TEL</Field.Label>
                <Input value="090-1234-5678" readOnly />
              </Field.Root>
            </Stack>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
});
