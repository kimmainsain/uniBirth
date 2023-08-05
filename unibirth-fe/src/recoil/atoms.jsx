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

export const constellationLinkList = atom({
  key: "constellationLinkList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// Star Box content
export const boxcontentState = atom({
  key: "boxcontentState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const boxnicknameState = atom({
  key: "boxnicknameState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const boxurlState = atom({
  key: "boxurlState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const boxidState = atom({
  key: "boxidState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const boxcreatedState = atom({
  key: "boxcreatedState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
