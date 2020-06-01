import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';
import BookResult from '../../Components/BookResult'

import { BookIcon } from '../../icons';
import styles from './style';


export default () => {

    const [searchText, setSearchText] = useState('');
    const [quantityDocs, setQuantityDocs] = useState('');
    const [bookResult, setBookResult] = useState([]);
    const classes = styles();

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    };

    const handleQuantityDocsChange = event => {
        setQuantityDocs(event.target.value);
    };

    const handleCleanTextClick = event => {
        setSearchText('');
        setQuantityDocs('');
    }

    const handleSearchTextClick = event => {

        fetch(`http://localhost:8080/ModeloVectorial/buscador/?q=${searchText}&r=${quantityDocs}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            setBookResult(myJson);
          }); 
             
    }



    return(
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>                    
                    <Grid>
                        <Typography className={classes.title}>DLC - Motor de busqueda de archivos</Typography>
                    </Grid>                    
                </Grid>
                
                <Grid className={classes.textContainer}>
                    <Grid>
                        <TextField
                            value={searchText}
                            placeholder="Buscar..."                        
                            onChange={handleSearchTextChange}
                            />
                    </Grid>
                    <Grid>
                        <TextField
                            value={quantityDocs}
                            placeholder="Cantidad de documentos"
                            onChange={handleQuantityDocsChange}
                            />
                    </Grid>                    
                </Grid>                
                <Grid className={classes.buttonsContainer}>
                    <Button variant='contained' onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button variant='contained' className={classes.searchButton} color='primary' size='large' onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>
            </Card>    
            {bookResult.map((book) => <BookResult nombre={book.nombre} peso={book.peso} ruta={book.ruta}/>)}
        </Container>
    )
}