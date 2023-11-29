import React from 'react'
import Card from './Card-room'

const habitaciones = [
  {
    image: 'https://www.ahsm-krakow.com/images/junior_suite__003_49095f5ab3c42475c9244d8.jpg', 
    title: "Aparthotel Stare Miasto",
    text: "Centro Historico, Polonia, Krakow", 
    price: "Desde $44.298",
    ranking: "8,7 - Fabuloso"
  } , 

  {
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/121402222.jpg?k=20556b9e8ddbbe0c34338375f843381a2c4f4c113a6d50d012559f114bdbac56&o=&hp=1', 
    title: "3 Epoques Aparments",
    text: "Praga 1, República Checa, Praha 1", 
    price: "Desde $47.711",
    ranking: "8,7 - Fabuloso"
  } , 

  {
    image: 'https://www.elmueble.com/medio/2019/06/25/dormitorio-con-gran-dosel-y-vistas-al-mar_d375c53c_1988x2000.jpg', 
    title: "7Season Aparments Budapest",
    text: "06, Terézváros, Hungría, Budapest", 
    price: "Desde $28.474 ",
    ranking: "9,3 - Fatástico"
  } , 

  {
    image: 'https://www.dexigner.com/images/article/24028/Cheval_Three_Quays_01.jpg', 
    title: "Cheval Three Quays",
    text: "Reino Unido, London", 
    price: "Desde $186.934",
    ranking: "9,4 - Fantástico"
  }

]
const ListaDeTarjetas = () => {
  return (
    <>
    <div className='container'>
            <div className='cards-list'> 
                {
                    habitaciones.map((habitacion, index) => <Card key={index} habitacion={habitacion}/>)
                }
            </div>
      </div>
      <style jsx>{ ` 
        .container{
            display: flex;
            justify-content: center;
            
        }
        .cards-list{
         display: grid;
         grid-template-columns: repeat(4,1fr);
         gap: 20px;
         width: 70%;
         margin-top:20px
            
        }
        @media screen and (max-width: 1024px){
            .cards-list{
                grid-template-columns: repeat(2,1fr);
            }

        }
        @media screen and (max-width: 581px){
           .cards-list{
            grid-template-columns: repeat(2,1fr);
        } 
            
        }
      `}</style>
    </>
  )
}

export default ListaDeTarjetas
