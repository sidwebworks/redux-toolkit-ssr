import type { AppProps } from "next/app";
import { wrapper } from "../utils/redux";

/**
 * This with wrapper automatically wraps the app
 * inside a React-redux context provider
 */
const App = wrapper.withRedux(({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
});

export default App;
