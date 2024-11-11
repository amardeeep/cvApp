import './input.css'
function Input ({labelName,value,handleChange,type}){
    return (
        <>  
        <label htmlFor={labelName}>{labelName}</label>
        <input type={type} value={value} onChange={handleChange}/>
        </>
    )
}
export default Input