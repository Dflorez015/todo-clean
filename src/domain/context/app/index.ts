import create from "zustand";
import { AppRepository, mainThemes } from "./repository";

export const appStore = create<AppRepository>((set) => ({
    myThemes: mainThemes,
    themeChoosen: mainThemes[0],
    changedTheme: (index) => set((state) => ({ ...state, themeChoosen: state.myThemes[index] }))
}))