import { create } from "zustand";

type CoverImageStore = {
  isOpen: boolean;
  onOpen: () => void;
  onclose: () => void;
};

export const useCoverImage = create<CoverImageStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onclose: () => set({ isOpen: false }),
}));
