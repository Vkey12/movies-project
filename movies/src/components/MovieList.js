

const MovieList = (props) => {
    const FavouriteComponent = props.favourite;

    return (
        <>
        {props.movies.map((movie,index)=>(
            <div className="image-container d-flex justify-content-start m-3">
                <img src={movie.Poster} alt='movie'></img>
                





            </div>



        ))}
        
        </>
    )
}