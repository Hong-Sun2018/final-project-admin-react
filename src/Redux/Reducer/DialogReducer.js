import { createSlice } from '@reduxjs/toolkit';

export const dialogMessageSlice = createSlice(
  {
    name: 'setDialog',
    initialState: {
      value: {
        dialogMsg: '',
        isOpen: false,
      },
    },
    reducers: {
      setDialog: (state, action) => {state.value = action.payload},
      closeDialog: (state, action) => {state.value.isOpen = false}
    }
  }
);

export const { setDialog, closeDialog } = dialogMessageSlice.actions;
export default dialogMessageSlice.reducer;