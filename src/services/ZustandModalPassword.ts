import { create } from 'zustand';

type Store = {
    visibleModal: boolean
    voidVisibleModal: () => void
}

export const useStore = create<Store>()((set) => ({
    visibleModal: false,
    voidVisibleModal: () => set((state) => ({ visibleModal: !state.visibleModal })),
}))
