import React from 'react';
import './styles.scss';

export default ({item}) => {

    let firstDate = new Date(item?.release_date);

    let genres = [];
    for(let i in item?.genres){
        genres.push(item.genres[i].name);
    }

    let descr = item?.overview;
    if(descr?.length > 200){
        descr = descr.substring(0, 200)  + '...';
     }


    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item?.poster_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item?.original_title}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item?.vote_average} pontos</div>
                        <div className="featured--points">{item?.popularity} pontos de popularidade</div>
                        <div className="featured--points">{item?.tagline} </div>
                        <div className="featured--year">Ano de lançamento {firstDate?.getFullYear()}</div>
                    </div>
                        <div className="featured--description">{descr}</div>        
                        <div className="featured--genres">Gêneros: <strong> {genres.join(', ')} </strong></div>   
                </div>
            </div>
        </section>

    )
}
