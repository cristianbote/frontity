import Root from "./components";
import SmartAdserver from "../types";
import SmartAd from "./components/smart-ad";

const smartAdserver: SmartAdserver = {
  roots: {
    smartAdserver: Root,
  },
  state: {
    fills: {
      smartAdserver: {},
    },
    smartAdserver: {
      isLoaded: false,
    },
  },
  libraries: {
    fills: {
      smartAdserver: {
        SmartAd,
      },
    },
  },
};

export default smartAdserver;
