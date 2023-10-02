import { FinanceCard } from "./FinanceCard"
import style from "./index.module.scss"


export const FinanceList = ({ listForm, id, removeInfo }) => {
    return (
        <section className={style.list__container}>
            <h2 className="title3">Resumo financeiro</h2>
            {listForm.length > 0 ? (
            <ul>
                {listForm.map((info) => {
                    const {title, value, enterExit} = info;
                    return <FinanceCard key={id} id={id} title={title} enterExit={enterExit} value={value} removeInfo={removeInfo} />                   
                })}
            </ul>
            ) : 
            <p className="title2">Você ainda não possui nenhum lançamento</p>}
        </section>
    )
}

