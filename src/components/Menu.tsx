import style from '../componentsCss/Menu.module.css'

function Menu() {
    return (
        <ul className='nav flex-column'>
            <li className={`nav-item ${style.navItemStyle}`}>A
                <button className={`btn ${style.btnStyle}`}>Summary</button>
            </li>
            <li className='nav-item'>B</li>
            <li className='nav-item'>C</li>
            <li className='nav-item'>D</li>
        </ul>
    )
}


export default Menu