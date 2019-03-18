import {Link} from "react-router-dom";
import React, {Component} from "react";
import MovieServiceClient from "../services/movie.service.client";
import UserHomeNavbar from "./UserHomeNavbar";

export default class Favorites extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:'',
            favoriteMovies:[]
        };
        this.setUser = this.setUser.bind(this)
        this.setFavoriteMovies = this.setFavoriteMovies.bind(this)
    }

    setUser(user){
        this.setState({user:user})
    }

    setFavoriteMovies(movies){
        this.setState({
            favoriteMovies:movies
        })
    }

    componentWillMount(){
        MovieServiceClient.getFavouriteMovies().then(movies => this.setFavoriteMovies(movies.favourites))
    }

    render(){
        return(
            <div>
                <UserHomeNavbar/>
                <div className="container">
                    <h1> My favorites</h1>
                    <ul className="list-group">
                        {this.state.favoriteMovies && this.state.favoriteMovies.map(movie => {
                            return <li className="list-group-item">
                                <Link to={`/details/${movie.id}`}>
                                    {movie.title}
                                </Link>
                                </li>
                        })}
                    </ul>
                </div>

            </div>
        )
    }
}