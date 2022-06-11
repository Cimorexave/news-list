import React from 'react'
import './card.css'
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
            <h4 className='article-tite'>{articleExample.title}</h4>
            <p className='article-description'>{articleExample.description}</p>
        </div>
    </div>
  )
}

export default Card