import { Header } from "../../Header";
import { FinanceForm } from "../../FinanceForm";
import { FinanceList } from "../../FinanceList";
import style from "./index.module.scss";

export const HomePage = ({listForm, addInfo, removeInfo}) => {

    return (
        <>
            <Header />
            <main className={style.main__container}>
            <FinanceForm addInfo={addInfo} />
            <FinanceList listForm={listForm} removeInfo={removeInfo} />
            </main>
        </>
    )
}