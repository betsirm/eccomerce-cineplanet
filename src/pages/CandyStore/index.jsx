import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardCandy from '../../components/CardCandy';
import { getCandies } from '../../server/getFunctions';
import '../../assets/scss/views/candystore.scss'

const CandyStore = () => {

  const [candies, setCandies ] = useState([]);

  useEffect(() => {

    const app = async() => {
      const {items : data} = await getCandies();
      setCandies(data);
    }

    app()
    
    return () => {
      
    }
  }, [])
  

  return (
    <Box
      sx={{
        p:2
      }}
    >

      <Typography gutterBottom align="center" variant="h2" component="div">
          Dulceria
      </Typography>

      <Box 
      component="section" 
      sx={{ 
        p: 2, 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(14.2rem,1fr))',
        gridGap: '2rem',
        px:'7rem'
      }}>
      {
        candies.map((candy, key)=>(
          <CardCandy key={key} candy={candy}/>
        ))
      }
      </Box>

    </Box>

  )
}

export default CandyStore