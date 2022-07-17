import { ColorTheme } from "domain/entities/app";

export interface AppRepository {
    myThemes:            ColorTheme[];
    themeChoosen:        ColorTheme;
    changedTheme:        (index: number) => void;
}

export const mainThemes: ColorTheme[] = [
    {
        main: "#232325",
        second: "#2B2B2D",
        third: "#017D85",
        hoverScroll: "#015d63",
        text: "#BFBFBF",
        title: "#228580",
    }
]