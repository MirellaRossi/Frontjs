import style from './Cabecalho.module.css'

export default function Cabecalho(){
    return(
        <header>
            <nav>
                <div className={style.navmenu}>
                
                        <ul className={style.navmenu}>
                            <li className={style.navmenu}>Componente 1</li>
                            <li className={style.navmenu}>Componente 2</li>
                            <li className={style.navmenu}>Componente 3</li>
                            <li className={style.navmenu}>Componente 4</li>
                            <li className={style.navmenu}>Componente 5</li>
                            
                        </ul>
                </div>
            </nav>
    </header>
    )
}