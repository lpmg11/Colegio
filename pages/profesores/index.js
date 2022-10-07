import Head from "next/head";
import NavBar from "../../components/NavBar";
import Style from "../../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [profesores, setProfesores] = useState([]);
  useEffect(() => {
    axios.get("/api/maestros").then((res) => {
        setProfesores(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
    }, []);

  return (
    <div>
      <Head>
        <title>prueba</title>
        <meta name="description" content="Administracion de colegio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar Tittle="Profesores" />
        <div className={Style.container}>
          <div className={Style.cards}>
            {profesores.map((profesor) => (
                <div className={Style.card} key={profesor.id}>
                    <div className={Style.card_head}>
                        <h3>{profesor.name}</h3>
                        <a className={Style.card_head_button}>
                          <span className="material-symbols">edit</span>
                        </a>
                        <a className={Style.card_head_button}> {' '}
                          <span className="material-symbols">delete</span>
                        </a>
                    </div>                       
                    <p>{profesor.phone}</p>
                    <p>{profesor.email}</p>
                </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
