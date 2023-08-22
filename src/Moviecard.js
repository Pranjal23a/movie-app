import { Component } from "react";

class MovieCard extends Component {
    render() {
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://shorturl.at/eFGOR" />
                    </div>
                    <div className="right">
                        <div className="title">The Avengers</div>
                        <div className="plot">Supernatural powers shown in the movie.</div>
                        <div className="price">Rs. 199</div>

                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="star-dis">star</div>
                            <div className="favourite-btn">Favourite</div>
                            <div className="cart-btn">Add to cart</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;