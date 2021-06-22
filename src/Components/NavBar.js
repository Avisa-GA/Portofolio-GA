import 'materialize-css/dist/css/materialize.min.css';

function NavBar() {
return (

<nav className="pink accent-4">
    <div className="container">
        <div class="nav-wrapper">
            <a href="#" class="brand-logo right">👩🏻‍💻</a>
            <ul id="nav-mobile">
                <li><a href="">Dashboard</a></li>
                <li><a href="">Widget</a></li>
                <li><a href="">Reviews</a></li>
                <li><a href="">Customers</a></li>
                <li><a href="">Online Analysis</a></li>
                <li><a href="">Settings</a></li>
            </ul>
        </div>
    </div>
</nav>

)
}

export default NavBar;