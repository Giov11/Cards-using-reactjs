import React from 'react'
import Services from './Services'

const servicios = [
  {
    image: 'https://tangoinn.com/wp-content/uploads/2022/03/sauna.png', 
    title: "Sala de SPA"
  } , 

  {
    image: 'https://cdn-icons-png.flaticon.com/256/410/410363.png', 
    title: "Servicio a la habitacion "
  } , 

  {
    image: 'https://images.vexels.com/media/users/3/223108/isolated/preview/0f95f85f4e2a840d892c40251c215e64-icono-de-piscina-de-nadador-de-rastreo.png', 
    title: "Piscina "
  } , 
  {
    image: 'https://cdn.icon-icons.com/icons2/3175/PNG/512/travelhotelpoolside_bar_restaurant_food_drink_icon_193808.png', 
    title: "Restaurante y bar"
  }

]
const ListaDeServicios = () => {
  return (
    <>
    <div className='container'>
            <div className='cards-list'> 
                {
                    servicios.map((servicios, index) => <Services key={index} servicios={servicios}/>)
                }
            </div>
      </div>
      <style jsx>{ ` 
        .container{
           
            justify-content: center;
            
        }
        .cards-list{
         display: grid;
         grid-template-columns: repeat(4,1fr);
         width: 70%;
            
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

export default ListaDeServicios
