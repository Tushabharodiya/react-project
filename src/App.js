import Banner, { Bannerdata, Bannerpart } from "./component/Banner";
import Food, { Fooddata, Foodhead } from "./component/Food";
import Btn from "./component/Btn"
import Navbar from "./component/Navbar";
import Vegetable from "./component/Vegetable";
import Blog from "./component/Blog";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Bannerdata />
              <div className="banner-btn d-flex">
                <Btn />
                <div className="play ms-4 align-self-center">
                  <i class="fa-solid fa-play"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Bannerpart />
            </div>
          </div>
        </div>
      </section>


      <section className="veg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Vegetable />
            </div>
            <div className="col-lg-4">
              <Vegetable />
            </div>
            <div className="col-lg-4">
              <Vegetable />
            </div>
          </div>
        </div>
      </section>

      <section className="about banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Bannerpart />
            </div>
            <div className="col-lg-6">
              <div className="about-data ms-4">
                <Bannerdata />
                <span className="mb-3 d-inline-block">Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis  enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper eget duis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Adipiscing elit duis tristique sollicitudin nibh sit. Porttitor lacus luctus accumsan tortor.</span>
                <Btn />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="food">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Foodhead />
            </div>
            <div className="col-lg-3">
              <Fooddata />
            </div>
            <div className="col-lg-3">
              <Fooddata />
            </div>
            <div className="col-lg-3">
              <Fooddata />
            </div>
            <div className="col-lg-3">
              <Fooddata />
            </div>
            <div className="col-lg-3">
              <Fooddata />
            </div>
            <div className="col-lg-3">
              <Fooddata />
            </div>
            <div className="col-lg-3">
              <Fooddata />
            </div>
            <div className="col-lg-3">
              <Fooddata />
            </div>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Foodhead />
            </div>
            <div className="col-lg-4">
              <Blog />
            </div>
            <div className="col-lg-4">
              <Blog />
            </div>
            <div className="col-lg-4">
              <Blog />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="fot-logo">
                <img src="https://hrkit.rometheme.pro/loveit/wp-content/uploads/sites/38/2022/03/logo-loveit.png" alt="logo image   " />
              </div>
            </div>
            <div className="col-lg-2">
              <Footer />
            </div>
            <div className="col-lg-2">
              <Footer />
            </div>
            <div className="col-lg-2">
              <Footer />
            </div>
            <div className="col-lg-3">
              <div className="fot-data fot-info">
                <h5>Loveit App is now Ready Search for all</h5>
                <p>Proin fermentum leo vel orci porta non pulvinar neque. Pellentesque  </p>
                <div className="fot-img d-flex">
                  <img src="https://hrkit.rometheme.pro/loveit/wp-content/uploads/sites/38/2022/03/google-play-1.png" alt="footer image" />
                  <img src="https://hrkit.rometheme.pro/loveit/wp-content/uploads/sites/38/2022/03/app-store-1.png" alt="footer image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="footer-bottom">
        <div className="container">
          <div className="web-data d-flex justify-content-between">
            <div className="web-info">
              <p className="mb-0">Loveit with Passion by Rometheme © 2024 All rights reserved</p>
            </div>
            <div className="web-refrence d-flex">
              <span><i class="fa-brands fa-facebook"></i></span>
                <span><i class="fa-brands fa-twitter"></i></span>
                <span><i class="fa-brands fa-linkedin"></i></span>
                <span><i class="fa-brands fa-youtube"></i></span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App;
