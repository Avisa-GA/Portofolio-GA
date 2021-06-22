
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
    <div style={{marginRight: '30%'}} className="container">
        <div class="row">
             {/* ********* SectionOne ***************** */}
             <div class="col s4">
                 
                <Subjects title="Dashboard" />
                
                <Subjects title="Widget"/>

                <Subjects title="Reviews"/>

                <Subjects title="Customers"/>

                <Subjects title="Online Analysis"/>

                <Subjects title="Settings"/>
                
            </div>
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
            <div class="col s6">
            <WebsiteVisitors />
            </div>
        </div>
    </div>
</div>
)
}

export default App;