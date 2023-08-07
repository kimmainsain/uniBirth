import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
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

export const starListState = atom({
  key: "starListState", // unique ID (with respect to other atoms/selectors)
  default: { starList: [] }, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});

export const boardSizeState = atom({
  key: "boardSizeState",
  default: 5,
});

export const planetIdState = atom({
  key: "planetIdState",
  default: 1,
});

export const constellationNameState = atom({
  key: "constellationNameState",
  default: "",
});

export const constellationDescpState = atom({
  key: "constellationDescpState",
  default: "",
});
