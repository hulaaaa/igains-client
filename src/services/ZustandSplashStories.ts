import { create } from "zustand";

export const useSplashStories = create((set) => ({
    welcomeStories: [
        "Sit back never worry about sharing bills! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sunt quia? Sit back never worry about sharing bills!",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sunt quia? Sit back never worry about sharing bills! Lorem ipsum dolor sit amet. Corporis, sunt quia?",
        "Risus, sit amet, consectetur adipisicing elit. Corporis, sunt quia? Sit back never worry about sharing bills! Lorem ipsum dolor sit amet.",
        "Random text, consectetur adipisicing elit. Corporis, sunt quia? Sit back never worry about sharing bills! Lorem ipsum dolor sit amet."
    ],
    changedIndex: 0,
    setChangedIndex: (index: number) => set({ changedIndex: index }),
}));
