import { create } from 'zustand';

export type GradientType = 'linear' | 'radial' | 'conic';

interface Config {
  type: GradientType;
  setType: (type: GradientType) => void;

  direction: string;
  setDirection: (direction: string) => void;

  reverse: boolean;
  setReverse: (reverse: boolean) => void;

  hardStops: boolean;
  setHardStops: (hardStops: boolean) => void;

  symmetry: boolean;
  setSymmetry: (symmetry: boolean) => void;
}

export const useConfigStore = create<Config>((set) => ({
  type: 'linear',
  setType: (type) => set({ type }),

  direction: '180deg',
  setDirection: (direction) => set({ direction }),

  reverse: false,
  setReverse: (reverse) => set({ reverse }),

  hardStops: true,
  setHardStops: (hardStops) => set({ hardStops }),

  symmetry: true,
  setSymmetry: (symmetry) => set({ symmetry }),
}));
