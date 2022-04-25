import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardPremiere = ({premiere}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('login')
  } 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea 
        sx={{ flex: '1 0 auto' }}
        onClick={handleClick}
      >
        <CardMedia
          component="img"
          height="350"
          image={premiere.image}
          alt="prmiere"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {premiere.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardPremiere