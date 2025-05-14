import { IconButton } from "@chakra-ui/react";
import { memo, type FC } from "react";
import { FaBars } from "react-icons/fa";

export const MenuIconButton: FC = memo(() => {
  return (
    <IconButton
      aria-aria-label="メニューボタン"
      size="sm"
      variant="plain"
      display={{ base: "block", md: "none" }}
    >
      <FaBars color="white" />
    </IconButton>
  );
});
