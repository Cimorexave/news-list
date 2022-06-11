import React, {useEffect, useState} from 'react';
import Card from './components/Card';

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
      <h2>date is {date}</h2> {'\n'}
      <h2>keyword is {keyword}</h2> {'\n'}
      <h2>url is {url}</h2> {'\n'}
      <h3>results found : {items.totalArticles}</h3> {'\n'}
      <Card />
      <Card />
      <Card />
      <Card />
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
       
    </div>
  )
}

export default App