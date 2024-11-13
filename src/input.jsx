import './input.css'
function Input ({show,editable,labelName,value,handleChange,type}){
    return(
        <>  
        <label hidden={show} htmlFor={labelName}>{labelName} </label>
        {editable&&<input hidden={show} type={type} value={value} onChange={handleChange} />}
        {!editable&&<input  hidden={show} type={type} value={value} onChange={handleChange} disabled/>}
        </>       
    )
}
export default Input