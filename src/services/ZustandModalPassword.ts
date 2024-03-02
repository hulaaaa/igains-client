import { create } from 'zustand';

type Store = {
    visibleModal: boolean
    voidVisibleModal: () => void
    visibleModalDelete: boolean
    voidVisibleModalDelete: () => void
}


export const useStore = create<Store>()((set) => ({
    visibleModal: false,
    voidVisibleModal: () => set((state) => ({ visibleModal: !state.visibleModal })),

    visibleModalDelete: false,
    voidVisibleModalDelete: () => set((state) => ({ visibleModalDelete: !state.visibleModalDelete })),

}))
