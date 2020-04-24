import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Theme, Container, Grid, Typography, Box } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "#fff5f8",
    flexDirection: "column"
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
    display: "flex",
    position: "relative"
  },
  icons: {
    display: "flex"
  },
  icon: {
    width: 48,
    height: 48,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    marginRight: theme.spacing(1),
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark
    }
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  language: {
    marginBottom: theme.spacing(1)
  },
  copyright: {
    width: "max-content",
    display: "block",
    marginTop: theme.spacing(2)
  }
}));

const Footer: React.FC = () => {
  const classes = useStyles();


  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5} alignContent="center">
          <Grid item xs={12} sm={12} md={3}>

            <Box className={classes.icon}>
              <FacebookIcon fontSize="large" />
            </Box>



            <Box className={classes.icon}>
              <TwitterIcon fontSize="large" />
            </Box>

            <Box className={classes.copyright}>

            </Box>
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <Typography variant="h6" gutterBottom>
              {"legal"}
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>

              </li>
              <li className={classes.listItem}>

              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={9} md={7}>
            <Typography variant="h6" gutterBottom className={classes.language}>
              {"language"}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;