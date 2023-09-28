import { useState } from "react";
import style from "./index.module.scss";


export const FinanceForm = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [enterExit, setEnterExit] = useState("");

    const submit = (e) => {
        e.preventDefault();

        setTitle("");
        setValue("");
        setEnterExit("");
    }

    return (
        <form className="form__container" onSubmit={submit}>

            <label className="title4" htmlFor="">Descrição</label>
            <input className="headline" type="text" placeholder="Digite  aqui sua descrição" onChange={(e) => setTitle(e.target.value)}/>
            <span className="headline">Ex: compra de roupas</span>

            <label className="title4" htmlFor="">Valor (R$)</label>
            <input className="headline" type="text" placeholder="1" onChange={(e) => setValue(e.target.value)}/>

            <label className="title4" htmlFor="">Tipo de valor</label>
            <select className="headline" name="Entrada" onChange={(e) => setEnterExit(e.target.value)}>
                <option value="1">Entrada</option>
                <option value="2">Saída</option>
            </select>

            <button className="buttonInsertValue headline" type="submit">Inserir valor</button>

        </form>
    )
};