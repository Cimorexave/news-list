import { type } from '@testing-library/user-event/dist/type';
import React, {useEffect, useState} from 'react';

const App = () => {
  //api key
  const apiKey = '318917ac4ef54f5d8c35a2f022ff0bc3'
  //states
  const [keyword, setKeyword] = useState('')
  const [url, setUrl] = useState('')
  const [date, setDate] = useState('')
  const [data , setData] = useState({})
  //fetching data function 
  const FetchData = async (url) => {
    try { 
      const response = await fetch(new Request(url))
      const responseJson = await response.json()
      console.log(responseJson)
      console.log('data is: ', data) 
    } catch(error) {
      console.log(`failed to fetch data; Error: ${error}`)
    }
  }

//fetching data on mount
  useEffect(()=>{
    //handling url
    setDate(new Date().toISOString().slice(0,10))
    console.log(`date is : ${date}`)
    setKeyword('Tech')
    
    setUrl(
    `https://newsapi.org/v2/everything?` +
    `q=${keyword}&` +
    `from=${date}&` +
    `sortBy=popularity&` +
    `apikey=${apiKey}`
    )
    console.log(`URL is: ${url}`)

    FetchData(url)
    
  },[])

  //template return
  return (
    <div>App</div>
  )
}

export default App