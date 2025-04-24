import { ConfigPanel } from './components/ConfigPanel/ConfigPanel';
import { List } from './components/List';

import styles from './App.module.css';

const App = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <h1 className={styles.title}>Gaydient</h1>
      <p className={styles.description}>
        Customise the gradients and then click one to copy its code to your
        clipboard!
      </p>
      <ConfigPanel />
      <List />
    </div>

    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <span>
          Created by{' '}
          <a href="https://honeycomb.engineer/@olivvybee">olivvybee</a>
        </span>

        <a href="https://github.com/olivvybee/gaydient">Source code</a>
      </div>
    </div>
  </div>
);

export default App;
