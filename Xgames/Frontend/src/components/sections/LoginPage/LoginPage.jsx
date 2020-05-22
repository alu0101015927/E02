import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
/*import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { palette } from '@material-ui/system';
*/
import { userActions } from '../../../_actions';


/*
const styles = theme => ({
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
});
*/
export class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false,
            loggedIn: false,
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
            this.setState({ loggedIn: true});
        }
        event.preventDefault();
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        //const classes = useStyles();
        return (
            /*<Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>*/
                //<TextField className="form-control" variant="outlined" margin="normal" required fullWidth name="username" id="username" autoFocus />
                <div className="col-md-6 col-md-offset-3"> 
                    <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <Button type="submit" fullWidth variant="contained" color="primary" className="btn btn-primary">Login</Button>
                        {loggingIn && <AutorenewIcon/>}
                        <Button fullWidth variant="contained" color="secondary" href="/register" className="btn btn-secondary">Register</Button>
                    </div>
                </form>
                </div>
            //</Container>
        );
    }
}

//export { LoginPage as ULoginPage };

/*LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};*/

LoginPage.defaultProps = {
    login: userActions.login,
    logout: userActions.logout
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export {connectedLoginPage as CLoginPage};
//export { LoginPage as ULoginPage, connectedLoginPage as LoginPage };

//export default withStyles(styles)(HigherOrderComponent);
