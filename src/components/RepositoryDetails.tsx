import { useState, useEffect } from "react";
import FeaturedMovie from '../components/FeaturedMovieDetail';
import Header from '../components/Header';

import '../styles/repositories.scss'

interface Repository{
    id: any;
    original_title: string;
    vote_average: string;
    overview: string;
    poster_path: string;
    release_date: string;
    popularity: string;
    tagline: string;
    genres: string;
}



export function RepositoryDetails(id){

const idMovie = id['match']['params'].id


const [movie, setRepositorie] = useState<Repository[]>([])
const [blackHeader, setblackHeader]= useState(false);
const [retPost, setPost] = useState<[]>([])
const [index, setIndex]= useState(null);
const nome = localStorage.getItem('keyItemName')
const API_KEY = '0ad7ce2d705fb476cb9ac2387a7fc0b0';
const API_BASE = 'https://api.themoviedb.org/3';
const endpoint = `/movie/${idMovie}?language=pt-BR&api_key=${API_KEY}`

useEffect(() => {
    fetch(`${API_BASE}${endpoint}`)
    .then(response => response.json())
    .then(data => setRepositorie(data))
}, []);


 function enviarNota(){

 

    if (localStorage.getItem('keyItemPonto') % 0.50 == 0)  {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value: localStorage.getItem('keyItemPonto')})
        };
        fetch('https://api.themoviedb.org/3/movie/550/rating?api_key=0ad7ce2d705fb476cb9ac2387a7fc0b0&guest_session_id=6b187fcb2348557e79274cb37fc2e325', requestOptions)
        .then(response => response.json())
        .then(data => setPost(data));
        window.alert('Obrigado, sua nota foi enviada com sucesso')
    }
    else { 
        window.alert('O valor da pontuação precisa ser multiplo de 0.5')
    }
}

function onChange(ev) {
    const { name, value } =ev.target;
    localStorage.setItem('keyItemPonto', value)
}

    return (
        <section className ="repository-list">

        <Header black={blackHeader}/>

        {movie && 
        <FeaturedMovie item ={movie}/> 
        }

        <input className="inpNota" id="nota" type="number" onChange={onChange}/>
        <button className="envNota" onClick={enviarNota}>pontuar</button>
   
        </section>
    );
}


export default RepositoryDetails;