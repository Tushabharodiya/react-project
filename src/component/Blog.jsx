import Btn from "./Btn";

let Blog = () => {
    return (
        <>

            <div className="card">
                <div className="card-img">
                    <img src=" https://hrkit.rometheme.pro/loveit/wp-content/uploads/sites/38/2022/03/blog-3.jpg" alt="dish image" />
                </div>
                <div className="card-data">
                    <span><i class="fa-solid fa-calendar-days me-2 mb-2"></i> March 17, 2022</span>
                    <h2>Fresh Vegetable Salad & Arugul</h2>
                    <p>LOVEIT RESTAURANT Single Blog Fresh Vegetable Salad with Arugul. Angel Smith March 17, 2022 Vegetable GENERAL General enim diam</p>
                    <Btn />
                </div>
            </div>

        </>
    )
}
export default Blog;