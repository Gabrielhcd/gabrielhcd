import Education from "./Education"
import SkillStack from "./SkillStack"
import Summary from "./Summary"
import WorkHistory from "./WorkHistory"
import Menu from "./Menu"

function GridLayout() {
    return (
        <div className="container-fluid">
            <div className="menu">
            </div>
            <div className="row">
                <Summary/>
            </div>
            <div className="row">
                Skills:
            </div>
            <div className="row">
                <SkillStack/>
            </div>
            <div className="row">
                WorkHistory:
            </div>
            <div className="row">
                <WorkHistory/>
            </div>
            <div className="row">
                Education
            </div>
            <div className="row">
                <Education/>
            </div>
        </div>
        
    )
}

export default GridLayout