import './App.css';
import { Gradient } from './components/Gradient';

import gradients from './gradients.json';

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    {gradients.map(({ name, colours }) => (
      <Gradient key={name} name={name} colours={colours} />
    ))}
  </div>
);

export default App;
