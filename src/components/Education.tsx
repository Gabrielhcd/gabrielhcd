import style from '../componentsCss/Education.module.css'

function Education() {
    return(
        <div className={`card ${style.cardEducation}`}>
            <h2>Software Engineer</h2>
            <h3>Universidad</h3>
            <h4>2000-2000</h4>
        </div>
    )
}

export default Education