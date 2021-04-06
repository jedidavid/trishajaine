import "../styles/globals.css";
import App from "next/app";
import { createContext } from "react";
import { ThemeProvider } from "next-themes";
import { fetchAPI } from "../lib/api";

export const GlobalContext = createContext({});
function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <ThemeProvider attribute="class">
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  const global = await fetchAPI("/global");

  return {
    props: { ...appProps, pageProps: { global } },
  };
};

export default MyApp;
