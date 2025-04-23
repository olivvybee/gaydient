import { GradientType } from '../../store/ConfigStore';

export const getDirectionOptions = (type: GradientType) => {
  switch (type) {
    case 'linear':
      return [
        { label: 'Horizontal', value: '90deg' },
        { label: 'Vertical', value: '180deg' },
        { label: 'Diagonal', value: '45deg' },
      ];
  }
};
