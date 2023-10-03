import { useState } from "react";
import style from "./index.module.scss";


export const FinanceForm = ({ addInfo }) => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [enterExit, setEnterExit] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if (title.trim() !== "" && value.trim() !== "" && enterExit.trim() !== "") {
            addInfo(title, value, enterExit);
            setTitle("");
            setValue("");
            setEnterExit("Entrada");
        }

    }


    return (
        <div className={style.formValueTotal__container}>
            <form className={style.form__container} onSubmit={submit}>

                <label className="title4" htmlFor="">Descrição</label>
                <input className="headline" type="text" placeholder="Digite  aqui sua descrição" onChange={(e) => setTitle(e.target.value)} />
                <span className="headline">Ex: compra de roupas</span>

                <label className="title4" htmlFor="">Valor (R$)</label>
                <input className="headline" type="text" placeholder="1" onChange={(e) => setValue(e.target.value)} />

                <label className="title4" htmlFor="">Tipo de valor</label>
                <select className="headline" name="Entrada" onChange={(e) => setEnterExit(e.target.value)}>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                </select>

                <button className="buttonInsertValue headline" type="submit">Inserir valor</button>

            </form>

            <article className={style.article__info}>
                <h2 className="title2">Valor total: <span className={style.totalValue}>R$ 8184,00</span></h2>
                <span className="headline">O valor se refere ao saldo</span>
            </article>
        </div>

    )
};