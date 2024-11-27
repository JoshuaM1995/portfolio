import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme";
import { Global, css } from "@emotion/react";
import { prismDarkTheme } from "../styles/prism";
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${prismDarkTheme};
          ::selection {
            background-color: #b5ffe0;
            color: #000;
          }
          ::-moz-selection {
            background: #b5ffe0;
            color: #000;
          }
          html {
            min-width: 356px;
          }
          body {
            background: #000;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          ::-webkit-scrollbar {
            width: 8px;
            background: #080808;
          }

          ::-webkit-scrollbar-thumb {
            background: #111111;
            border-radius: 8px;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}
export default MyApp;
