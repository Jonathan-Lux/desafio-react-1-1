import logo from "../../assets/rocket.svg"
import styles from "./Header.module.css"
export function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} alt="logo de uma espaçonave" />
        <strong>to<strong>do</strong></strong>
        </header>
    )
}