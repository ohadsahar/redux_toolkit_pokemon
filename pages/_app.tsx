import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/globalStyle';
import theme from 'theme/theme';
import { Provider } from 'react-redux';
import store from 'redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
