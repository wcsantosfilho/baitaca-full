import { Grommet } from "grommet";
import { deepMerge } from "grommet/utils";

export const theme = deepMerge(Grommet, {
  global: {
    colors: {
      placeholder: "rgba(255, 255,255, 0.4)",
      brand: "rgba(80,80,80,0.5)"
    },
    font: {
      family: "Pacifico",
      size: "16px",
      height: "20px"
    },
    input: {
      weight: 500
    },
    size: {
      avatar: "36px",
      sidebar: "60px"
    }
  },
  icon: {
    size: {
      medium: "18px"
    }
  },
  paragraph: {
    medium: {
      size: "16px",
      height: "20px"
    },
    large: {
      size: "20px",
      height: "24px"
    }
  },
  text: {
    medium: {
      size: "16px",
      height: "20px"
    },
    large: {
      size: "20px",
      height: "24px"
    }
  }
});
