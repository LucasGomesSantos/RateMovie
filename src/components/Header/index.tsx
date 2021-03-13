import React from 'react';
import './styles.scss';

import { Link,
    useParams 
} from "react-router-dom";

export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="header--logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Funny_movie_logo.png"/>
            </div>
            <div className="header--user">
            <Link to="./"><img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Sair"/></Link>
            </div>
        </header>
    )
}