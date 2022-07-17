import styled from "styled-components";
import { scroll } from "./util-styled";

export const HomeWrapper = styled.main`
    width: clamp(30ch, 45%, 125ch);
    margin: auto;
    height: 100%;    
    & h5, p {
        color: var(--text);
    }
    `

export const HomeListWrapper = styled.div`
    width: 100%;
    height: 85%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 5%;
    
    & > h1 {
        font-size: clamp(26px, 2vw, 32px);
        margin-top: 8%;
        color: var(--title);
    }
    `

export const TaskListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .2rem;
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
    ${scroll};
    `

export const TaskStyleWrapper = styled.div`
    width: calc(100% - 1rem);
    border-radius: 5px;
    background-color: var(--second);
    padding: .8rem 0.5rem;
    display: inline-flex;
    gap: 0.5rem;
    & > h5 {
        font-size: clamp(20px, 2vw, 24px);
        border-left: 1px solid var(--gray);
        padding-left: .5rem;
        overflow-x: hidden;
        text-overflow: ellipsis;
        transition: text-decoration, color .2s linear;
    }
    & > input[type="checkbox"]:checked + h5{
        text-decoration: line-through;
        color: var(--gray);
    }
    `

export const InputWrapper = styled.form`
    width: 100%;    
    position: relative;
    display: flex;
    align-items: center;    
`