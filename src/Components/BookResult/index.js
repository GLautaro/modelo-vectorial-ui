import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';

import style from './style';

const BookResult = ({ nombre, peso, ruta }) => {
    const classes = style();
    return(
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    
                </Grid>
                <Grid item className={classes.titlesContainer}>
                    <Typography>{nombre}</Typography>
                    <Typography>{peso}</Typography>
                    <Button color="primary" variant="contained" href={ruta}>Ver más</Button>
                </Grid>
            </Grid>
        </Card>
    );
}

export default BookResult;