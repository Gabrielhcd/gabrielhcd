import style from '../componentsCss/SkillStack.module.css'
import skillsJson from '../data/Skills.json'

export interface Skill {
    name: string,
    level: string,
    icon: string
}

function SkillStack() {

    let skillSet: Skill[] = skillsJson.skills;

    return(
        <div className={`container ${style.skillContainer}`}>
            {skillSet.map(item=> <div key={item.name} 
                        className={`item ${style.skillObjs}`}>
                            <div className={`card ${style.cardStyle}`}>
                                <div className={`card-inner ${style.cardInnerStyle}`}>
                                    <div className={`card-front ${style.cardFrontStyle}`}>
                                        <img className={`${style.imgStyle}`} 
                                        src={`/gabrielhcd/images/${item.icon}`} 
                                        alt={item.name}/>
                                    </div>
                                    <div className={`card-back ${style.cardBackStyle}`}>
                                        <h6>{item.name}</h6>
                                        <h6>{`Lvl/Exp: ${item.level}`}</h6>
                                    </div>
                                </div>
                            </div>
                            
                </div>)}
        </div>
        /*<div className={`container ${style.skillContainer}`}>
            {skillSet.map(item=> <div key={item.name} 
                        className={`item ${style.skillObjs}`}>
                            <img className={`${style.imgStyle}`} 
                                src={`/gabrielhcd/images/${item.icon}`} 
                                sizes="100x100" alt={item.name}/>
                            <div className='imgBack'>Back Side</div>
                </div>)}
        </div>*/
        
        
    )
}

export default SkillStack