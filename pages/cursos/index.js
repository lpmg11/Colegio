import Head from "next/head";
import NavBar from "../../components/NavBar";
import Style from "../../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [cursos, setCursos] = useState([]);
  useEffect(() => {
    axios
      .get("/api/cursos")
      .then((res) => {
        setCursos(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteCurso = (id) => {
    axios
      .delete(`/api/cursos/${id}`)
      .then((res) => {
        console.log(res);
        setProfesores(cursos.filter((curso) => curso.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Head>
        <title>Cursos</title>
        <meta name="description" content="Administracion de colegio" />
        <link rel="icon" href="/favicon.ico" />
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet">
        </link>
      </Head>
      <main>
        <NavBar Tittle="Cursos" />
        <div className={Style.container}>
          {cursos.map((curso) => (
            <div className={Style.card} key={curso.id}>
              <div className={Style.card_head}>
                <h3>{curso.name}</h3>
                <div className={Style.card_head.buttons}>
                  <Link href={`/cursos/${curso.id}`}>
                    <a className={Style.card_head_button}>{" "}
                      <span className="material-icons">edit</span>
                    </a>
                  </Link>
                  <a
                    onClick={() => deleteProfesor(curso.id)}
                    className={Style.card_head_button}
                  >
                    {" "}
                    <span className="material-icons">delete</span>
                  </a>
                </div>
              </div>
              <p>{curso.schedule + ' hrs '}</p>
              <p>{curso.id_teacher }</p>
              <p>{curso.created_at}</p>
            </div>
          ))}
          <Link href="/cursos/new">
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
