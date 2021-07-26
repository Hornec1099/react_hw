import React from 'react';

const Link =  ({film}) => {

    return( 
        
        <li><a href ='{film.url}'> {film.name}</a></li>

    )
}

export default Link