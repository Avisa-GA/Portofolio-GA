
import 'materialize-css/dist/css/materialize.min.css';

function NavBar() {
    return (

        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo right">Logo</a>
          <ul id="nav-mobile">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
        
    )
}

export default NavBar;