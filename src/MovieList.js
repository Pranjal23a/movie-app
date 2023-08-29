import { Component } from "react";
import MoviCard from "./Moviecard";

class MovieList extends Component {
    constructor() {
        super();

        this.state = {
            movies: [
                {
                    title: 'The Avengers',
                    plot: 'Supernatural powers shown in the movie.',
                    poster: "https://shorturl.at/eFGOR",
                    price: 199,
                    rating: 8.9,
                    stars: 0,
                    fav: false,
                    cart: false,
                },
                {
                    title: 'Gadar 2',
                    plot: 'India-Pakistan Border Story',
                    poster: "https://shorturl.at/dilTY",
                    price: 250,
                    rating: 5.9,
                    stars: 0,
                    fav: false,
                    cart: false,
                },
                {
                    title: 'Rocky aur Rani ki prem kahani',
                    plot: 'Some moral stories shown in movie.',
                    poster: "https://shorturl.at/cipqP",
                    price: 550,
                    rating: 9.2,
                    stars: 0,
                    fav: false,
                    cart: false,
                }

            ]

        }
    }
    addStars = (movie) => {
        const { movies } = this.state;
        const mid = movies.indexOf(movie);
        if (movies[mid].stars >= 5) {
            return;
        }
        movies[mid].stars += 0.5;
        this.setState({
            movies: movies
        });
    }

    decStars = (movie) => {
        const { movies } = this.state;
        const mid = movies.indexOf(movie);
        if (movies[mid].stars <= 0) {
            return;
        }
        movies[mid].stars -= 0.5;
        this.setState({
            movies: movies
        });
    }
    handleFav = (movie) => {
        const { movies } = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].fav = !movies[mid].fav;
        this.setState({
            movies
        });
    }
    handleCart = (movie) => {
        const { movies } = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].cart = !movies[mid].cart;
        this.setState({
            movies
        });
    }

    render() {
        const { movies } = this.state;
        return (
            <>
                {movies.map((movie) => <MoviCard movies={movie} addStars={this.addStars}
                    decStars={this.decStars} handleFav={this.handleFav} handleCart={this.handleCart} />)}

            </>
        )
    }
}
export default MovieList;