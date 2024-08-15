function Navbar () {
    return(
        <nav>
            <div className="left-section"><img className="airbnb-logo" src="../src/assets/icons8-airbnb-48.png" alt="" /></div>
            <div className="middle-section">
                <button className="stay-button">Stay</button>
                <button className="experience-button">Experience</button>
            </div>
            <div className="right-section">
                <button>Airbnb your home?</button>
                <div>
                    <span><img src="../src/assets/icons8-menu-50.png" alt="" /></span>
                </div>
            </div>
        </nav>
    )
}
export default Navbar