import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './Components/NavBar';
import Subjects from './Components/Subjects';
import SentimentAnal from './Components/SentimentAnal';
import WebsiteVisitors from './Components/WebsiteVisitors';
import { auto } from 'async';

function App() {
return (
<div>
    <NavBar />
    <div style={{marginLeft: '14%', marginTop: '5%'}} className="container">
        <div class="row">
            {/* ********* SectionOne ***************** */}

            {/* ********* SectionOne ***************** */}
            <div style={{marginRifgt: '10px'}} class="col s4">

                <Subjects title="Reviews" number='1,281' />

                <div class="divider"></div>

                <Subjects title="Average Rating" number='4.6' />

                <div class="divider"></div>

                <SentimentAnal />

            </div>


            {/* *********** Section Two ******************* */}
            <div class="col s4">
                <WebsiteVisitors />
            </div>
        </div>
    </div>
</div>
)
}

export default App;