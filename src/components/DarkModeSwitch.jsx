import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle Drak Switch"
      icon={
        colorMode === "dark" ? (
          <SunIcon color={"white"} />
        ) : (
          <MoonIcon color={"white"} />
        )
      }
      onClick={toggleColorMode}
      colorScheme={"whiteAlpha"}
    />
  );
};

export default DarkModeSwitch;
