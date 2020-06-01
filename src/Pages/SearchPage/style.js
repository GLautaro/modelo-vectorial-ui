import { makeStyles } from '@material-ui/styles';

const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default makeStyles({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff666',
        ...centeredStyleObj
    },
    cardContainer: {
        flexDirection: 'column',
        width: 800,
        height: 100,
        padding: '2rem',
        backgroundColor: '#ECF7F9',
        ...centeredStyleObj
    },
    textContainer: {
        marginLeft: '.5rem'
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