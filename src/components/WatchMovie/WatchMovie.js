import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import watchMovie from '../../services/watchmovies';

export default class WatchMovie extends Component{

    state={
        movieData: ''
    }

    componentDidMount(){
        watchMovie(this.props.match.params.id).then((resp)=>{
            console.log(resp.data.data.singleMovies)
            this.setState({
                movieData: resp.data.data.singleMovies
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    youtube_parser(url){
        console.log(url);
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }


    loadMovie(){
        if(!this.state.movieData){
           return(
               <div></div>
           )
        }else{
            console.log(this.state.movieData)
            const playerOptions = {
                height: '400',
                width: '800',
                playerVars: {
                    autoplay:1
                }
            };
            console.log(this.state.movieData.url);
            let url = this.youtube_parser(this.state.movieData.url)
            console.log(url);

            return(
                <div>
                <div>You are watching {this.state.movieData.name}</div>
                <YouTube videoId={url} opts={playerOptions}  />
                <Link 
                        className='btn btn-info animated infinite pulse'
                        to={`/movie/${this.state.movieData._id}`}  >
                        Volver
                    </Link>
                </div>
                
            )
        }
    }


    


    render(){

       


        return(
            <div>
                
                {this.loadMovie()}
            </div>
        )
    }
}