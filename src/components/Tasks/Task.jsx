import { FaTrash } from 'react-icons/fa'
import styles from './Task.module.css'

export function Task({ items, checkedTask, deleteTask, taskFilter , select }) {


    return (
        <>

            {items.length > 0 && (
                <h2 className={styles.messageTask} style={{
                    textAlign: 'center',
                    marginTop: '1em',
                    marginBottom: '1em'
                }}> Quantidade de Tarefas: ( {items.length} )  </h2>
            )}

            {items.length <= 0 && (
                <h2 className={styles.messageTask}
                    style={{
                        width: '100%',
                        height: '30vh',
                        textAlign: 'center'
                    }}
                > Você ainda não possui tarefas cadastradas </h2>
            )}


            {(taskFilter) && (

                <div key={taskFilter.id} className={styles.containerTask} onClick={() => checkedTask(taskFilter)} style={{
                    borderLeft: `${taskFilter.completed ? '10px solid rgb(0, 212, 67)' : 'none'}`
                }}>
                    <div className={styles.contentTask}>
                        <h3 className={styles.nameTask} style={{
                            textDecoration: `${taskFilter.completed ? 'line-through' : 'none'}`,
                            color: `${taskFilter.completed ? '#7b7b7b' : '#000'}`
                        }}> {taskFilter.task} </h3>
                    </div>

                    <span className={styles.category}> (  {taskFilter.category} ) </span>

                </div>

            )}


            {select === 'all' && items.map(it => (
                <div key={it.task} className={styles.containerTask} onClick={() => checkedTask(it)} style={{
                    borderLeft: `${it.completed ? '10px solid rgb(0, 212, 67)' : 'none'}`
                }}>
                    <div className={styles.contentTask}>
                        <h3 className={styles.nameTask} style={{
                            textDecoration: `${it.completed ? 'line-through' : 'none'}`,
                            color: `${it.completed ? '#7b7b7b' : '#000'}`
                        }}> {it.task} </h3>
                        <div className={styles.buttonsTask}> <FaTrash onClick={() => deleteTask(it.task)} />
                        </div>
                    </div>

                    <span className={styles.category}> (  {it.category} ) </span>

                </div>

            ) 
            )}


            {select === 'checked' && items.map(it => {
                if(it.completed){
                    return(
                        <div key={it.task} className={styles.containerTask} onClick={() => checkedTask(it)} style={{
                            borderLeft: `${it.completed ? '10px solid rgb(0, 212, 67)' : 'none'}`
                        }}>
                            <div className={styles.contentTask}>
                                <h3 className={styles.nameTask} style={{
                                    textDecoration: `${it.completed ? 'line-through' : 'none'}`,
                                    color: `${it.completed ? '#7b7b7b' : '#000'}`
                                }}> {it.task} </h3>
                                <div className={styles.buttonsTask}> <FaTrash onClick={() => deleteTask(it.task)} />
                                </div>
                            </div>
        
                            <span className={styles.category}> (  {it.category} ) </span>
        
                        </div>
                    )
                }
            })}



            {select === 'noChecked' && items.map(it => {
                if(!it.completed){
                    return(
                        <div key={it.task} className={styles.containerTask} onClick={() => checkedTask(it)} style={{
                            borderLeft: `${it.completed ? '10px solid rgb(0, 212, 67)' : 'none'}`
                        }}>
                            <div className={styles.contentTask}>
                                <h3 className={styles.nameTask} style={{
                                    textDecoration: `${it.completed ? 'line-through' : 'none'}`,
                                    color: `${it.completed ? '#7b7b7b' : '#000'}`
                                }}> {it.task} </h3>
                                <div className={styles.buttonsTask}> <FaTrash onClick={() => deleteTask(it.task)} />
                                </div>
                            </div>
        
                            <span className={styles.category}> (  {it.category} ) </span>
        
                        </div>
                    )
                }
            })}


            {(items && !taskFilter && !select) && items.map((it) => (
                <div key={it.task} className={styles.containerTask} onClick={() => checkedTask(it)} style={{
                    borderLeft: `${it.completed ? '10px solid rgb(0, 212, 67)' : 'none'}`
                }}>
                    <div className={styles.contentTask}>
                        <h3 className={styles.nameTask} style={{
                            textDecoration: `${it.completed ? 'line-through' : 'none'}`,
                            color: `${it.completed ? '#7b7b7b' : '#000'}`
                        }}> {it.task} </h3>
                        <div className={styles.buttonsTask}> <FaTrash onClick={() => deleteTask(it.task)} />
                        </div>
                    </div>

                    <span className={styles.category}> (  {it.category} ) </span>

                </div>
            ))}

        </>

    )

}