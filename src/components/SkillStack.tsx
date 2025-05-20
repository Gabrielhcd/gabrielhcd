import style from '../componentsCss/SkillStack.module.css'

function SkillStack() {

    let skillList = ["Java", "Springboot", "SQL", "C/C++", "Pyhton", "Bash", "Kotlin", "Postman", "MonogDB", "linux"]

    return(
        <div className={`container ${style.skillContainer}`}>
            {/*<div className="row">
                {skillList.map(item => <div className={`col ${style.skillColumn}`}
                    key={item}>{item}
                </div>)}                
            </div>*/}
            {skillList.map(item=> <div key={item} className={`item ${style.skillObjs}`}>{item}</div>)}
        </div>
        
    )
}

export default SkillStack