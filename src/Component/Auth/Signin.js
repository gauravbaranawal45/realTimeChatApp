import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  paper: {
    //marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      psw:'',
      email_mob:''
    },
    validationSchema: Yup.object({
      email_mob: Yup.string()
        .min(10, 'Must be 15 characters or less')
        .required('Required'),
      psw: Yup.string()
        .required('Required'),
    }),
    onSubmit: values => {
      let email = values.email_mob;
      let password = values.psw;

      axios
      .post("http://localhost:8000/user/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data)
        if(!response.data.error){
          localStorage.setItem('__chatauth',JSON.stringify(response.data));
          window.location.href = "/messenger"
        }else{
          alert(response.data.error)
        }
      })
      .catch((err) => {
      //   if (
      //     err &&
      //     err.response &&
      //     err.response.data &&
      //     err.response.data.message
      //   )
      //     makeToast("error", err.response.data.message);
      });
    },
  });
  const btnDisable = () => {
    let errorLen = Object.keys(formik.errors).length;
    let touchedLen = Object.keys(formik.touched).length;
    if(errorLen===0 && touchedLen>0){
      return true
    }else{
      return false
    }
  }
  // console.log(props)
  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address Or Mobile"
            name="email_mob"
            autoComplete="new-password"
            autoFocus
            {...formik.getFieldProps('email_mob')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="psw"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            {...formik.getFieldProps('psw')}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!btnDisable()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" onClick={props.clickForgotpassword} variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2" onClick={props.clickDontAccount}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}