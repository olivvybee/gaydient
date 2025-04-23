interface GradientProps {
  name: string;
  colours: string[];
  stops?: { colour: number; position?: number }[];
}

export const Gradient = ({ name, colours, stops }: GradientProps) => {
  const gradient = colours.map((colour) => `#${colour}`).join(', ');

  const gradientWithStops = stops?.map((stop) => {
    const colour = colours[stop.colour];
    const position = stop.position ? ` ${stop.position}%` : '';
    return `#${colour}${position}`;
  });

  const background = `linear-gradient(90deg, ${gradient})`;
  const backgroundWithStops = `linear-gradient(90deg, ${gradientWithStops})`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h2>{name}</h2>
      <div
        style={{
          background: stops ? backgroundWithStops : background,
          width: 300,
          height: 100,
        }}
      />
    </div>
  );
};
