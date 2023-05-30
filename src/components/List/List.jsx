import { useState } from "react";
import styles from './List.module.css';
import { Todo } from "../Todo/Todo";



export function List() {

    const [items, setItems] = useState([]);


    return (
    
            <div className={styles.Container}>
                <Todo items={items} setItems={setItems} />
            </div>

    )
}