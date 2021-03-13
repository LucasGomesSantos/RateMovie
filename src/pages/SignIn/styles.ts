import styled from 'styled-components';
import signBackgroundImg from '../../assets/sign-in-background2.png';
import { shade } from 'polished'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;

    img {
        width: 400px;
        height: 200px;
    }

    form {
        margin: 80px;
        width: 340x;
        text-align: center;
    }

    h1 {
        margin-bottom: 24px;
    }

    input{
        background: #232129;
        border-radius:10px;
        border: 2px solid #232129;
        color: #FFF;
        padding: 16px;
        width: 100%;

        & + input {
            margin-top: 8px; 
        }
    }

    button {
        background: #57ade6;
        height: 56px;
        border-radius:10px;
        padding: 0 16px;
        color: #FFF;
        font-weight: 500;
        margin-top: 16px;
        width: 100%;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#57ade6')};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signBackgroundImg}) no-repeat center;
    background-size: cover;
`;