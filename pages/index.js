import Head from 'next/head'
import NavBar from '../components/NavBar'
import Style from '../styles/Home.module.css'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Panel de administración</title>
        <meta name="description" content="Administracion de colegio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar Tittle="Colegio" />
        <div className={Style.container}>
          <h1> Panel de Administración</h1>
        </div>
      </main>
    </div>
  )
}
