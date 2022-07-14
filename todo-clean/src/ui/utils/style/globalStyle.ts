import { createGlobalStyle } from "styled-components";
import { colorThemes } from "../interface/styled";

export const GlobalStyle = createGlobalStyle<colorThemes>`

*{
    padding: 0px;
    margin: 0px;
    font-family: "Poppins", sans-serif;
}

:root {
    --main: ${({ main }) => main};
    --second: ${({ second }) => second};
    --third: ${({ third }) => third};
    --text: ${({ text }) => text};
    --title: ${({ title }) => title};
    --gray: #5C5A5B;
}

#root {
    width: 100vw;
    height: 100vh;
    background-color: var(--main);
}

& input[type="text"] {
    padding: 10px;
    width: 100%;
    border: 1px solid var(--third);
    border-radius: 8px;
    background-color: var(--second);
    color: var(--text);
    font-size: clamp(16px, 2vw, 20px);
    transition: outline 0.5s linear;
    :focus {
        outline: .1rem solid var(--third);
    }
}

`