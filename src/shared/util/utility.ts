import * as dateFns from 'date-fns';
import { ThunkDispatch } from 'redux-thunk';
import actionTypes from '../../store/action-types';
import { Action, NotificationStateProps, NotificationType, State } from '../interface';

const createAction = (ACTION: string, data: any = null): Action => {
  return {
    type: ACTION,
    payload: data
  };
};

const getNotificationProps = (dispatch: ThunkDispatch<{}, {}, Action>): NotificationStateProps => {
  return {
    addNotification: (message, type) =>
      dispatch(
        createAction(actionTypes.SET_NOTIFICATION, {
          message,
          type
        })
      ),
    resetNotification: () =>
      dispatch(
        createAction(actionTypes.RESET_NOTIFICATION, {
          message: '',
          type: NotificationType.INFO
        })
      )
  };
};

const createLoadingSelector = (actions: string[]) => (state: State) => {
  // returns true only when all actions is not loading
  let loader = false;
  for (const action of actions) {
    if (state.loading.api[action]) {
      loader = true;
      break;
    }
  }
  return loader;
};

/**
 * function which returns formatted date
 * @param date
 * @param format
 */
const formatDate = (date: string | number | Date, format?: string) => {
  if (!date) {
    return '';
  }
  return dateFns.format(new Date(date), format || 'yyyy-MM-dd HH:mm:ss');
};

const Utility = {
  createAction,
  createLoadingSelector,
  getNotificationProps,
  formatDate
};

export default Utility;
