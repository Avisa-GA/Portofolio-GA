
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
    <div className="container">
        <div class="row">
            {/* ********* SectionOne ***************** */}
            <div class="col s4">
                <Subjects title="Reviews" number='1,281' />
                <div class="divider"></div>
                <Subjects title="Average Rating" number='4.6' />
                <div class="divider"></div>
                <SentimentAnal />
                <div class="divider"></div>
            </div>


            {/* *********** Section Two ******************* */}
            <div style={{marginLeft: '20%'}} class="col s4">
            <WebsiteVisitors />
            </div>
        </div>
    </div>
</div>
)
}

export default App;