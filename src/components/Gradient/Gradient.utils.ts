export const generateGradient = (colours: string[]) =>
  colours.map((colour) => `#${colour}`).join(', ');

export const generateGradientWithHardStops = (colours: string[]) => {
  const chunkSize = 100 / colours.length;
  return colours
    .flatMap((colour, index) => [
      `#${colour} ${index * chunkSize}%`,
      `#${colour} ${(index + 1) * chunkSize}%`,
    ])
    .join(', ');
};
