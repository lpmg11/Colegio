import Head from "next/head";
import Style from "../../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
    const [profesor, setProfesor] = useState({});

    const redirectToProfesores = () => {
        window.location.href = "/profesores";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, phone, email} = profesor;
        axios.post('/api/maestros', {name, phone, email})
        .then((res) => {
            console.log(res);
            redirectToProfesores();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfesor({...profesor, [name]: value});
        console.log(profesor);
    }


  return (
    <div>
      <Head>
        <title>Nuevo Profesor</title>
        <meta name="description" content="Administracion de colegio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={Style.centerContainer}>
            <div className={Style.formContainer}>
                <h1>Nuevo Profesor</h1>
                <form onSubmit={handleSubmit} className={Style.form}>
                    <div className={Style.form_group}>
                        <label htmlFor="name">Nombre:</label>
                        <input onChange={handleChange} type="text" name="name" id="name" placeholder="Nombre" />
                    </div>
                    <div className={Style.form_group}>
                        <label htmlFor="email">Email:</label>
                        <input onChange={handleChange} type="email" name="email" id="email" placeholder="Correo" />
                    </div>
                    <div className={Style.form_group}>
                        <label htmlFor="phone">Telefono:</label>
                        <input onChange={handleChange} type="text" name="phone" id="phone" placeholder="Telefono"/>
                    </div>
                    <div className={Style.form_group}>
                        <button type="submit">Guardar</button>
                    </div>
                    <div className={Style.form_group}>
                        <Link href="/profesores">
                            <button >
                                <a>Cancelar</a>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
      </main>
    </div>
  );
}
