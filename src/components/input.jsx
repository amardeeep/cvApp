import styles from '../styles/input.module.css'
function Input ({show,editable,labelName,value,handleChange,type}){
    return(
        <div className={styles.inputDiv}>  
        <label hidden={show} htmlFor={labelName}>{labelName} </label>
        {editable&&<input hidden={show} type={type} value={value} onChange={handleChange} id={labelName}/>}
        {!editable&&<input  hidden={show} type={type} value={value} onChange={handleChange} id={labelName} disabled/>}
        </div>       
    )
}
export default Input