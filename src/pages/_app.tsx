// pages/_app.tsx
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "@src/styles/theme";
import ThemeContext from "@src/context/themeContext";
import ThemeToggleButton from "@src/components/ThemeToggleButton";
import ResponsiveAppBar from "@src/components/AppBar";
import { ContentProvider } from "@src/context/ContentContext";
import { ContactProvider } from "@src/context/ContactContext";
import Footer from "@src/components/Footer";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  //set light theme or dark;
  const [themeMode, setThemeMode] = useState("light");
  const theme = themeMode === "dark" ? darkTheme : lightTheme;
  const toggleThemeMode = () => {
    window.localStorage.setItem("theme", themeMode);
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    window.localStorage.getItem("theme") == "light"
      ? setThemeMode("dark")
      : setThemeMode("light");
  }, []);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // If there's no emotionCache rendered by the server, use the clientSideEmotionCache
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
        <ThemeProvider theme={theme}>
          <ContentProvider>
            <ContactProvider>
              <ThemeToggleButton />
              <ResponsiveAppBar />
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
              <Footer />
            </ContactProvider>
          </ContentProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </CacheProvider>
  );
}
