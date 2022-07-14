import styled, { css, keyframes } from "styled-components";

export const scroll = css`
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--second);
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  background: var(--main);
  border-radius: 8px;
  :hover{
    background: var(--text);
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

export const StyleRadioInput = styled.input`
-moz-appearance:none;
appearance:none;
position: relative;
cursor: pointer;
display: flex;
align-self: center;
  &:after {
        width: 24px;
        height: 24px;
        border-radius: 15px;
        position: relative;        
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid var(--gray);
    }

    &:checked:after {
        width: 24px;
        height: 24px;
        border-radius: 15px;
        position: relative;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid var(--gray);
      }
      &:checked:before{
        width: 24px;
        height: 24px;
        border-radius: 15px;
        position: absolute;
        animation: ${appear} .1s linear;
        background: var(--third) center/60% no-repeat url(/check.svg);
        content: '';
        display: inline-block;
        visibility: visible;
        z-index: 2;
        top: 2px;
        left: 2px;
    }
`

export const InputElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .2rem;
  align-items: center;
  width: 100%;
  & span {
    font-size: clamp(12px, 2vw, 14px);
    padding: 3px;
    color: red;
    display: none;
  }
  & input:invalid span {
    display: block;
  }
`

export const SubmitBtn = styled.button`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: ${gradient} 15s ease infinite;
  padding: .2rem;
  border: none;
  height: 33px;
  width: 35px;
  border-radius: 50%;
  position: relative;
  top: 2px;
  left: 5%;
  cursor: pointer;

  & svg {
    width: 20px;
    height: 20px;
    position: relative;
    top: 45%;
    left: 45%;
    transform: translate(-50%, -50%);
    border: none;
    fill: white;
  }

`