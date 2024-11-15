import Input from "./input"
import Header from "./header"
import './section.css'
import { useState } from "react"
function Section ({name,handleEdit,handleSubmit,editable,formData,handleResponsibilitiesChange,handleYearJoinedChange,handlePositionTitleChange,handleYearsWorkedChange ,handleNameChange,handleEmailChange,handlePhoneChange,handleCompanyNameChange,handleSchoolNameChange,handleTitleOfStudyChange,handleYearOfStudyChange}){
    const [showDiv,setShowDiv]=useState(false);
    const [showEducation,setEducation]=useState(false);
    const [showExperience,setExperience]=useState(false);
    function handleShow(){
        setShowDiv(!showDiv)
    }
    function handleShowEducation(){
        setEducation(!showEducation)
    }
    function handleShowExperience(){
        setExperience(!showExperience)
    }
    return name=="Edit"?<>
        <section className="edit" >
            <Header name={"Edit Section"}></Header>
            <div className="personal editSubSection">
                <h2>Personal Details <button onClick={handleShow}>Show</button></h2>
            <Input editable={editable} labelName={"Name"} type={'text'} value={formData.name} handleChange={handleNameChange} show={showDiv}/>
            <Input editable={editable} labelName={"E-Mail"} type={'email'}value={formData.email} handleChange={handleEmailChange} show={showDiv}/> 
            <Input editable={editable} labelName={"Phone Number"} type={'number'}value={formData.phone} handleChange={handlePhoneChange} show={showDiv}/>
            </div>
            <div className="schoolDetails editSubSection">
                <h2>Academic Details <button onClick={handleShowEducation}>Show</button></h2>
            <Input editable={editable} labelName={"School Name"} type={'text'} value={formData.schoolName} handleChange={handleSchoolNameChange} show={showEducation}/>
            <Input editable={editable} labelName={"Title Of Study"} type={'text'} value={formData.titleOfStudy} handleChange={handleTitleOfStudyChange} show={showEducation}/>
            <Input editable={editable} labelName={"Year Of Study"} type={'number'} value={formData.yearOfStudy} handleChange={handleYearOfStudyChange} show={showEducation}/>
            </div>
            <div className="experience editSubSection">
                <h2>Previous experience <button onClick={handleShowExperience}>Show</button></h2>
            <Input editable={editable} labelName={"Company Name"} type={'text'} value={formData.companyName} handleChange={handleCompanyNameChange} show={showExperience}/>
            <Input editable={editable} labelName={"Position Title"} type={'text'} value={formData.positionTitle} handleChange={handlePositionTitleChange} show={showExperience}/>
            <Input editable={editable} labelName={"Years Worked"} type={'number'} value={formData.yearsWorked} handleChange={handleYearsWorkedChange} show={showExperience}/>
            <Input editable={editable} labelName={"Year Joined"} type={'number'} value={formData.yearJoined} handleChange={handleYearJoinedChange} show={showExperience}/>
            <Input editable={editable} labelName={"Responibilities"} type={'text'} value={formData.responsibilities} handleChange={handleResponsibilitiesChange} show={showExperience}/>
            </div>
            <div className="buttonsEdit editSubSection">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleSubmit}>Submit</button>
            </div>
        </section>
    </>:<>
    <section className="display">
        <Header name={"Your Resume"}></Header>
        <div className="personalDisplay">
            <h3>Name {formData.name}</h3>
            <div className="horizontalFlex">
                <p>E-Mail {formData.email}</p>
                <p>Phone Number {formData.phone}</p>
            </div>
        </div>
        <div className="schoolDetailsDisplay">
            <h3>Education :</h3>
            <p>School Name {formData.schoolName}</p>
            <p>Title Of Study {formData.titleOfStudy}</p>
            <p>Year Of Study {formData.yearOfStudy}</p>
        </div>
        
        <div className="workDisplay">
            <h3>Experience :</h3>
            <p>Company Name {formData.companyName}</p>
            <p>Position Title {formData.positionTitle}</p>
            <p>Year Joined {formData.yearJoined} </p>
            <p>Years Worked {formData.yearsWorked}</p>
            <p>Responsibilities {formData.responsibilities}</p>
        </div>
        <button>Save As Pdf</button>
    </section>
    </>
}
export default Section