import { GradientType, useConfigStore } from '../../store/ConfigStore';
import { getDirectionOptions } from './ConfigPanel.utils';

export const ConfigPanel = () => {
  const config = useConfigStore();

  const directionOptions = getDirectionOptions(config.type);

  const setType = (type: GradientType) => {
    config.setType(type);

    const newDirectionOptions = getDirectionOptions(type);
    config.setDirection(newDirectionOptions[0]?.value || '');
  };

  console.log(config);

  return (
    <form>
      <select
        value={config.type}
        onChange={(e) => setType(e.target.value as GradientType)}>
        <option value="linear">Linear</option>
        <option value="radial">Radial</option>
        <option value="conic">Conic</option>
      </select>

      {!!directionOptions.length && (
        <select
          value={config.direction}
          onChange={(e) => config.setDirection(e.target.value)}>
          {directionOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      )}

      <label htmlFor="reverse">
        <input
          type="checkbox"
          id="reverse"
          checked={config.reverse}
          onChange={(e) => config.setReverse(e.target.checked)}
        />
        Reverse
      </label>

      <label htmlFor="hard-stops">
        <input
          type="checkbox"
          id="hard-stops"
          checked={config.hardStops}
          onChange={(e) => config.setHardStops(e.target.checked)}
        />
        Hard stops
      </label>

      <label htmlFor="symmetry">
        <input
          type="checkbox"
          id="symmetry"
          checked={config.symmetry}
          onChange={(e) => config.setSymmetry(e.target.checked)}
        />
        Preserve symmetry
      </label>
    </form>
  );
};
