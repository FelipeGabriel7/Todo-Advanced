import React from "react";
import styles from './SelectTask.module.css';

export function SelectTask({ handleAddTask , setSelect , task , setTask }) {

    return (

        <>

            <div className={styles.componentInput}>

                <label className={styles.componentLabel}>
                    Criar Tarefa
                    <input type="text" placeholder="informe a tarefa"
                        value={task} onChange={(e) => setTask(e.target.value)} />

                </label>


                <label className={styles.componentLabel}>
                    Selecione uma categoria

                    <select onChange={(e) => setSelect(prevState => ({ ...prevState, selectCategory: e.target.value }))}>
                        <option value="none" disabled selected> Selecione uma categoria</option>
                        <option value="Trabalho"> Trabalho </option>
                        <option value="Pessoal"> Pessoal </option>
                        <option value="Lazer"> Lazer </option>
                        <option value="Futura"> Futura </option>

                    </select>
                </label>


                <button className={styles.addTask} onClick={() => handleAddTask()}> Criar Tarefa  </button>

            </div>
        </>
    )

}