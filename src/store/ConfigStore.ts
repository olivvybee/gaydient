import { create } from 'zustand';

interface Config {
  type: 'linear' | 'radial' | 'conic';
  direction: string;
  reverse: boolean;
  hardStops: boolean;
  symmetry: boolean;
}

export const useConfigStore = create<Config>((set) => ({
  type: 'linear',
  setType: (type: Config['type']) => set({ type }),

  direction: '90deg',
  setDirection: (direction: string) => set({ direction }),

  reverse: false,
  setReverse: (reverse: boolean) => set({ reverse }),

  hardStops: true,
  setHardStops: (hardStops: boolean) => set({ hardStops }),

  symmetry: false,
  setSymmetry: (symmetry: boolean) => set({ symmetry }),
}));
