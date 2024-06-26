import { useState } from "react";
import { HomePage } from "./components/Page/HomePage";
import "./styles/index.scss";



function App() {
  const [listForm, setListForm] = useState([]);

  const addInfo = (title, value, enterExit) => {
    const id = crypto.randomUUID();
    const newInfo = {title, value, enterExit, id};
    setListForm([...listForm, newInfo]);
  }

  const removeInfo = (id) => {
    const listFiltered = listForm.filter((form) => {
      if(form.id !== id) {
        return form
      }
    });

    setListForm(listFiltered);
  }

  return (

    <HomePage listForm={listForm} addInfo={addInfo} removeInfo={removeInfo} />

  )
}

export default App
