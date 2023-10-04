/* eslint-disable @typescript-eslint/no-unused-vars */
import {create} from 'zustand';

export interface ShowProfileState {
  show: Boolean;
  setShow: (show: Boolean) => void;
}

const useProfileStore = create<ShowProfileState>((set, get) => ({
  show: false,
  setShow: (show: Boolean) => {
    // const show1 = !get().show;
    set({show: show});
  },
}));

export default useProfileStore;
