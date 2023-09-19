//Importação da página com a estilização
import style from './Comp1.module.css'

export default function Componente1(){

    return(
        <div>
            {/* Para estilizar, importamos o style na classe e a classe a qual criamos no module.css */}
            <h2 className={style.tit}>Componente 1</h2>
            <button className={style.btn}>Clique aqui</button>
        </div>
    )
}