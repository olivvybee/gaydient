import { GradientType } from '../../store/ConfigStore';

export const getDirectionOptions = (type: GradientType) => {
  switch (type) {
    case 'linear':
      return [
        { label: 'Horizontal', value: '90deg' },
        { label: 'Vertical', value: '180deg' },
        { label: 'Diagonal (top to bottom)', value: '135deg' },
        { label: 'Diagonal (bottom to top)', value: '45deg' },
      ];

    case 'radial':
      return [
        { label: 'Circle', value: 'circle' },
        { label: 'Ellipse', value: 'ellipse' },
      ];

    case 'conic':
      return [];
  }
};
