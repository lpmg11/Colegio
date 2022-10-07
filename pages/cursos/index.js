import Head from "next/head";
import NavBar from "../../components/NavBar";
import Style from "../../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [profesores, setProfesores] = useState([]);
  useEffect(() => {
    axios
      .get("/api/maestros")
      .then((res) => {
        setProfesores(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteProfesor = (id) => {
    axios
      .delete(`/api/maestros/${id}`)
      .then((res) => {
        console.log(res);
        setProfesores(profesores.filter((profesor) => profesor.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          {profesores.map((profesor) => (
            <div className={Style.card} key={profesor.id}>
              <div className={Style.card_head}>
                <h3>{profesor.name}</h3>
                <div className={Style.card_head.buttons}>
                  <Link href={`/profesores/${profesor.id}`}>
                    <a className={Style.card_head_button}>
                      Editar
                    </a>
                  </Link>
                  <a
                    onClick={() => deleteProfesor(profesor.id)}
                    className={Style.card_head_button}
                  >
                    {" "}
                    Eliminar
                  </a>
                </div>
              </div>
              <p>{profesor.phone}</p>
              <p>{profesor.email}</p>
            </div>
          ))}
          <Link href="/profesores/new">
            <div className={Style.addButton}>
                <a className={Style.addButton_button}>
                  Agregar
                </a>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
