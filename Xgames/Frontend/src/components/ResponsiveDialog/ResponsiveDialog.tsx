import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import image from '../../assets/images/indice.jpeg'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    img: {
        height: 70,
    },
}));


const ResponsiveDialog: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Mas Info
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <h1> game.name</h1>
                <img src={image} alt="image" />
                game.genero
                game.price
                game.description
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Borrar Juego
                </Button>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Editar Juego
                </Button>
            </Dialog>
        </div>
    );
};

export default ResponsiveDialog;