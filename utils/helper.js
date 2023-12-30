export const getSliderCount = (screenSize) => {
  if (screenSize > 1024) return 5;
  else if (screenSize > 768) return 4;
  else if (screenSize > 480) return 3;
  else if (screenSize > 320) return 2;
  else return 1;
};
