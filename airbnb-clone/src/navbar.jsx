function Navbar () {
    return(
        <nav>
            <div className="left-section"><img className="airbnb-logo" src="../src/assets/icons8-airbnb-48.png" alt="" /></div>
            <div className="middle-section">
                <button className="stay-button">Stay</button>
                <button className="experience-button">Experience</button>
            </div>
            <div className="right-section">
                <button className="airbnb-home">Airbnb your home</button>
                <span className="favicon-container"><img className="favicon-icon" src="../src/assets/icons8-favicon-50.png" alt="" /></span>
                <div className="user-logo">
                    <span className="menu-container"><img className="menu-icon" src="../src/assets/icons8-menu-50.png" alt="" /></span>
                    <span className="person-logo-container"><img className="person-icon" src="../src/assets/icons8-person-64.png" alt="" /></span>
                </div>
            </div>
        </nav>
    )
}
export default Navbar