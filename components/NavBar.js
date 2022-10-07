import Link from "next/link";
import Style from "./style/NavBar.module.css"

const NavBar = ({Tittle}) => {
    return (
        <div className={Style.navbar}>
            <h1>{Tittle}</h1>
            <ul className={Style.navbar__links__ul}>
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

        </div>

    );
}

export default NavBar;