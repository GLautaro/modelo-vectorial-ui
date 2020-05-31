import { makeStyles } from '@material-ui/styles';

const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default makeStyles({
    container: {
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: '#FCFCFC',
        ...centeredStyleObj
    },
    cardContainer: {
        flexDirection: 'column',
        width: 400,
        height: 200,
        padding: '2rem',
        backgroundColor: '#ECF7F9',
        ...centeredStyleObj
    },
    title: {
        fontSize: '1.5rem'
    },
    titleGridContainer: {
        ...centeredStyleObj
    },
    textFieldSearch: {
        width: '90%'
    },
    searchButton: {
        marginLeft: '.5rem'
    },
    buttonsContainer: {
        marginTop: '.5rem'
    },
    bookIcon: {
        fontSize: '1.5rem'
    }

});