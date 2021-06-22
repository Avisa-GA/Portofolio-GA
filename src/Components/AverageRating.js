


function AverageRating(props) {
    return (

        <div class="section">
        <h5 style={{color: 'gray'}}>{props.title}</h5>
        <p>{props.averageOfRating}</p>
    </div>
    )
}

export default AverageRating;