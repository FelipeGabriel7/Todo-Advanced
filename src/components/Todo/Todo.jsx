import { useCallback, useEffect, useState } from "react";
import styles from './Todo.module.css'
import { Task } from "../Tasks/Task";
import { SelectTask } from "../Forms/SelectTask";
import { CreateTask } from "../Forms/CreateTask";

export function Todo({ items, setItems }) {

    const [search, setSearch] = useState('');
    const [task, setTask] = useState('');
    const [select, setSelect] = useState({
        selectFilter: '',
        selectCategory: '',
    })
    const [message, setMessage] = useState('')
    const [filter, setFilter] = useState(null);
    const [orderItems , setOrderItems] = useState([])

    const handleAddTask = () => {

        const { selectCategory } = select

        if (task === '' || select.selectCategory === '') {
            setMessage(' Informe uma tarefa valida ');
            setTimeout(() => {
                setMessage('')
            }, 2000)
            return;
        }

        const newTask = {
            task: task,
            completed: false,
            id: Number((Math.random() * 100).toFixed(0)),
            category: selectCategory
        }

        setItems(prevState => [...prevState, newTask]);

        setTask('');
        setSelect(prevState => ({ ...prevState, selectCategory: '' }))
    }

    function checkedTask(item) {
        setItems(prevState => {
            return [...prevState.map(prv => {
                if (prv.task === item.task) {
                    return { ...prv, completed: !item.completed }
                }

                return prv;
            })]
        })
    }

    function deleteTask(t) {
        setItems((prevState) =>
            prevState.filter(st => st.task !== t)
        )

        setSelect(prevState => ({ ...prevState, selectCategory: '' }))
    }

    const searchTask = useCallback(() => {
        items.map(it => {
            if (it.task.toLowerCase() === search) {
                return setFilter(it)
            }
        })
    }, [search])


    const handleAddOrder = () => {
        const arrItems = items;
        const order = arrItems.sort(
            (produtor1, produtor2) => (produtor1.task > produtor2.task ? 1 : produtor2.task > produtor1.task ? -1 : 0)
        )
       setOrderItems(order)

       setTimeout(() => {
        setOrderItems()
       }, 100)
    }


    const handleAddOrderDesc = () => { 
        const arrItems = items;
        const orderDesc = arrItems.sort(
            (produtor1, produtor2) => (produtor1.task < produtor2.task ? 1 : produtor2.task < produtor1.task ? -1 : 0)
        )

       setOrderItems(orderDesc)
    }


    useEffect(() => {
        searchTask()
    }, [search])

    useEffect(() => {
            if(orderItems !== null && orderItems !== undefined){
                setItems(orderItems)
            }
    }, [orderItems , setItems])


    console.log(items)

    return (

       

        <>
            <div className={styles.TodoContainer}>
                <CreateTask
                    setSearch={setSearch}
                    setSelect={setSelect}
                    search={search}
                    handleAddOrder={handleAddOrder}
                    handleAddOrderDesc={handleAddOrderDesc}
                />
               <div className={styles.tasks}>

               {search.length <= 0 && (
                    <Task items={items} checkedTask={checkedTask} deleteTask={deleteTask} select={select.selectFilter} />
                )}
                {(search.length !== 0 && filter !== null) && (
                    <Task items={items} checkedTask={checkedTask} deleteTask={deleteTask} taskFilter={filter}/>
                )}
              
               </div>


               {message && ( <h1 className={styles.message}> Informe uma tarefa válida </h1>)}

                <SelectTask
                    handleAddTask={handleAddTask}
                    setTask={setTask}
                    task={task}
                    setSelect={setSelect}
                />

            </div>
        </>
    )

}