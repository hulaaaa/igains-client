import { create } from 'zustand';

type Store = {
  visibleModal: boolean
  voidVisibleModal: () => void

  visibleModalDelete: boolean
  voidVisibleModalDelete: () => void

  visibleModalEdit: boolean
  voidVisibleModalEdit: () => void

  visibleModalAwards: boolean
  voidVisibleModalAwards: () => void

  awardsItem: {title:string,  icon:any, present:number, }
  voidAwardsItem: () => void
}


export const useStore = create<Store>()((set) => ({
    visibleModal: false,
    voidVisibleModal: () => set((state) => ({ visibleModal: !state.visibleModal })),

    visibleModalDelete: false,
    voidVisibleModalDelete: () => set((state) => ({ visibleModalDelete: !state.visibleModalDelete })),

    visibleModalEdit: false,
    voidVisibleModalEdit: () => set((state) => ({ visibleModalEdit: !state.visibleModalEdit })),
    
    visibleModalAwards: false,
    voidVisibleModalAwards: () => set((state) => ({ visibleModalAwards: !state.visibleModalAwards })),

    awardsItem: {
      title: '',
      icon: '',
      present: 0,
    },
    voidAwardsItem: (item) => set((state) => ({ awardsItem: item})),
}))
