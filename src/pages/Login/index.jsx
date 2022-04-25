import { Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, IconButton, Link, Paper, TextField, Typography } from '@mui/material'
import { red, blue } from '@mui/material/colors';
import fondo from '../../assets/images/fondo4.jpg'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleLogin from 'react-google-login';
import '../../assets/scss/views/login.scss'
import { idClient } from '../../config';
import {useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import * as sessionActions from '../../actions/sessionActions'

const Login = ({loginRequest}) => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }

  const responseGoogle = (data) => {
    console.log(data)
    loginRequest(data)
    if(false)
    navigate('../candyStore')
  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${fondo})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

          <Box
            sx={{
              my: { xs: 10, md: 15 } ,
              mx: { xs: 7, md: 10 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container className='login__link'>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid> 
              </Grid>
              <Grid container className='login__social'>
                <Grid item sx={{
                  mt:2,
                  width:'100%'
                }}>
                  <hr/>
                  <Typography variant="body2" color="initial">or login with</Typography>
                </Grid> 
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  justify="center"
                  alignItems="center"
                  alignContent="center"
                  wrap="nowrap"
                  mt="1rem"
                  
                >
                  <GoogleLogin
                    clientId={idClient}
                    render={renderProps => (
                      <IconButton sx={{ m: 1 }} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <GoogleIcon  sx={{ color: red[500] }}/>
                      </IconButton>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                  
                  <IconButton sx={{ m: 1 }}>
                    <FacebookIcon  sx={{ color: blue[500] }}/>
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
  )
}

const mapStateToProps = reducers => {
  return reducers.sessionReducer;
}

export default connect(mapStateToProps,sessionActions)(Login)