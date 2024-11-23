import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;
  isPinned: boolean;
  toggleOpen: () => void;
  togglePin: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true,
  isPinned: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  togglePin: () => set((state) => ({ isPinned: !state.isPinned })),
}));