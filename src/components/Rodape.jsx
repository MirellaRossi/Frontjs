import style from './Rodape.module.css'

export default function Rodape(){
    return(
        <footer className={style}>
            <p className={style.rod}>FIAP</p>
            <p className={style.rod}>Avenida Paulista</p>
        </footer>
    )
}