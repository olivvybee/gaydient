import gradients from '../../data/gradients.json';
import { Gradient } from '../Gradient';

import styles from './List.module.css';

export const List = () => (
  <div className={styles.list}>
    {gradients.map(({ name, colours }) => (
      <Gradient key={name} name={name} colours={colours} />
    ))}
  </div>
);
