import { GradientType, useConfigStore } from '../../store/ConfigStore';

import { getDirectionOptions } from './ConfigPanel.utils';

import styles from './ConfigPanel.module.css';

export const ConfigPanel = () => {
  const config = useConfigStore();

  const directionOptions = getDirectionOptions(config.type);

  const setType = (type: GradientType) => {
    config.setType(type);

    const newDirectionOptions = getDirectionOptions(type);
    config.setDirection(newDirectionOptions[0]?.value || '');
  };

  return (
    <form className={styles.configPanel}>
      <h2 className={styles.heading}>Settings</h2>

      <div className={styles.formElement}>
        <label htmlFor="type">Gradient type</label>
        <select
          id="type"
          value={config.type}
          onChange={(e) => setType(e.target.value as GradientType)}
        >
          <option value="linear">Linear</option>
          <option value="radial">Radial</option>
          <option value="conic">Conic</option>
        </select>
      </div>

      {!!directionOptions.length && (
        <div className={styles.formElement}>
          <label htmlFor="direction">Direction</label>
          <select
            id="direction"
            value={config.direction}
            onChange={(e) => config.setDirection(e.target.value)}
          >
            {directionOptions.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      )}

      <label className={styles.formElement} htmlFor="reverse">
        <input
          type="checkbox"
          id="reverse"
          checked={config.reverse}
          onChange={(e) => config.setReverse(e.target.checked)}
        />
        Reverse
      </label>

      <label className={styles.formElement} htmlFor="hard-stops">
        <input
          type="checkbox"
          id="hard-stops"
          checked={config.hardStops}
          onChange={(e) => config.setHardStops(e.target.checked)}
        />
        Hard stops
      </label>

      <label className={styles.formElement} htmlFor="symmetry">
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
