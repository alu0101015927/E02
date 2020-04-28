import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Theme, Container, Typography, Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) => ({
    bar: {
        display: 'block',
        minWidth: 100,
        height: 700,
        margin: '0px',
        marginBottom: '50px',
        marginRight: '0px'
    },
    news: {
        backgroundColor: 'green',
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        padding: '20px',
        marginTop: '30px',
    },
    h3: {
        textTransform: 'uppercase',
        fontSize: '18px',
        margin:'0px',
        paddingBottom: '10px',
        marginBottom: '10px',
        borderBottom: '3px solid #eee',
      }

}));


const SideBar: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container justify='flex-start'>
            <aside id="sidebar" >
                <div id="nav-blog" className={classes.news} >
                    <h3 className={classes.h3}>Ver últimas noticias sobre Videojuegos</h3>
                    <a href="#index" className="btn btn-success">Noticias</a>
                </div>
                <div id="search" className="sidebar-item">
                    <h3 className={classes.h3}>Buscador</h3>
                    <p>Encuentra el juego que buscas</p>
                    <form>
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>
                </div>
            </aside>
        </Grid>

    );

}

export default SideBar;