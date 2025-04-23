import { ConfigPanel } from './components/ConfigPanel/ConfigPanel';
import { List } from './components/List';

import styles from './App.module.css';

const App = () => (
  <div className={styles.wrapper}>
    <ConfigPanel />
    <List />
  </div>
);

export default App;
