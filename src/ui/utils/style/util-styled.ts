import { css, keyframes } from "styled-components";

export const scroll = css`
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--main);
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: var(--third);
  transition: background-color .2s linear;
  border-radius: 8px;
  :hover{
    background-color: var(--hover_scroll);
  }
}`

export const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const appear = keyframes`
  0% {
    opacity: 0;
  }
  80% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
`