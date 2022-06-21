import React, {useEffect, useState, useRef} from 'react';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './app.css';
import Header from './components/Header';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { color } from '@mui/system';

const apiToken = '8c522ab951da88162a3e3a27b39424ab'
const App = () => {
  const [date, setDate] = useState("")
  const [keyword, setKeyword] = useState("")
  const [url, setUrl] = useState(`https://gnews.io/api/v4/top-headlines?&lang=en&token=${apiToken}`)
  const [items, setItems] = useState({articles: []})
  const [urlIsValid, setUrlIsValid] = useState(false)

  const fetchCount = useRef(0)

  const fetchData = async () =>{
    try {
      console.log('fetching data...')
    const response = await fetch(url)
    if (response.ok) {
      setItems(await response.json())
    }
    if (response.status === 403 ) 
        alert('Error 403. Too many API requests. The server limits the number of requests made per day. Try again later')

    } catch (error) {

      console.log(`Error: ${error}`)
    }
    
  }

  useEffect(()=>{
    console.log('useeffect fired *')
    setDate(()=>{
      return new Date().toISOString().slice(0,10)
    })
    fetchData();
    console.log(date, keyword)
    return ()=>{
      console.log('cleanup.')
      localStorage.setItem('sessionFetchRequestCount', fetchCount.current.toString())
    }
  },[])
  useEffect(()=>{
    console.log('change of keyword or date')
    setUrl(()=>{
      return(
        `https://gnews.io/api/v4/search?` + 
        `q=${keyword}&` +
        `from=${date}&` + 
        `lang=en&` + 
        `token=${apiToken}`
      )
    })
    console.log(url)
  }, [keyword])

  useEffect(()=>{

    
    if (keyword != "" && date != "" && url != "") setUrlIsValid(true)
    if (urlIsValid) {
      fetchData()
      console.log('items: ', items)
      fetchCount.current++
    }
  },[url])

  //template return
  return (
    <div className='app'>
      <div className="header">
        <Header 
        keyword = {keyword}
        setKeyword = {setKeyword}
        totalArticles= {items.totalArticles} />
      </div>
      <div className="articles-container">
      { 
      
      items.articles.map((article)=>{
        return(
          <div key={Math.random()*items.articles.length} className="articles-card">
            <Card  sx={{padding: 2, backgroundColor: '#F2F2F2', height: '100%'}} >
              <CardMedia 
              sx={{borderRadius: 3}}
              component='img'
              image={article.image}
              alt='alternate image'
              />
              <CardContent sx={{paddingTop: 2, paddingBottom: 1, paddingRight: 0, paddingLeft: 0}} >
                <Typography variant='h4' style={{fontSize: 18, fontWeight:'bold', marginBottom: 5}} >{article.title}</Typography>
                <Typography variant='body2' style={{fontSize: 12}}>{article.description}</Typography>
                <Typography variant='caption' sx={{fontSize: 8}} > source : {article.source.name} @ 
                <Link sx={{color: 'orange', lineHeight: '10%'}} href={article.url} > {article.url} </Link> </Typography>
                <Typography variant='caption' sx={{fontSize: 8}} >  / Date : {article.publishedAt} </Typography>
              </CardContent>
              <CardActions sx={{padding: 0}}>
                <Button href={article.url}
                variant='contained' size='small' color='warning'  >Read More</Button>
                
                <Button sx={{color: 'red' }} size='small' 
                onClick={()=>{
                  console.log('adding to favorites')
                  localStorage.setItem(`favoriteArticle${Math.random()*100}`, article.url)
                }}
                >
                  <FavoriteIcon fontSize='small'></FavoriteIcon>
                </Button>
              </CardActions>
            </Card>
          </div>
          
        )
      })
      
    }
      </div>
      
      <BottomNavigation>
        <BottomNavigationAction />
        <BottomNavigationAction />
        <BottomNavigationAction />
      </BottomNavigation>
    </div>
  )
}

export default App