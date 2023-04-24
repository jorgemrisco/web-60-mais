import { useContext } from "react";
import { Box, Button, Tooltip } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ThemeContext from "@src/context/themeContext";

const ThemeToggleButton = () => {
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);

  return (
    <Box position="fixed" zIndex="tooltip" bottom={4} right={4}>
      <Tooltip title="Clique para alterar o tema de cores">
        <Button
          onClick={toggleThemeMode}
          startIcon={
            themeMode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
          }
          sx={{
            backgroundColor:
              themeMode === "light"
                ? "rgba(0, 0, 0, 0.438)"
                : "rgba(255, 255, 255, 0.418)",
            "&:hover": {
              backgroundColor:
                themeMode === "light" ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)",
            },
            transition: "background-color 0.3s ease-out",
            textTransform: "none",
          }}
        >
          {themeMode === "light"
            ? "Utilizar tema escuro"
            : "Utilizar tema claro"}
        </Button>
      </Tooltip>
    </Box>
  );
};

export default ThemeToggleButton;
