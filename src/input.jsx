import './input.css'
function Input ({editable,labelName,value,handleChange,type}){
    return (
        <>  
        <label htmlFor={labelName}>{labelName}</label>
        {editable&&<input type={type} value={value} onChange={handleChange}/>}
        {!editable&&<input type={type} value={value} onChange={handleChange} disabled/>}
        </>
    )
}
export default Input