import { useTheme } from '@emotion/react';
import { Box, Card, CardContent, CardMedia, IconButton, Typography, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

const CardCandy = ({candy}) => {

  const theme = useTheme();
  const [cont, setCont] = useState(0)

  const handleAdd = () => {
    setCont(cont + 1)
  }

  const handleRemove = () => {
    if(cont > 0)
    setCont(cont - 1)
  }

  return (
    <Card sx={{ display: 'flex', flexDirection:'column'}}>
      <CardMedia
        component="img"
        sx={{ width: 200, height: 250, objectFit:'contain', m:'auto' }}
        image={candy.name}
        alt="candy"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {candy.description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           S/. {candy.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex',justifyContent: 'center',gap:'1rem', alignItems: 'center', p:2 }}>
          <IconButton aria-label="previous" onClick={handleRemove}>
            <RemoveIcon />
          </IconButton>
          <TextField
            id="outlined-number"
            type="number"
            value={cont}
            className='CardCandy__cont'
            // InputLabelProps={{
            //   shrink: true,
            // }}
          />
          <IconButton aria-label="next" onClick={handleAdd}>
             <AddIcon />
          </IconButton>
        </Box>
      </Box>
      
    </Card>
  )
}

export default CardCandy