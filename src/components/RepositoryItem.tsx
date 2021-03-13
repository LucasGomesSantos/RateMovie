import { Link,
    useParams 
} from "react-router-dom";

const urlBase = 'https://image.tmdb.org/t/p/w300/'
const urlDetails ='./RepositoryDetails'

interface RepositoryItemProps {
    repository: {
        id: any;
        original_title: string;
        vote_average: string;
        overview: string;
        poster_path: string;
        release_date: string;
    }
}


export function RepositoryItem(props: RepositoryItemProps){
    return(   
        <li> 
         <div className="infoMovie">
            <img src={urlBase+props.repository.poster_path} alt={props.repository.original_title}/>
         </div>
            <strong>{props.repository.original_title ?? 'Sem Nome'}</strong>
            <p>{props.repository.overview}</p>
            <strong>Nota</strong>
            <p>{props.repository.vote_average}</p>
            <Link to={urlDetails+props.repository.id}><button>Detalhes</button></Link>
        </li>
    )
}