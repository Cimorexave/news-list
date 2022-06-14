import React from 'react'
import './header.css'
import { TextField, Typography, Box, Breadcrumbs, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
const Header = ({totalArticles, keyword, setKeyword}) => {
  return (
    <div>
      <div className="top-header-container">
        <Typography variant='h3' style={{fontSize: 26, fontWeight: 'bold'}}  > News List </Typography>
        <Box>
          <TextField sx={{
            width: 200, 
          }} variant='outlined' label='Search'
          size='small' hiddenLabel color='warning'
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon color='warning' />
              </InputAdornment>
            ),
          }}
          value={keyword}
          onChange={(e)=>{
            setKeyword(e.target.value)
            console.log( 'keyword is: ',keyword)
          }}
          />
           
        </Box>
      </div>
        <Typography variant='caption'  >
          {today.toLocaleDateString("en-US", options)}
        </Typography>
        <Typography variant='h4' sx={{fontWeight: 'bold', marginTop: 2, marginBottom: 2 }} >
          Welcome Back!
        </Typography>
        <div className="breadcrumbs-container">
          <Breadcrumbs separator='/' sx={{marginBottom: 0.7}} >
            <Button size='small' color='warning' onClick={()=>{setKeyword('tech')}} > Tech </Button>
            <Button size='small' color='warning' onClick={()=>{setKeyword('games')}} > Games </Button>
            <Button size='small' color='warning' onClick={()=>{setKeyword('politics')}} > Politics </Button>
          </Breadcrumbs>
        </div>
        
        <Typography variant='caption' >
          Results Found :  {totalArticles}
        </Typography>
    </div>
  )
}

export default Header