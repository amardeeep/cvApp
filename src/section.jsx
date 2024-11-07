import Input from "./input"
function Section ({name,formData,handleNameChange}){
    return name=="Edit"?<>
        <section>
            <Input labelName={"Name"} value={formData.name} handleNameChange={handleNameChange}/>
        </section>
    </>:<>
    <section>
        <p>Displaying Name {formData.name}</p>
    </section>
    </>
}
export default Section