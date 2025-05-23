import style from "../componentsCss/Summary.module.css"
import summaryJson from "../data/Summary.json"

function Summary() {
    return(
        <div className={`container ${style.containerStyle}`}>
            <div className={`card ${style.cardStyle}`}>
                <div className={`card-body ${style.cardBodyStyle}`}>
                    <h1 className="card-title">{summaryJson.name}</h1>
                    <h2 className="card-subtitle">{summaryJson.title}</h2>
                    <h4 className={`card ${style.cardTxtStyle}`}>{summaryJson.summary}</h4>
                </div>    
            </div>
        </div>
        
    )
}

export default Summary