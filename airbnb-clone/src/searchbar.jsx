function Searchbar(){
    return(
        <section className="details-wrapper">
            <div className="details-container">
                <div className="search-destinations">
                    <div>Where</div>
                    <input type="text" placeholder="Search destinations"/>
                </div>
                <div className="check-in">
                    <div>Check in</div>
                    <div className="add-dates">Add dates</div>
                </div>
                <div className="check-out">
                    <div>Check out</div>
                    <div className="add-dates">Add dates</div>
                </div>
                <div className="guests-search-container">
                    <div className="guests">
                        <div>Who</div>
                        <div className="add-guests">Add guests</div>
                    </div>
                    <button className="search-button">
                        <img src="../src/assets/icons8-search-50.png" alt="" />
                    </button>
                </div>
                    
            </div>
        </section>
    )
}

export default Searchbar