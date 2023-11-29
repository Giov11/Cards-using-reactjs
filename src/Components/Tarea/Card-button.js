import React from 'react'

const Boton = () => {
  return (
    <> 
    <div className='divBtnCard'>
        <button className='btnCard'>Reservar</button>
    </div>
      <style jsx>{ ` 
        .divBtnCard{
            align-item:start;
            margin-top: 105px;
            margin-left:15px; 
            position: absolute;

        }
        button{
            font-size: .8rem;
            border: none;
            color:white;
            padding:8px;
            border-radius: 5px;
            box-shadow: 2px 2px 2px black;
            width: 100px;   
            transition-duration: 0.4s; 
            font-weight: bolder;   
            margin-top: auto;
            margin-left: auto;
            background-color: #007bff;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
          button:hover {
            background-color: #0056b3;
          } 
          
      }
      `}</style>
    </>
  )
}

export default Boton
