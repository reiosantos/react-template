import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CircularProgress, Fab, useTheme } from '@mui/material';
import { NetworkCheck, Check } from '@mui/icons-material';

interface IProps {
  loading: boolean;
  success: boolean;
}

const CircularIntegration = ({ loading, success }: IProps & any) => {
  const theme = useTheme();

  const buttonClass = classNames('m-auto left-0 top-0 right-0 bottom-0 fixed', {
    'bg-green-700': success,
    'hover:bg-green-700': success
  });

  return !loading ? null : (
    <div
      className="fixed w-full h-full top-0 z-10"
      style={{ backgroundColor: 'rgba(105, 105, 105, 0.2)' }}
    >
      <Fab aria-label="status" size={'small'} color="primary" className={buttonClass}>
        {success ? <Check /> : <NetworkCheck />}
      </Fab>
      {loading && (
        <CircularProgress
          size={68}
          color="primary"
          style={{ color: theme.palette.primary.light }}
          className={'m-auto left-0 top-0 right-0 bottom-0 fixed'}
        />
      )}
    </div>
  );
};

CircularIntegration.propTypes = {
  loading: PropTypes.bool,
  success: PropTypes.bool
};

CircularIntegration.defaultProps = {
  loading: false,
  success: false
};

export default CircularIntegration;
