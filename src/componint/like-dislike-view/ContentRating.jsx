
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,

        handleLike:() => {
            this.setState((prevState) => ({
                likes: prevState.likes +1,
                totalRatings: prevState.totalRatings +1
            }));
        },
        handleDislike:() => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes +1,
                totalRatings: prevState.totalRatings +1
            }));
        },
        handleRest:() => {
            this.setState((prevState) => ({
                totalRatings: prevState.totalRatings * 0,
                dislikes: prevState.dislikes * 0,
                likes: prevState.likes * 0,
            }));
        }
    };
  }
  render() {
    return (
        <div className='content-rating'>
            <p>
                Hi Osama!
            </p>
            <div className='rating-buttons'>
                <button className='like-button' onClick={this.state.handleLike}>
                    Like ({this.state.likes})
                </button>
                <button className='dislike-button' onClick={this.state.handleDislike}>
                    Dislike ({this.state.dislikes})
                </button>
                <button className='like-button' onClick={this.state.handleRest}>
                    Rest
                </button>
                <p>Total Ratings: {this.state.totalRatings}</p>
            </div>
        </div>
    );
  }
}

export default ContentRating;
