import React from 'react'
import './card.css'
import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
const Card = ({title, description, content, image, source}) => {
  return (
    <div className='card'>
        <img className='artilce-image' src={articleExample.image} alt='article image'/>
        <div className="text">
            <Typography variant='h4' style={{fontSize: 18}} >{articleExample.title}</Typography>
            <Typography variant='body20' style={{fontSize: 12}}>{articleExample.description}</Typography>
        </div>
    </div>
  )
}

export default Card