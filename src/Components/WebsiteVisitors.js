
import Subjects from "./Subjects";

function WebsiteVisitors(props) {
return(


<div style={{width: '500px', backgroundColor: 'whitesmoke', marginTop: '10%'}} class="section">

    {/* <h5 style={{marginLeft: '5%', color: 'gray'}}>Website Visitors</h5>
    <p style={{marginLeft: '5%'}}>{props.numberOfVisitors}</p> */}
    <Subjects title="Website Reviews" number="821" />

    <div style={{marginLeft: '5%'}} class="row">
        <div class="col s12 m6">
            <div style={{height: '200px', width: '400px'}} class="card blue-grey darken-1">
                <div class="card-content white-text">
                    {/* <span class="card-title">Card Title</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p> */}
                </div>
                <div class="card-action">
                    {/* <a href="#">This is a link</a>
                    <a href="#">This is a link</a> */}
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default WebsiteVisitors;