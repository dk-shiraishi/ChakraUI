import { Button, Drawer } from "@chakra-ui/react";
import { memo, type FC } from "react";

import { MenuIconButton } from "../atoms/button/MenuIconButton";

type Props = {
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClickHome, onClickUserManagement, onClickSetting } = props;
  return (
    <Drawer.Root placement="end" size="xs">
      <Drawer.Trigger>
        <MenuIconButton />
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Body p={0} bg="gray.100">
            <Drawer.ActionTrigger w="100%">
              <Button w="100%" variant="subtle" onClick={onClickHome}>
                TOP
              </Button>
              <Button w="100%" variant="subtle" onClick={onClickUserManagement}>
                ユーザー一覧
              </Button>
              <Button w="100%" variant="subtle" onClick={onClickSetting}>
                設定
              </Button>
            </Drawer.ActionTrigger>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
});
