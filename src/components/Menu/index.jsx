import { Avatar, AppBar, Box, Button, Container, IconButton,Menu as MenuBar, MenuItem, Tooltip, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/images/Logo-Cineplanet.png'
import { useState } from 'react';
import '../../assets/scss/components/menu.scss'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const pages = [{
        name:'Home',
        link: ''}, 
    {
        name:'Dulceria',
        link:'candystore'
    }];
const settings = [{   
    name:'Logout',
    link:'logout'
}]

const Menu = ({user}) => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = (page) => {
        navigate(page)
        setAnchorElNav(null);
    };

    const handleClickNavMenu = (page) => {
        page === 'Home' ? 
        navigate(''):
        navigate(page);
      };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                {/* <img className='Menu__logo-d' src={Logo} alt="" width='200'/> */}

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <MenuBar
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                        display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                        <MenuItem key={page.name} onClick={()=>handleCloseNavMenu(page.link)}>
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem>
                        ))}
                    </MenuBar>
                </Box>

                <img className='Menu__logo-m' src={Logo} alt="" width='200'/>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                        key={page.name}
                        onClick={()=> handleClickNavMenu(page.link)}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                        {page.name}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt={user.name} src={user.imageUrl} />
                        </IconButton>
                    </Tooltip>
                    <MenuBar
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                         {Object.keys(user).length>0?
                            settings.map((setting) => (
                            <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                                <Typography 
                                textAlign="center"
                                onClick={()=> handleClickNavMenu(setting.link)}
                                >
                                    {setting.name}
                                </Typography>
                            </MenuItem>
                            )):
                            <MenuItem key='userInvited' onClick={handleCloseUserMenu}>
                                <Typography 
                                textAlign="center"
                                onClick={()=> handleClickNavMenu('login')}
                                >
                                    Login
                                </Typography>
                            </MenuItem>
                        } 
                    </MenuBar>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
const mapStateToProps = reducers => {
    return {
        user:reducers.sessionReducer.user,
    }
}
export default connect(mapStateToProps)(Menu)