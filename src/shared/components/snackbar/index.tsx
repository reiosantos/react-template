import React from 'react';
import PropTypes from 'prop-types';
import { NotificationType } from '../../interface';
import { IconButton, Snackbar, SnackbarContent, useTheme } from '@mui/material';
import { CheckCircle, Close, Warning, Error, Info } from '@mui/icons-material';
import { amber, blue, green } from '@mui/material/colors';

const variantIcon: Record<string, any> = {
  success: CheckCircle,
  warning: Warning,
  error: Error,
  info: Info
};

interface IProps {
  open: boolean;
  handleClose: (event: any) => void;
  message: string;
  variant: NotificationType;
}

const CustomizedSnackBar: React.FC<IProps> = (props: IProps) => {
  const { open, handleClose, message, variant } = props;
  const theme = useTheme();

  const backgroundColors = {
    success: green[500],
    error: theme.palette.error.dark,
    info: blue[500],
    warning: amber[700]
  };

  const Icon = variantIcon[variant];

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      style={{ marginTop: '2em' }}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <SnackbarContent
        style={{ backgroundColor: backgroundColors[variant] }}
        aria-describedby="client-snackBar"
        message={
          <span id="client-snackBar" className="flex items-center">
            <Icon className="text-base mr-2 text-opacity-90" />
            {message}
          </span>
        }
        action={[
          <IconButton key="close" aria-label="Close" color="inherit" onClick={handleClose}>
            <Close className="text-base text-orange-500" />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

CustomizedSnackBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.values(NotificationType)).isRequired
};

export default CustomizedSnackBar;
