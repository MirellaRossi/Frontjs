// Para ser utilizado, importar na App.jsx
import style from './Comp2.module.css'


export default function Componente2(){
    return(
        <div>
            <h2 className={style}>Componente2</h2>
            <button className={style}>Clique</button>
        </div>
    )
}