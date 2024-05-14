// import Btn from "./Btn";
import Slidecard from "./Slidecard";

let Bannerdata = () => {
    return (
        <>
            <div className="banner-data">
                <h2>Discover Food Taste Our Best Healthy & Tasty.</h2>
                <p>Discover food taste our best integer enim neque volutpat ac morbi enim faucibus amet consectetur adipiscing tempus pharetra.</p>
               
            </div>
        </>
    )
}

let Bannerpart = () => {
    return (
        <>
            <div className="banner-part">
                <div className="banner-img">
                    <img src="https://hrkit.rometheme.pro/loveit/wp-content/uploads/sites/38/2022/03/landing-page-1.png" alt="banner image" />
                </div>
                <Slidecard />
            </div>
        </>
    )
}
export { Bannerdata, Bannerpart }