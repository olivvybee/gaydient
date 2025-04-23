export const generateGradient = (colours: string[]) =>
  colours.map((colour) => `#${colour}`).join(', ');

export const generateGradientWithHardStops = (colours: string[]) => {
  const chunkSize = 100 / colours.length;
  return colours
    .flatMap((colour, index) => [
      `#${colour} ${Math.round(index * chunkSize)}%`,
      `#${colour} ${Math.round((index + 1) * chunkSize)}%`,
    ])
    .join(', ');
};
