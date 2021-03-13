import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
import FeaturedMovie from '../components/FeaturedMovie';
import Header from '../components/Header';

import '../styles/repositories.scss'


interface Repository{
    id: any;
    original_title: string;
    vote_average: string;
    overview: string;
    poster_path: string;
    release_date: string;
}

interface Guest{
    guest_session_id: string;
}



export function RepositoryList(){

const [repositories, setRepositories] = useState<Repository[]>([])
const [guests, setGuests] = useState<Guest>()
const [blackHeader, setblackHeader]= useState(false);
const [index, setIndex]= useState(null);
const nome = localStorage.getItem('keyItemName')
const urlBase = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=0ad7ce2d705fb476cb9ac2387a7fc0b0&page='


    
        useEffect(() => {
            const repos = []
            for(let i=1; i<6; i++){
            fetch(urlBase+i)
            .then(response => response.json())
            .then(data => repos.push(...data['results']))
                //setRepositories(data['results']))
            }
            let step1 = (repositories.length-1) - 0 + 1;
            let step2 = Math.random() * step1;
            let step3 = Math.floor(step2) + 0;
            setIndex(step3);

            setRepositories(repos.sort(x => x.vote_average));
        }, [])


useEffect(() => {
    fetch('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=0ad7ce2d705fb476cb9ac2387a7fc0b0')
    .then(response => response.json())
    .then(data => setGuests(data))
}, []);
 

    return (
        <section className ="repository-list">
        <Header black={blackHeader}/>

        {repositories && 
        <FeaturedMovie item ={repositories[index]}/> 
      }

        <h1> Top 100 Filmes </h1>
        <h3>Bem vindo {nome}, você está conectado como o visitante ID: {guests?.guest_session_id}</h3>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.id} repository = {repository} />
                 })}
            </ul>
        </section>
    );
}

export default RepositoryList;