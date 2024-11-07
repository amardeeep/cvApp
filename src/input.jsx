function Input ({labelName,value,handleNameChange}){
    return (
        <>  
        <label htmlFor={labelName}>{labelName}</label>
        <input type="text" value={value} onChange={handleNameChange}/>
        </>
    )
}
export default Input