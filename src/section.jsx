import Input from "./input"
import Header from "./header"
import './section.css'
function Section ({name,formData,handleResponsibilitiesChange,handleYearJoinedChange,handlePositionTitleChange,handleYearsWorkedChange ,handleNameChange,handleEmailChange,handlePhoneChange,handleCompanyNameChange,handleSchoolNameChange,handleTitleOfStudyChange,handleYearOfStudyChange}){
    return name=="Edit"?<>
        <section className="edit">
            <Header name={"Edit Section"}></Header>
            <Input labelName={"Name"} type={'text'} value={formData.name} handleChange={handleNameChange}/>
            <Input labelName={"E-Mail"} type={'email'}value={formData.email} handleChange={handleEmailChange}/>
            <Input labelName={"Phone Number"} type={'number'}value={formData.phone} handleChange={handlePhoneChange}/>
            <Input labelName={"School Name"} type={'text'} value={formData.schoolName} handleChange={handleSchoolNameChange}/>
            <Input labelName={"Title Of Study"} type={'text'} value={formData.titleOfStudy} handleChange={handleTitleOfStudyChange}/>
            <Input labelName={"Year Of Study"} type={'number'} value={formData.yearOfStudy} handleChange={handleYearOfStudyChange}/>
            <Input labelName={"Company Name"} type={'text'} value={formData.companyName} handleChange={handleCompanyNameChange}/>
            <Input labelName={"Position Title"} type={'text'} value={formData.positionTitle} handleChange={handlePositionTitleChange}/>
            <Input labelName={"Years Worked"} type={'number'} value={formData.yearsWorked} handleChange={handleYearsWorkedChange}/>
            <Input labelName={"Year Joined"} type={'number'} value={formData.yearJoined} handleChange={handleYearJoinedChange}/>
            <Input labelName={"Responibilities"} type={'text'} value={formData.responsibilities} handleChange={handleResponsibilitiesChange}/>
            <div className="buttonsEdit">
            <button>Edit</button>
            <button>Submit</button>
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