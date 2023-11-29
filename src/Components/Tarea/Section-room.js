import React from 'react'
import ListCard from './List-card-room'

const Seccion = () => {
  return (
    <>
    <section className='seccion-container'>
        <h1>Booking Alojamientos</h1>
        <p> <span>Black Friday</span> Ahorrá un 30% o mas en alojamiento. Reservá antes del 29 de noviembre de 2023 y alojate antes que termine el 2024.
        </p> 
        <h2 className='habitaciones'>Las casas preferidas de los huéspedes: </h2>
        <ListCard/>
    </section>
      <style jsx>{ ` 
        .seccion-container{
            margin-top:6%;
            margin: 0;
            width: 70%;
            display: flex;
            flex-direction: column;
            align-items:center;
            text-align: center;
        }
        h1 {
          font-size: 2rem;
          margin-bottom:20px;
        }
        span{
          font-weight:bold;
        }
        .habitaciones {
          font-size: 1.2rem;
          margin-top: 2px;
          text-align: left !important;
        }
        p{
          text-align:left;
        }
      `}</style>
    </>
  )
}

export default Seccion
