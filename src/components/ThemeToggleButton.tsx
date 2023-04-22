import { useContext } from "react";
import { Box, IconButton } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ThemeContext from "@src/utils/themeContext";

const ThemeToggleButton = () => {
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);

  return (
    <Box position="fixed" zIndex="tooltip" bottom={4} right={4}>
      <IconButton
        onClick={toggleThemeMode}
        sx={{
          backgroundColor:
            themeMode === "light"
              ? "rgba(0, 0, 0, 0.08)"
              : "rgba(255, 255, 255, 0.08)",
          "&:hover": {
            backgroundColor:
              themeMode === "light"
                ? "rgba(0, 0, 0, 0.16)"
                : "rgba(255, 255, 255, 0.16)",
          },
        }}
      >
        {themeMode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Box>
  );
};

export default ThemeToggleButton;
