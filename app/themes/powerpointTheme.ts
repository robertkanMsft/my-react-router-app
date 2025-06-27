import {
  createDarkTheme,
  createLightTheme,
  type BrandVariants,
  type Theme,
} from "@fluentui/react-components";

const powerpoint: BrandVariants = {
  10: "#060201",
  20: "#23130B",
  30: "#3B1C13",
  40: "#4F2417",
  50: "#642B1B",
  60: "#7A331F",
  70: "#913A23",
  80: "#A84227",
  90: "#BB4D30",
  100: "#C56144",
  110: "#CE7358",
  120: "#D7866C",
  130: "#DF9882",
  140: "#E6AA97",
  150: "#EDBDAD",
  160: "#F3CFC4",
};

export const lightTheme: Theme = {
  ...createLightTheme(powerpoint),
};

export const darkTheme: Theme = {
  ...createDarkTheme(powerpoint),
};

darkTheme.colorBrandForeground1 = powerpoint[110];
darkTheme.colorBrandForeground2 = powerpoint[120];
