import style from "../componentsCss/Summary.module.css"

function Summary() {
    return(
        <div className={`container ${style.containerStyle}`}>
            <div className={`card ${style.cardStyle}`}>
                <div className={`card-body ${style.cardBodyStyle}`}>
                    <h1 className="card-title">MyName</h1>
                    <h2 className="card-subtitle">Software Engineer</h2>
                    <h4 className={`card ${style.cardTxtStyle}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus, provident non quasi facilis itaque doloribus soluta eos quo? Delectus facere deleniti nesciunt eum eos blanditiis quibusdam, nulla ipsa aliquid!</h4>
                </div>    
            </div>
        </div>
        
    )
}

export default Summary