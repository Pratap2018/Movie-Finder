import * as React from 'react';

export interface IBodyCompProps {
    title?:string
    image?:string
    actors?:string
    awards?:string
    country?:string
    boxoffice?:string
    genere?:string
    lang?:string
    released?:string
    ploat?:string
    type?:string
    director?:string
    imdbRating?:string
}

export function BodyComp (props: IBodyCompProps) {
  return (
    <div>    
        <h3>{props.title}</h3>
        <h5>{props.type}</h5>
        <img src={props.image} alt="Image not found" />
        <p><h6>Rating IMDB: </h6>{props.imdbRating}</p>
        <p><h6>Awards: </h6>{props.awards}</p>
        <p><h6>Director: </h6>{props.director}</p>
        <p><h6>Actors: </h6>{props.actors}</p>
        <p><h6>Genre: </h6>{props.genere}</p>
        <p><h6>Country: </h6>{props.country}</p>
        <p><h6>Language: </h6>{props.lang}</p>
        <p><h6>Relased: </h6>{props.released}</p>
        <p><h6>Boxoffice: </h6>{props.boxoffice}</p>
        <p><h6>Awards: </h6>{props.awards}</p>
        <p><h6>Plot: </h6>{props.ploat}</p>
        
    </div>
  );
}
