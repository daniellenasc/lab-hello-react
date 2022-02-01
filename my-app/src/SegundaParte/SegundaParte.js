import image1 from '../images/icon1.png'
import image2 from '../images/icon2.png'
import image3 from '../images/icon3.png'
import image4 from '../images/icon4.png'

import './SegundaParte.css'

function SegundaParte() {
    return (
        <div class="secondDiv">
            <section>
                <img src={image1} alt="image1"/>
                <h4> Declarative </h4>
                <p> React makes it painless to create interactie UIs. </p>
            </section>

            <section>
                <img src={image2} alt="image2"/>
                <h4> Components </h4>
                <p> Build encapsulated components that manage their state. </p>
            </section>

            <section>
                <img src={image3} alt="image3"/>
                <h4> Single-Way </h4>
                <p> A set of immutable values are passed to component's. </p>
            </section>

            <section>
                <img src={image4} alt="image4"/>
                <h4> JSX </h4>
                <p> Statically-typed,designed to run on modern browsers. </p>
            </section>
        </div>

    )
}

export default SegundaParte