import styles from './CreateTask.module.css'
import { FaArrowCircleUp , FaArrowCircleDown} from 'react-icons/fa'

export function CreateTask({ setSearch , setSelect , search , handleAddOrder , handleAddOrderDesc}){

 


    return(
        <>

                <h1 className={styles.Title}> TODO <span> LIST </span>  </h1>




                <div className={styles.componentInput}>

                    <label className={styles.componentLabelInput}>
                        Pesquisar
                        <input type="search" placeholder="informe o nome de uma tarefa"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>

                    <label className={styles.componentLabelSelect}>
                        Filtrar

                        <select onChange={(e) => setSelect(prevState => ({ ...prevState, selectFilter: e.target.value }))}>

                            <option value="none" disabled> Selecione uma opção </option>
                            <option value="all" selected> Todas </option>
                            <option value="checked"> Concluídas </option>
                            <option value="noChecked"> Pendentes </option>


                        </select>
                    </label>

                    <div className={styles.Order}>
                            <h3 className={styles.OrderTitle}> Ordernar em ordem alfabética </h3>
                            <FaArrowCircleUp className={styles.IconOrder} onClick={() => handleAddOrder()}/> 
                            <FaArrowCircleDown className={styles.IconOrder}  onClick={() => handleAddOrderDesc()}/>
                    </div>
                </div>



        
        </>
    )
}