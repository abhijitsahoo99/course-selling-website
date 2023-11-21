import { userState } from "../atoms/User";
import {selector} from "recoil";

export const isUserLoading = selector({
  key: 'userLoadingState',
  get: ({get}) => {
    const state = get(userState);

    return state.isLoading;
  },
});