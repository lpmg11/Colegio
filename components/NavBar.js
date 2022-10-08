import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Style from "./style/NavBar.module.css"

const NavBar = ({Tittle}) => {
    const [isMenuOpen, setIsMenuOpen] = useState({
        menu: false,
        displayList: "flex"
    });

    const handleMenu = () => {
        setIsMenuOpen(
            {
                ...isMenuOpen,
                menu: !isMenuOpen.menu,
                displayList: isMenuOpen.menu ? "none" : "flex",
            }
        );
    }

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMenuOpen(
                {
                    ...isMenuOpen,
                    menu: false,
                    displayList: "none"
                }
            );
        } else {
            setIsMenuOpen(
                {
                    ...isMenuOpen,
                    menu: false,
                    displayList: "flex"
                }
            );
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
    <>
        <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </Head>
        <nav className={Style.navbar}>
            <div className={Style.navbar__container}>
                <h1>{Tittle}</h1>
                <button onClick={ handleMenu } className={Style.navbar_expand}>{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" 
                    style={{fill: "white",  strokeWidth: "0px"}} className={Style.svg} >
                    <path d="M6 38.05v-3h36v3Zm0-8.3v-3h36v3Zm0-8.35v-3h36v3Zm0-8.35v-3h36v3Z"/></svg>
                </button>
            </div>
            <ul className={Style.navbar__links__ul} style = {{display: isMenuOpen.displayList}}>
                <li className={Style.navbar__links__li}>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li className={Style.navbar__links__li}>
                    <Link href="/profesores"><a>Profesores</a></Link>
                </li>
                <li className={Style.navbar__links__li}>
                    <Link href="/cursos"><a>Cursos</a></Link>
                </li>
                <li className={Style.navbar__links__li}>
                    <Link href="/alumnos"><a>Alumnos</a></Link>
                </li>
            </ul>

        </nav>
    </>
    );
}

export default NavBar;