import React from 'react';
import classNames from 'classnames';
import { useMediaQuery, useTheme } from '@mui/material';

const Layout = ({ children, ...props }: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <div className={classNames('h-screen w-full absolute z-0 top-0 transparent')}>{''}</div>

      <div className="flex flex-col relative h-full">
        <div className={`flex mx-auto mb-2 flex-grow flex-col ${isMobile ? 'w-full' : 'w-4/5'}`}>
          <main className={classNames('w-full')}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
