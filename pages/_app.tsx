import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/400.css";
import theme from "../src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
