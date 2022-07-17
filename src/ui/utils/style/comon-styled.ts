import styled from "styled-components"
import { appear, gradient } from "./util-styled"

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
  & input:invalid[data-focused="true"] {
    border-color: red;
    :focus {
        outline-color: red;
    }
    & ~ span {
      display: block;
    }
  }
`

export const SubmitBtn = styled.button`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: ${gradient} 15s ease infinite;
  border: none;
  height: 33px;
  width: 36px;
  border-radius: 50%;
  position: relative;
  top: 2px;
  left: 6%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    border: none;
    fill: white;
  }
`