import './App.css';
import { ConfigPanel } from './components/ConfigPanel/ConfigPanel';
import { Gradient } from './components/Gradient';

import gradients from './gradients.json';

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
    <ConfigPanel />

    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {gradients.map(({ name, colours }) => (
        <Gradient key={name} name={name} colours={colours} />
      ))}
    </div>
  </div>
);

export default App;
