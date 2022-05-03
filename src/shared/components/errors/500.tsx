import React from 'react';
import PropTypes from 'prop-types';
import { DashboardRounded, WarningRounded } from '@mui/icons-material';
import { Typography, useTheme } from '@mui/material';

function ServerError({ message }: any) {
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
        <h1>500 Error Page</h1>
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
          <h2 className="headline text-red"> 500</h2>
          <div className="error-content">
            <h2>
              <WarningRounded className="text-red" /> Oops! Something went wrong.
            </h2>
            {message ? (
              <p>{message}</p>
            ) : (
              <Typography>
                We will work on fixing that right away. Meanwhile, you may{' '}
                <a href="/">return to our main-page</a>
              </Typography>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

ServerError.propTypes = {
  message: PropTypes.string
};

export default ServerError;
