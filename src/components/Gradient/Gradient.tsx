import { useConfigStore } from '../../store/ConfigStore';

import {
  generateGradient,
  generateGradientWithHardStops,
} from './Gradient.utils';

import styles from './Gradient.module.css';

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

  if (isSymmetrical && !symmetry) {
    colours = colours.slice(0, Math.ceil(colours.length / 2));
  }

  if (reverse) {
    colours = colours.toReversed();
  }

  const directionString = direction ? `${direction}, ` : '';

  const gradient = hardStops
    ? generateGradientWithHardStops(colours)
    : generateGradient(colours);

  const background = `${type}-gradient(${directionString}${gradient})`;

  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <div
        className={styles.gradient}
        style={{
          background,
          // width: 300,
          height: 100,
        }}
      />
    </div>
  );
};
