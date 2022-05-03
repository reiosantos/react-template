import { DashboardRounded, WarningRounded } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import React from 'react';

function NotFound(props: any) {
  const theme = useTheme();

  return (
    <div
      className="wrapper"
      style={{
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
      }}
    >
      <section className="content-header">
        <h1>404 Error Page</h1>
        <ol className="breadcrumb">
          <li>
            <a href="/" style={{ color: theme.palette.primary.contrastText }}>
              <DashboardRounded className="mr-2" /> Home
            </a>
          </li>
        </ol>
      </section>
      <section className="content">
        <div className="error-page">
          <h2 className="headline text-yellow"> 404</h2>
          <div className="error-content">
            <h2>
              <WarningRounded className="text-yellow" /> Oops! Page not found.
            </h2>
            <p>
              We are sorry, but the requested page could not be found Meanwhile, you may{' '}
              <a href="/">return to our home-page</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
