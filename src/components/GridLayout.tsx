import Education from "./Education"
import SkillStack from "./SkillStack"
import Summary from "./Summary"
import WorkHistory from "./WorkHistory"
import style from "../componentsCss/GridLayout.module.css"

function GridLayout() {
    return (
        <div className="container-fluid">
            <div className="menu">
            </div>
            <div className="row">
                <Summary/>
            </div>
            <div className={`row ${style.rowSeparatorStyle}`}>
                <h5 className={`${style.separatorh5Style}`}>Skills:</h5>
            </div>
            <div className="row">
                <SkillStack/>
            </div>
            <div className={`row ${style.rowSeparatorStyle}`}>
                <h5 className={`${style.separatorh5Style}`}>WorkHistory:</h5>
            </div>
            <div className="row">
                <WorkHistory/>
            </div>
            <div className={`row ${style.rowSeparatorStyle}`}>
                <h5 className={`${style.separatorh5Style}`}>Education:</h5>
            </div>
            <div className="row">
                <Education/>
            </div>
        </div>
        
    )
}

export default GridLayout