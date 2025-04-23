import { GradientType, useConfigStore } from '../../store/ConfigStore';

export const ConfigPanel = () => {
  const config = useConfigStore();

  return (
    <form>
      <select
        value={config.type}
        onChange={(e) => config.setType(e.target.value as GradientType)}>
        <option value="linear">Linear</option>
        <option value="radial">Radial</option>
        <option value="conic">Conic</option>
      </select>
    </form>
  );
};
