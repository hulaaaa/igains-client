import { create } from 'zustand';

type Store = {
  visibleModal: boolean
  voidVisibleModal: () => void

  visibleModalDelete: boolean
  voidVisibleModalDelete: () => void

  visibleModalEdit: boolean
  voidVisibleModalEdit: () => void

<<<<<<< HEAD
  selectWorkout: [{}]
  voidSelectWorkout: () => void
=======
>>>>>>> 3a20f0bc42af0017c948236814669fea45146814
}


export const useStore = create<Store>()((set) => ({
    visibleModal: false,
    voidVisibleModal: () => set((state) => ({ visibleModal: !state.visibleModal })),

    visibleModalDelete: false,
    voidVisibleModalDelete: () => set((state) => ({ visibleModalDelete: !state.visibleModalDelete })),

    visibleModalEdit: false,
    voidVisibleModalEdit: () => set((state) => ({ visibleModalEdit: !state.visibleModalEdit })),
    
<<<<<<< HEAD
    selectWorkout: [{}],
    voidSelectWorkout: (item:[{}]) => set((state) => ({ selectWorkout: item }))
=======
>>>>>>> 3a20f0bc42af0017c948236814669fea45146814
}))
