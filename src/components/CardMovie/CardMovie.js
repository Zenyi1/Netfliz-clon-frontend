import React, { Component } from 'react';
import Rate from 'rc-rate';
import calculateRank from './calculateRank';

class CardMovie extends Component{
    state={
        movie: this.props.movie,
        rank: calculateRank(this.props.movie.rank)
    }

    componentDidMount(){
        console.log(this.props.movie,'.....RANK')
    }


    render(){
        console.log(this.props.movie.rank)
        return(
            <div className="card" style={{width: "14rem"}}>
                <h5 className="card-title"
                onClick={() => this.props.redirect(this.state.movie._id)}
                >{this.state.movie.name}</h5>
                <img src={this.state.movie.image} alt="Poster"/>
                <div className="card-body">
                    <Rate 
                    defaultValue={parseFloat(this.state.rank)}
                    allowHalf
                    onChange={(rank)=>this.props.getRank(this.state.movie._id, rank)}
                     />
                     <p>{this.state.rank}</p>
                </div>
            </div>
        )
    }
}

export default CardMovie;