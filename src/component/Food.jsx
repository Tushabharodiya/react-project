let Foodhead = () => {
    return (
        <>
            <div className="food-head">
                <span>Delicious Food</span>
                <h2>Our Special Vegans Food.</h2>
            </div>
        </>
    )
}


let Fooddata = () => {
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src="https://hrkit.rometheme.pro/loveit/wp-content/uploads/sites/38/2022/03/menu-3.png" alt="food image" />
                </div>
                <div className="card-data">
                    <h2>Shrimps Tomato</h2>
                    <div className="star d-flex justify-content-between">
                        <p>$ 18.30</p>
                        <span>4.6
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}
export {Foodhead,Fooddata};