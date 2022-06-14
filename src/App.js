import React, {useEffect, useState} from 'react';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './app.css';
import Header from './components/Header';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';




const articleExample = {
  "title": "Nick Leeder appointed as latest head of Google Ireland",
  "description": "Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.",
  "content": "Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]",
  "url": "https://www.siliconrepublic.com/companies/nick-leeder-google-ireland",
  "image": "https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg",
  "publishedAt": "2020-03-23T13:58:53Z",
  "source": {
      "name": "Silicon Republic",
      "url": "https://www.siliconrepublic.com/"
  }
}



const apiToken = '8c522ab951da88162a3e3a27b39424ab'
const App = () => {
  const [date, setDate] = useState("")
  const [keyword, setKeyword] = useState("")
  const [url, setUrl] = useState("")
  const [items, setItems] = useState({articles: []})
  const [urlIsValid, setUrlIsValid] = useState(false)


  useEffect(()=>{
    console.log('useeffect fired *')
    setDate(()=>{
      return new Date().toISOString().slice(0,10)
    })
    setKeyword("Tech")
    console.log(date, keyword)
  },[])
  useEffect(()=>{
    console.log('change of keyword or date')
    setUrl(()=>{
      return(
        `https://gnews.io/api/v4/search?` + 
        `q=${keyword}&` +
        `from=${date}&` + 
        `token=${apiToken}`
      )
    })
    console.log(url)
  }, [keyword,date])

  useEffect(()=>{

    const fetchData = async () =>{
      console.log('fetching data...')
      const response = await fetch(url)
      if (response.ok) {
        setItems(await response.json())
      }
    }
    if (keyword != "" && date != "" && url != "") setUrlIsValid(true)
    if (urlIsValid) {
      fetchData()
      console.log( items)
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