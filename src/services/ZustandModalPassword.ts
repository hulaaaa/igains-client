import { create } from 'zustand';

type Store = {
  visibleModal: boolean
  voidVisibleModal: () => void

  visibleModalDelete: boolean
  voidVisibleModalDelete: () => void

  visibleModalEdit: boolean
  voidVisibleModalEdit: () => void

}


export const useStore = create<Store>()((set) => ({
    visibleModal: false,
    voidVisibleModal: () => set((state) => ({ visibleModal: !state.visibleModal })),

    visibleModalDelete: false,
    voidVisibleModalDelete: () => set((state) => ({ visibleModalDelete: !state.visibleModalDelete })),

    visibleModalEdit: false,
    voidVisibleModalEdit: () => set((state) => ({ visibleModalEdit: !state.visibleModalEdit })),
    
}))
