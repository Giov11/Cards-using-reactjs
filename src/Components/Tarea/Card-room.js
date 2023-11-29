import React from 'react'
import Button from './Card-button'


const Card = ({habitacion}) => {
  const {image,title,text,price,ranking} =habitacion;
  return (
    <>
      <figure className='card'>
        <img src={image} alt={text} className='card-img'/>
       <div className='cardInfo'>
            <h2 className='card-title'>{title}</h2>
            <ul className='card-item'>
              <li className='card-text'>{text}</li>
              <li className='ranking'>{ranking}</li>
            </ul>
            {/*<figcaption className='card-text'>{text}</figcaption>*/}
            <h3 className='card-price'>{price}</h3>
            <Button className='card-button'/>
        </div>
      </figure>
      <style jsx>{ ` 
        .card{
            width: 100%;
            height: 400px;
            border: 2px;
            border-radius: 20px;
            box-shadow: 1px 2px 2px #96a8e6;
            margin-top: 20px;
            display: flex;
            flex-direction:column;
            margin:75px;
            margin-left: 60px;
        }
        .card:hover {
          transform: scale(1.05); 
          box-shadow: 2px 4px 6px rgba(219, 206, 194, 0.5); 
        }
        .card-img{
            width: 100%;
            height: 60%;
            object-fit: cover;  
            border-top-right-radius: 15px;
            border-top-left-radius: 15px;
            
        }
        .cardInfo{
            width:100%;
            padding: 2%;
            display: flex; 
            flex-direction: column; 
            justify-content:space-between;
            align-items:start;
            flex-grow:1;
        }
        .card-title{
            text-align: center;
            font-size: 1.2rem;
            
        }
        .card-price{
          color:black;
          font-weight:bold;
          text-align:right;
          margin-top:auto;
          margin-left:150px;
        }
        
        .card-item{
          list-style: none;
          text-align:start;
          padding:0;
          margin:0;
        }

        
  

      `}</style>
    </>
  )
}

export default Card
