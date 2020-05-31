import React, { useEffect } from 'react';
import { Container, CircularProgress } from '@material-ui/core';

import BookResult from '../../Components/BookResult';

export default ({ props }) => {
    const {q, r} = props.match.params;

    const url = `http://localhost:8080/ModeloVectorial/api/buscador/?q=${q}&r=${r}`;
    const books = {};
    console.log(url)

    async function buscarDatos() {
        try {
            books = fetch(url);
            
        } catch (error) {
            
        }
    }



    const renderBooks = () => {
        if (books) {
            return books.map((value, index) => <BookResult key={index} {...value}/>)
        }else{
            return <CircularProgress size={100} color="primary"/>
        }
 
        return <div/>;
    };
    
    return(
        <Container>
            {renderBooks()}
        </Container>
    )
}