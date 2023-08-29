import { Component } from "react";

class MovieCard extends Component {


    render() {
        const { title, plot, poster, price, rating, stars, fav, cart } = this.props.movies;
        const { movies, addStars, decStars, handleCart, handleFav } = this.props;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src={poster} />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/56/56889.png" onClick={() => decStars(movies)} />

                                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />


                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick={() => addStars(movies)} />
                                <span>{stars}</span>
                            </div>
                            <button className={fav ? "favourite-btn" : "unfavourite-btn"} onClick={() => handleFav(movies)}> {fav ? "Un Favourite" : "Favourite"}</button>
                            <button className={cart ? "cart-btn2" : "cart-btn"} onClick={() => handleCart(movies)}>{cart ? "Remove From Cart" : "Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default MovieCard;