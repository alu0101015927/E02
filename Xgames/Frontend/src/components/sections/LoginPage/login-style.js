import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';

/*const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#69f0ae',
            light: '#b2ff59',
            dark: '',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
    }
})*/
const useStyles = makeStyles(theme => ({
    '@global':{
        body:{
            backgroundColor: theme.palette.common.blue,
        },
    },
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form :{
        marginTop: theme.spacing(1),
    },
    submit_button:{
        margin: theme.spacing(3, 0, 2),

    },
    register_button:{
        margin: theme.spacing(3, 0, 2),

    },    
}))