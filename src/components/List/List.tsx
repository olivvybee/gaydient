import gradients from '../../data/gradients.json';
import { Gradient } from '../Gradient';

import styles from './List.module.css';

export const List = () => (
  <ul className={styles.list} role="list">
    {gradients.map(({ name, colours }) => (
      <li key={name}>
        <Gradient name={name} colours={colours} />
      </li>
    ))}
  </ul>
);
