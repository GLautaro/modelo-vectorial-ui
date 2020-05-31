import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

import { BookIcon } from '../../icons';
import styles from './style';


export default ({ history }) => {

    const [searchText, setSearchText] = useState('');
    const classes = styles();

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    };

    const handleCleanTextClick = event => {
        setSearchText('');
    }

    const handleSearchTextClick = event => {
        history.push(`/results/${searchText}/${3}`);
        
    }


    return(
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <BookIcon className={classes.bookIcon}/>
                    </Grid>
                    <Grid>
                        <Typography className={classes.title}>Motor de busqueda de archivos</Typography>
                    </Grid>
                    <Grid>
                        <BookIcon className={classes.bookIcon}/>
                    </Grid>
                </Grid>
                <TextField
                    value={searchText}
                    placeholder="Buscar..."
                    className={classes.textFieldSearch}
                    onChange={handleSearchTextChange}/>
                <Grid className={classes.buttonsContainer}>
                    <Button variant='contained' onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button variant='contained' className={classes.searchButton} color='primary' size='large' onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>
            </Card>
        </Container>
    )
}