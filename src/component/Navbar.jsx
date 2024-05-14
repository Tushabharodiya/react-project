let Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#"><img src="https://hrkit.rometheme.pro/loveit/wp-content/uploads/sites/38/2022/03/logo-loveit.png" alt="logo image" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">homepage</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">about us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">menu<i class="fa-solid fa-caret-down ps-2"></i></a>
                            <div className="menu">
                                <ul>
                                    <li>menu 1</li>
                                    <li>menu 2</li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">page<i class="fa-solid fa-caret-down ps-2"></i></a>
                            <div className="menu">
                                <ul>
                                    <li>services</li>
                                    <li>our chef</li>
                                    <li>gallery</li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">reservation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">info<i class="fa-solid fa-caret-down ps-2"></i></a>
                            <div className="menu">
                                <ul>
                                    <li>Testimonial</li>
                                    <li>Faqs</li>
                                    <li>news</li>
                                    <li>single news</li>
                                    <li>contact us</li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;