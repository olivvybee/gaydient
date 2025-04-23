import './App.css';
import { ConfigPanel } from './components/ConfigPanel/ConfigPanel';
import { List } from './components/List';

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
    <ConfigPanel />

    <List />
  </div>
);

export default App;
