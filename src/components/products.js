import c1 from "../pictures/c1.jpg"
import c3 from "../pictures/c2.jpg"
import c2 from "../pictures/c3.jpg"
import c4 from "../pictures/c4.jpg"
function Popular(){
    return(
<div class="popular">
        <h1 class="popular__title">Most popular</h1>
        <p class="popular__subtitle">pick the best fit</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={c1}/>
                <h3>2023 Python Data Visualization Masterclass</h3>
                <p>cot steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>
            <div class="course-card">
                <img src={c2}/>
                <h3>Web Developement bootcamp 2023</h3>
                <p>cot steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>
            <div class="course-card">
                <img src={c3}/>
                <h3>Master UI/UX designing with sigma</h3>
                <p>cot steele</p>
                <p>2.9⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>
            <div class="course-card">
                <img src={c4}/>
                <h3>2023 Basic to Advance with EMC</h3>
                <p>cot steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>
            <div class="course-card">
                <img src={c4}/>
                <h3>Master UI/UX designing with sigma</h3>
                <p>cot steele</p>
                <p>2.9⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>
            <div class="course-card">
                <img src={c3}/>
                <h3>2023 Basic to Advance with EMC</h3>
                <p>cot steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>
            <div class="course-card">
                <img src={c2}/>
                <h3>2023 Python Data Visualization Masterclass</h3>
                <p>cot steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>
            <div class="course-card">
                <img src={c1}/>
                <h3>Web Developement bootcamp 2023</h3>
                <p>cot steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>

        </div>
    </div>)}
    export default Popular