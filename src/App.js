import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
  super(props);
  this.state={
    url:'https://talaikis.com/api/quotes/random/',
    quote:'',
    author:'',
      }
  }

  componentDidMount(){
    fetch(this.state.url).then(function(res){
      return res.json();
    }).then (function(data){
     this.setState({
        quote: data.quote,
        author: data.author
     });
    }.bind(this));
  }

  handleClick(){
    fetch(this.state.url).then(function(res){
      return res.json();
    }).then (function(data){
     this.setState({
        quote: data.quote,
        author: data.author
     });
    }.bind(this));
  }

  handleTweet(){
    window.open(`https://twitter.com/intent/tweet?text=" ${this.state.quote}"- ${this.state.author}"`);
  }

  render(){
  const quoteStyle={
   backgroundColor: '#fff',
   border: '1px solid #dddef2',
   borderRadius:4,
   padding:20
  }

 
    return (
      <div className="App container">
       <div className="row">
         <div className="col-md-6 push-md-3">
           <blockquote style={quoteStyle} className="text-center my-5">
             <q>{this.state.quote}</q>
             <p>- {this.state.author}</p>
             </blockquote>
             <div className="md-5 mx-auto d-block btn-group" role="group">
               <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>New Quote</button>
               <button className="btn btn-primary" onClick={this.handleTweet.bind(this)}>Tweet</button>
               </div>
           </div> 
         </div>
      </div>
    );
  }
}

export default App;

