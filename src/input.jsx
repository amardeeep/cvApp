function Input ({labelName,value}){
    return (
        <>  
        <label htmlFor={labelName}>{labelName}</label>
        <input type="text" value={value}/>
        </>
    )
}
export default Input