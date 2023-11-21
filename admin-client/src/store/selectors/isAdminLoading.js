import { adminState } from "../atoms/Admin";
import {selector} from "recoil";

export const isAdminLoading = selector({
  key: 'adminLoadingState',
  get: ({get}) => {
    const state = get(adminState);

    return state.isLoading;
  },
});