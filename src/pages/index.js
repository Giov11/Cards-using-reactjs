import Head from 'next/head'
/*import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })*/
import SectionRoom from '@/Components/Tarea/Section-room'




export default function Home() {
  return (
  <>
    <Head>
    
    </Head>
    <nav>

    </nav>
   <main>
   {/*  <Propiedades
      cadena="HOOLA SOY UNA CADENA"
      booleano = {true ? "Verdadero" : "falso"}
      objeto= {{
        nombre: "Juan",
        apellido: "perez",
        edad: 34
      }}
      funcion = {() => 4*8}
      elementoJSX={(<p>HOLA ESTO ES UN PARRAFO EN JSX</p>)}
      componenteReact={<Boton/>}
    />*/}

    <SectionRoom/>
\
    </main>
    <footer>

    </footer>
  
  </>
  )
}
