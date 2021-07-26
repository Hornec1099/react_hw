import React from 'react';
import Link from './Link';

const LinkList = ({films}) => {

    const filmNodes = films.map ( ( film ) => {
        return(  
        <Link film = {film}  key ={film.id}/>
    )})
   
    const lastLink ={id: 6,
        name: "View more upcoming releases >>",
        url: "https://www.imdb.com/calendar/?region=gb"}  

    return (
        <section>
            <h2> Upcoming Film Releases for UK </h2>
            <ul>
           {filmNodes}
           </ul>
            <hr></hr>
           <a href = 'https://www.imdb.com/calendar/?region=gb'> View More upcoming releases >> </a>
        </section>
    )
}
export default LinkList