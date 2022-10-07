import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [cursos , setCursos] = useState([
    {id: 1, name: 'Next.js'},
    {id: 2, name: 'React.js'},
    {id: 3, name: 'Node.js'},
    {id: 4, name: 'MongoDB'},
    {id: 5, name: 'Express.js'},
    {id: 6, name: 'JavaScript'},
    {id: 7, name: 'TypeScript'},
    {id: 8, name: 'HTML'},
    {id: 9, name: 'CSS'},
    {id: 10, name: 'Bootstrap'},
    {id: 11, name: 'Materialize'},
    {id: 12, name: 'Material UI'},
    {id: 13, name: 'SASS'},
    {id: 14, name: 'Styled Components'},
  ])

  return (
    <div>
      <Head>
        <title>prueba</title>
        <meta name="description" content="Administracion de colegio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <h1>
          Panel de administracion
        </h1>
        <div className={styles.grid}>
          <Link href="/estudiantes">
            <a className={styles.card}>
              <h3>Estudiantes &rarr;</h3>
              <p>Administrar estudiantes</p>
            </a>
          </Link>
          <Link href="/profesores">
            <a className={styles.card}>
              <h3>Profesores &rarr;</h3>
              <p>Administrar profesores</p>
            </a>
          </Link>
          <Link href="/cursos">
            <a className={styles.card}>
              <h3>Cursos &rarr;</h3>
              <p>Administrar cursos</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
