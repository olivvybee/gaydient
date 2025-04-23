import { useConfigStore } from '../../store/ConfigStore';
import {
  generateGradient,
  generateGradientWithHardStops,
} from './Gradient.utils';

interface GradientProps {
  name: string;
  colours: string[];
}

export const Gradient = ({ name, colours }: GradientProps) => {
  const type = useConfigStore((state) => state.type);
  const direction = useConfigStore((state) => state.direction);
  const reverse = useConfigStore((state) => state.reverse);
  const hardStops = useConfigStore((state) => state.hardStops);
  const symmetry = useConfigStore((state) => state.symmetry);

  const isSymmetrical = colours.at(0) === colours.at(-1);
  console.log({ colours, isSymmetrical });

  if (isSymmetrical && !symmetry) {
    colours = colours.slice(0, Math.ceil(colours.length / 2));
  }

  if (reverse) {
    colours = colours.toReversed();
  }

  const gradient = hardStops
    ? generateGradientWithHardStops(colours)
    : generateGradient(colours);

  const background = `${type}-gradient(${direction}, ${gradient})`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h2>{name}</h2>
      <div
        style={{
          background,
          width: 300,
          height: 100,
        }}
      />
    </div>
  );
};
