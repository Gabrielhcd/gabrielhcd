import style from '../componentsCss/Education.module.css'

function Education() {
    return(
        <div className={`card ${style.cardEducation}`}>
            <h2>Software Engineer</h2>
            <img className={`${style.udcImgStyle}`}src="gabrielhcd/images/udcLogo.png" alt="Universidad de Colima" />
            <h4>2017-2021</h4>
        </div>
    )
}

export default Education