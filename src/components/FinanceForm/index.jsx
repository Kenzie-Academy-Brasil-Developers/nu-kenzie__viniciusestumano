import { useState, useEffect } from "react";
import style from "./index.module.scss";

export const FinanceForm = ({ addInfo }) => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [enterExit, setEnterExit] = useState("Entrada");
    const [currentValue, setCurrentValue] = useState(8184);
    const [displayedValue, setDisplayedValue] = useState(currentValue);
    const [transactions, setTransactions] = useState([]);

    const submit = (e) => {
        e.preventDefault();

        if (title.trim() !== "" && value.trim() !== "" && enterExit.trim() !== "") {
            addInfo(title, value, enterExit);
            const existingTransaction = transactions.find((transaction) => transaction.title === title);
    
            if (!existingTransaction) {
            const newTransaction = {
                title,
                value: parseFloat(value),
                enterExit,
            };

            setTransactions([...transactions, newTransaction]);

            if (enterExit === "Entrada") {
                setCurrentValue(currentValue + parseFloat(value));
            } else if (enterExit === "Despesa") {
                setCurrentValue(currentValue - parseFloat(value));
            }

            setTitle("");
            setValue("");
        } else {
            alert ("Já existe uma transação com o mesmo título");
        }
      }
    }

    useEffect(() => {
        const totalValue = transactions.reduce((total, transaction) => {
          if (transaction.enterExit === "Entrada") {
            return total + transaction.value;
          } else if (transaction.enterExit === "Despesa") {
            return total - transaction.value;
          }
          return total;
        }, 0);
    
        setDisplayedValue(totalValue);
      }, [transactions]);


    return (
        <div className={style.formValueTotal__container}>
            <form className={style.form__container} onSubmit={submit}>

                <label className="title4" htmlFor="">Descrição</label>
                <input className="headline" type="text" placeholder="Digite  aqui sua descrição" onChange={(e) => setTitle(e.target.value)} />
                <span className="headline">Ex: compra de roupas</span>

                <label className="title4" htmlFor="">Valor (R$)</label>
                <input className="headline" type="number" placeholder="1" onChange={(e) => setValue(e.target.value)} />

                <label className="title4" htmlFor="">Tipo de valor</label>
                <select className="headline" onChange={(e) => setEnterExit(e.target.value)}>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                </select>

                <button className="buttonInsertValue headline" type="submit">Inserir valor</button>

            </form>

            {transactions.length > 0 && (
                <article className={style.article__info}>
                    <h2 className="title2">
                        Valor total: <span className={style.totalValue}>R$ {displayedValue.toFixed(2)}</span>
                    </h2>
                    <span className="headline">O valor se refere ao saldo</span>
                </article>
            )}
        </div>

    )
};