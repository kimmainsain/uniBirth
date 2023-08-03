import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const emailState = atom({
  key: "emailState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const passwordState = atom({
  key: "passwordState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const nicknameState = atom({
  key: "nicknameState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const targetNicknameState = atom({
  key: "targetNicknameState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
