import Input from "./input"
import Header from "./header"
import './section.css'
function Section ({name,handleEdit,handleSubmit,editable,formData,handleResponsibilitiesChange,handleYearJoinedChange,handlePositionTitleChange,handleYearsWorkedChange ,handleNameChange,handleEmailChange,handlePhoneChange,handleCompanyNameChange,handleSchoolNameChange,handleTitleOfStudyChange,handleYearOfStudyChange}){
    return name=="Edit"?<>
        <section className="edit">
            <Header name={"Edit Section"}></Header>
            <Input editable={editable} labelName={"Name"} type={'text'} value={formData.name} handleChange={handleNameChange}/>
            <Input editable={editable} labelName={"E-Mail"} type={'email'}value={formData.email} handleChange={handleEmailChange}/>
            <Input editable={editable} labelName={"Phone Number"} type={'number'}value={formData.phone} handleChange={handlePhoneChange}/>
            <Input editable={editable} labelName={"School Name"} type={'text'} value={formData.schoolName} handleChange={handleSchoolNameChange}/>
            <Input editable={editable} labelName={"Title Of Study"} type={'text'} value={formData.titleOfStudy} handleChange={handleTitleOfStudyChange}/>
            <Input editable={editable} labelName={"Year Of Study"} type={'number'} value={formData.yearOfStudy} handleChange={handleYearOfStudyChange}/>
            <Input editable={editable} labelName={"Company Name"} type={'text'} value={formData.companyName} handleChange={handleCompanyNameChange}/>
            <Input editable={editable} labelName={"Position Title"} type={'text'} value={formData.positionTitle} handleChange={handlePositionTitleChange}/>
            <Input editable={editable} labelName={"Years Worked"} type={'number'} value={formData.yearsWorked} handleChange={handleYearsWorkedChange}/>
            <Input editable={editable} labelName={"Year Joined"} type={'number'} value={formData.yearJoined} handleChange={handleYearJoinedChange}/>
            <Input editable={editable} labelName={"Responibilities"} type={'text'} value={formData.responsibilities} handleChange={handleResponsibilitiesChange}/>
            <div className="buttonsEdit">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleSubmit}>Submit</button>
            </div>
        </section>
    </>:<>
    <section className="display">
        <Header name={"Your Resume"}></Header>
        <h1>Name {formData.name}</h1>
        <p>E-Mail {formData.email}</p>
        <p>Phone Number {formData.phone}</p>
        <br />
        <p>School Name {formData.schoolName}</p>
        <p>Title Of Study {formData.titleOfStudy}</p>
        <p>Year Of Study {formData.yearOfStudy}</p>
        <br />
        <p>Company Name {formData.companyName}</p>
        <p>Position Title {formData.positionTitle}</p>
        <p>Year Joined {formData.yearJoined} </p>
        <p>Years Worked {formData.yearsWorked}</p>
        <p>Responsibilities {formData.responsibilities}</p>
        <button>Save As Pdf</button>
    </section>
    </>
}
export default Section