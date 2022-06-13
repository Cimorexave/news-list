import React, {useEffect, useState} from 'react';
import Card from './components/Card';
import './app.css';
import Header from './components/Header';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

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
      //fetchData()
      console.log( items)
    }
  },[url])

  //template return
  return (
    <div>
      <Header totalArticles= {items.totalArticles} />
      <div className="articles-list">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      { 
      /*
        items.articles.map((article)=>{
          return(
            <div key={Math.random()*items.totalArticles}>
              <Card   
                article = {article}
              />
            </div>
          )
        })
        */
      }
      <BottomNavigation>
        <BottomNavigationAction />
        <BottomNavigationAction />
        <BottomNavigationAction />
      </BottomNavigation>
    </div>
  )
}

export default App