import { configureStore } from '@reduxjs/toolkit';
import DialogReducer from './Reducer/DialogReducer';
import UserInfoReducer from './Reducer/UserInfoReducer';

const store = configureStore(
  {
    reducer   : {
      setDialog: DialogReducer,
      userInfo: UserInfoReducer,
    }
  }
);

export default store;