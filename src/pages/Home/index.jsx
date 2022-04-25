import CardPremiere  from "../../components/CardPremiere";
import { useEffect, useState } from "react";
import { getPremieres } from "../../server/getFunctions";
import { Box, Typography } from "@mui/material";


const Home = () => {

    const [premieres, setPremieres] = useState([]);

    useEffect(() => {
      
        const app = async()=>{
            const {premieres : data} = await getPremieres();
            setPremieres(data);
        }
    
        app();

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
          Premieres
      </Typography>

      <Box 
      component="section" 
      sx={{ 
        p: 2, 
        display: 'flex',
        gap:5,
        flexWrap: 'wrap'
      }}>
      {
        premieres.map((premiere, key)=>(
          <CardPremiere key={key} premiere={premiere}/>
        ))
      }
      </Box>

    </Box>

  )
}

export default Home