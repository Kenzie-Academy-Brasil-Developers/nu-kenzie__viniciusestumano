import style from "./index.module.scss";
export const FinanceForm = () => {
    return (
        <form action="">

            <label className="title4" htmlFor="">Descrição</label>
            <input className="headline" type="text" placeholder="Digite  aqui sua descrição"/>
            <span className="headline">Ex: compra de roupas</span>

            <label className="title4" htmlFor="">Valor (R$)</label>
            <input className="headline" type="number" />

            <label className="title4" htmlFor="">Tipo de valor</label>
            <input className="headline" type='number' placeholder="Entrada"/>

            <button className="buttonInsertValue headline" type='submit'>Inserir valor</button>

        </form>
    )
}