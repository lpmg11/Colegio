import Head from "next/head";
import NavBar from "../../components/NavBar";
import Style from "../../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [alumnos, setalumnos] = useState([]);
  useEffect(() => {
    axios
      .get("/api/estudiantes")
      .then((res) => {
        setalumnos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteestudiante = (id) => {
    axios
      .delete(`/api/estudiantes/${id}`)
      .then((res) => {
        setalumnos(alumnos.filter((estudiante) => estudiante.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Head>
        <title>Alumnos</title>
        <meta name="description" content="Administracion de colegio" />
        <link rel="icon" href="/favicon.ico" />
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet">
        </link>
      </Head>
      <main>
        <NavBar Tittle="Alumnos" />
        <div className={Style.container}>
          {alumnos.map((estudiante) => (
            <div className={Style.card} key={estudiante.id}>
              <div className={Style.card_head}>
                <h3>{estudiante.name}</h3>
                <div className={Style.card_head.buttons}>
                  <Link href={`/alumnos/${estudiante.id}`}>
                    <a className={Style.card_head_button}>{" "}
                      <span className="material-icons">edit</span>
                    </a>
                  </Link>
                  <a
                    onClick={() => deleteestudiante(estudiante.id)}
                    className={Style.card_head_button}
                  >
                    {" "}
                    <span className="material-icons">delete</span>
                  </a>
                </div>
              </div>
              <p>{estudiante.phone}</p>
              <p>{estudiante.email}</p>
            </div>
          ))}
          <Link href="/alumnos/new">
            <div className={Style.addButton}>
                <a className={Style.addButton_button}>
                  <span className="material-icons">add</span>
                </a>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
