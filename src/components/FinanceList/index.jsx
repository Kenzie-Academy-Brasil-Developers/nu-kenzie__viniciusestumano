import { FinanceCard } from "./FinanceCard"
import style from "./index.module.scss"


export const FinanceList = ({ listForm, id, removeInfo }) => {
    return (
        <section className={style.list__container}>
            <h2 className="title2">Resumo financeiro</h2>
            <ul>
                {listForm.map((info) => {
                    const {title, value, enterExit} = info;
                    return <FinanceCard key={id} id={id} title={title} enterExit={enterExit} value={value} removeInfo={removeInfo} />                   
                })}
            </ul>
        </section>
    )
}

