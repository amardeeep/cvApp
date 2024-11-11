import { useState } from 'react'
import Section from './section'
import './main.css'
function Main(){
    const [formData,setFormData]=useState({
        name:"Amardeep",
        email:"Email@gmail.com",
        phone:1010101010,
        schoolName:"School Name",
        titleOfStudy:"Title of Study",
        yearOfStudy:1999,
        companyName:"Company Name",
        positionTitle:"Position Title",
        yearJoined:2024,
        yearsWorked:4,
        responsibilities:"Responsibilities"
    });
    const [editable,setEditable]=useState(false);
    function handleEdit(){
        setEditable(true);
    }
    function handleSubmit(){
        setEditable(false);
    }
    function handleYearJoinedChange(e){
        setFormData({
            ...formData,
            yearJoined:e.target.value
        })
    }
    function handleYearsWorkedChange(e){
        setFormData({
            ...formData,
            yearsWorked:e.target.value
        })
    }
    function handleResponsibilitiesChange(e){
        setFormData({
            ...formData,
            responsibilities:e.target.value
        })
    }
    function handlePositionTitleChange(e){
        setFormData({
            ...formData,
            positionTitle:e.target.value
        })
    }
    function handleNameChange(e){
            setFormData({
                ...formData,
                name:e.target.value
            })
    }
    function handleEmailChange(e){
        setFormData({
            ...formData,
            email:e.target.value
        })
    }
    function handlePhoneChange(e){
        setFormData({
            ...formData,
            phone:e.target.value
        })
    }
    function handleSchoolNameChange(e){
        setFormData({
            ...formData,
            schoolName:e.target.value
        })
    }
    function handleCompanyNameChange(e){
        setFormData({
            ...formData,
            companyName:e.target.value
        })
    }
    function handleTitleOfStudyChange(e){
        setFormData({
            ...formData,
            titleOfStudy:e.target.value
        })
    }
    function handleYearOfStudyChange(e){
        setFormData({
            ...formData,
            yearOfStudy:e.target.value
        })
    }
    return (
        <>
        <main>
            <Section name="Edit" editable={editable} handleEdit={handleEdit} handleSubmit={handleSubmit} handleResponsibilitiesChange={handleResponsibilitiesChange} handleYearsWorkedChange={handleYearsWorkedChange} handleYearJoinedChange={handleYearJoinedChange} handlePositionTitleChange={handlePositionTitleChange} handleNameChange={handleNameChange} handleEmailChange={handleEmailChange} handlePhoneChange={handlePhoneChange} handleCompanyNameChange={handleCompanyNameChange} handleSchoolNameChange={handleSchoolNameChange} handleTitleOfStudyChange={handleTitleOfStudyChange} handleYearOfStudyChange={handleYearOfStudyChange} formData={formData} />
            <Section name="Display" editable={editable} handleEdit={handleEdit} handleSubmit={handleSubmit} handleResponsibilitiesChange={handleResponsibilitiesChange} handleYearsWorkedChange={handleYearsWorkedChange} handleYearJoinedChange={handleYearJoinedChange} handlePositionTitleChange={handlePositionTitleChange}  handleNameChange={handleNameChange} handleEmailChange={handleEmailChange} handlePhoneChange={handlePhoneChange} handleCompanyNameChange={handleCompanyNameChange} handleSchoolNameChange={handleSchoolNameChange} handleTitleOfStudyChange={handleTitleOfStudyChange} handleYearOfStudyChange={handleYearOfStudyChange} formData={formData}/>
        </main>
        </>
    )
}
export default Main