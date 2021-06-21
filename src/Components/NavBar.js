import 'materialize-css/dist/css/materialize.min.css';

function NavBar() {
return (

<nav className="pink accent-4">
    <div className="container">
        <div class="nav-wrapper">
            <a href="#" class="brand-logo right">👩🏻‍💻</a>
            <ul id="nav-mobile">
                <li><a >Dashboard</a></li>
                <li><a >Widget</a></li>
                <li><a >Reviews</a></li>
                <li><a >Customers</a></li>
                <li><a >Online Analysis</a></li>
                <li><a >Settings</a></li>
            </ul>
        </div>
    </div>
</nav>

)
}

export default NavBar;