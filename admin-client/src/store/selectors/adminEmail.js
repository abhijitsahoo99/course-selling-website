import { adminState } from "../atoms/Admin";
import {selector} from "recoil";

export const adminEmailState = selector({
  key: 'adminEmailState',
  get: ({get}) => {
    const state = get(adminState);

    return state.adminEmail;
  },
});