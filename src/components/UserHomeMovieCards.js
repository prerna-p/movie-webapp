import React from 'react'
import {Link} from 'react-router-dom';

const UserHomeMovieCards = ({movie,addMovieToUserWatchList,favoriteMovie,dislikeMovie}) =>
    <div>
        <div className="card">
            <img className="card-img-top" src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}/>
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <p className="card-text text-muted text-truncate">{movie.overview}</p>
                    <button className="btn btn-outline-warning btn-sm mr-1"
                            onClick={() => {addMovieToUserWatchList(movie)}}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button className="btn btn-outline-success btn-sm mr-1" onClick={() => favoriteMovie(movie)}>
                        <i className="fa fa-thumbs-up"></i>
                    </button>
                    <button className="btn btn-outline-danger btn-sm mr-1">
                        <i className="fa fa-thumbs-down" onClick={() => dislikeMovie(movie)}></i>
                    </button>
                    <div>
                        <Link to={`/details/${movie.id}`}>
                            More details
                        </Link>
                    </div>

                </div>
        </div>
    </div>

export default UserHomeMovieCards;