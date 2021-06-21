import NavBar from './Components/NavBar';
import Reviews from './Components/Reviews';
import AverageRating from './Components/AverageRating';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
return (
<div >
<NavBar />
<div className="container">
    
    <Reviews numberOfReviews='1,281' />
    <div class="divider"></div>
    <AverageRating averageOfRating='4.6' />
    <div class="divider"></div>
</div>
  
</div>
)
}

export default App;