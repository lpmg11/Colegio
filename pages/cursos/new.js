import Head from "next/head";
import Style from "../../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
    const [cursos, setCursos] = useState([]);

    const redirectToCourses = () => {
        window.location.href = "/cursos";
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCursos({...cursos, [name]: value});
        console.log(cursos);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, schedule, id_teacher} = cursos;
        axios.post('/api/cursos', {name, schedule, id_teacher})
        .then((res) => {
            console.log(res);
            redirectToCourses();
        })
        .catch((err) => {
            console.log(err);
        });
    }

  return (
    <div>
      <Head>
        <title>Nuevo curso</title>
        <meta name="description" content="Administracion de colegio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={Style.centerContainer}>
            <div className={Style.formContainer}>
                <h1>Nuevo curso</h1>
                <form onSubmit={handleSubmit} className={Style.form}>
                    <div className={Style.form_group}>
                        <label htmlFor="name">Nombre:</label>
                        <input onChange={handleChange} type="text" name="name" id="name" placeholder="Nombre" />
                    </div>
                    <div className={Style.form_group}>
                        <label htmlFor="schedule">Horario:</label>
                        <input onChange={handleChange} type="number" name="schedule" id="schedule" placeholder="Horario" />
                    </div>
                    <div className={Style.form_group}>
                        <label htmlFor="phone">Profesor:</label>
                        <input onChange={handleChange} type="text" name="id_teacher" id="id_teacher" placeholder="Profesor id"/>
                    </div>
                    <div className={Style.form_group}>
                        <button type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
      </main>
    </div>
  );
}
