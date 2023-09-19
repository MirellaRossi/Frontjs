import style from './Cabecalho.module.css'

export default function Cabecalho(){
    return(
        <header>
            <nav className={style}>
                <h1 className={style.tit}>Bem-Vindo!</h1>
            </nav>
        </header>
    )
}