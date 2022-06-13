import React from 'react'
import { TextField, Typography, Box, Breadcrumbs, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Header = ({totalArticles}) => {
  return (
    <div>
        <Typography variant='h3' style={{fontSize: 23}} > Header </Typography>
        <Box>
          <TextField variant='outlined' label='Search'
          color='secondary' helperText='search for keywords to see articles'
          />
          <SearchIcon color='secondary'/> 
        </Box>
        <Typography variant='caption' >
          Found results: : {totalArticles}
        </Typography>
    </div>
  )
}

export default Header