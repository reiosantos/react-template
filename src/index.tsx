import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import { initializeStore } from './store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import PageLoader from './shared/containers/loader';
import Notification from './shared/containers/notification';
import ErrorBoundary from './shared/components/errorBoundary';
import AppTheme from './theme';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRoutes } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={AppTheme}>
        <ThemeProvider theme={AppTheme}>
          <Provider store={initializeStore()}>
            <CssBaseline />
            <ErrorBoundary>
              <Notification />
              <PageLoader />
              <AppRoutes />
            </ErrorBoundary>
          </Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
