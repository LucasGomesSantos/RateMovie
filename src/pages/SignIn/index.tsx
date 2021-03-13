import React from 'react';
import {useState} from 'react'
import { Link,
        useParams 
  } from "react-router-dom";

import { Container, Content, Background } from './styles';

const initialValue = {
    name: '',
}

const GuestForm = () => {
    const [value, setValue] = useState(initialValue);
}

function onChange(ev) {
    const { name, value } =ev.target;
    localStorage.setItem('keyItemName', value)
}


const SignIn: React.FC = () => {
   

    return (
    <Container>
        <Content>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Funny_movie_logo.png" alt ="logo"></img>
            <form>
                <h1>Acessar como visitante</h1>
                <input id="name" placeholder="Nome" onChange={onChange} />
                <Link to="./RepositoryList"><button type="button">Entrar</button></Link>
            </form>
        </Content>
     <Background/>
    </Container>
    );
};

export default SignIn;