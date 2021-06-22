import Sentiment from "./Sentiment";

function SentimentAnal(props) {
    return (

        <div class="section">
        <h5 style={{color: 'gray', marginLeft: '5%', fontSize: '20px'}}>Sentiment Analysis</h5>
        <Sentiment sentimentAnal='960' />
        <Sentiment sentimentAnal='122' />
        <Sentiment sentimentAnal='321' />
    </div>
    )
}

export default SentimentAnal