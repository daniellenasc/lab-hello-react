import ironhackLogo from '../images/ironhack-logo-xs.png'
import menuTop from '../images/menu-top-xs.png'

import "./PrimeiraParte.css"

function PrimeiraParte() {
    return (
        <div class="firstDiv">
            <nav class="navbar">
                <img src={ironhackLogo} alt="ironhack-logo" />
                <img src={menuTop} alt="menu-top" />
            </nav>
            <h1> Say hello to ReactJS </h1>
            <p> You will learn how to use the most popular frontend library, and become a super Ninja Developer. </p>
            <button type="button"> Awsome! </button>
        </div>
    )
}

export default PrimeiraParte