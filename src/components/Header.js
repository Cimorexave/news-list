import React from 'react'
import { TextField, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Header = () => {
  return (
    <div>
        <Typography variant='h3' style={{fontSize: 23}} > Header </Typography>
        
        <TextField variant='outlined' label='Search'
        color='secondary' helperText='search for keywords to see articles'
        />
        <SearchIcon color='secondary'/> 
    </div>
  )
}

export default Header