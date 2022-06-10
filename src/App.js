import React, {useEffect, useState} from 'react';

const App = () => {
  
    //date 
    const date = new Date().toISOString().slice(0,10)
    //api key
    const apiToken = '8c522ab951da88162a3e3a27b39424ab'
  
  //states
  const [items, setItems] = useState({})
  const [url, setUrl] = useState("")

  useEffect(()=>{
    console.log('mounted, creating url...')

      setUrl(
      `https://gnews.io/api/v4/top-headlines?` +
      `from=${date}&` +
      `token=${apiToken}`
      )
    console.log('url created: ', url)
    const fetchData = async(url) => {

      console.log('fetching data from url')
      const response = await fetch(url)
      setItems(await response.json())
      console.log('items are: ', items)
    }
    if (url) fetchData(url)
  },[])





  /*
  const FetchData = async (url) => {
    try { 
      console.log('url: ', url)
      let response = await fetch(url)
      console.log('response is: ', response)
      let responseJson = await response.json()
      console.log('responsJson is: ', responseJson)
      setData(responseJson)
      console.log('response json is: ', responseJson)
      console.log('data is: ', data) 
    } catch(error) {
      console.log(`failed to fetch data; Error: ${error}`)
    }
  }

  useEffect(()=>{
    FetchData(url)
  }, [url])


//fetching data on mount
  useEffect(()=>{
    //handling url
    setDate(new Date().toISOString().slice(0,10))
    console.log(`date is : ${date}`)
    //setKeyword('Tech')
    
    setUrl(
    `https://gnews.io/api/v4/top-headlines?` +
    //`q=${keyword}&` +
    `from=${date}&` +
    `token=${apiToken}`
    )
    console.log(`URL is: `, url)
    
  },[])



  */


  //template return
  return (
    <div>App</div>
  )
}

export default App