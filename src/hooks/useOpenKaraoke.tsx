import { create } from 'zustand';

interface OpenKaraokeModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useOpenKaraokeModal = create<OpenKaraokeModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));