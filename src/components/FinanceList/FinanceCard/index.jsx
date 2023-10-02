import style from "./index.module.scss";

export const FinanceCard = ({title, value, enterExit, id, removeInfo}) => {
    return ( 
        <div className={`
        ${style.finance__cardContainer}
        ${enterExit === "Entrada" ? style.green__color : style.grey__color}
        `}>
                <h2 className="title2">{title}</h2>
                <p className="headline">{enterExit}</p>
                <p className="headline">{value}</p>
                <button onClick={() => removeInfo(id)} className="buttonDelete">Excluir</button>
        </div>
    )
}