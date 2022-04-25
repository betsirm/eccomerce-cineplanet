import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Menu from '../Menu'

const Layout = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column'}}>
        <Menu/> 
        <Outlet/>
    </Box>
  )
}

export default Layout