import { useState } from 'react'
import Section from './section'
function Main(){
    const [formData,setFormData]=useState({
        name:"Amardeep",
        email:"Email@gmail.com",
        phone:1010101010,
        schoolName:"School Name",
        titleOfStudy:"Title of Study",
        yearOfStudy:1999,
        companyName:"Company Name",
    });
    function handleNameChange(e){
            setFormData({
                ...formData,
                name:e.target.value
            })
    }

    return (
        <>
        <main>
            <Section name="Edit" handleNameChange={handleNameChange} formData={formData}/>
            <Section name="Display" formData={formData} handleNameChange={handleNameChange}/>
        </main>
        </>
    )
}
export default Main