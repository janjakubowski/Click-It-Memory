import React, { Component } from 'react';
import PuppyCard from "./components/PuppyCard";
import ScoreCard from "./components/ScoreCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import puppies from "./puppies.json";


class App extends Component {

  shuffle = () => {
    const puppies = this.state.puppies;
    for (var i = puppies.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var puppy = puppies[i];
        puppies[i] = puppies[j];
        puppies[j] = puppy;
    };
    this.setState({ puppies });
  }
  
  resetClicked = () => {
    const puppies = this.state.puppies.map( puppy => {
        puppy.clicked = false; 
        return puppy;
      });
    this.setState({ puppies });
  }
  
  gameOver = isWinner => {
    this.resetClicked();
    this.shuffle();
    const current = 0;
    const high = ( isWinner ? 12 : this.state.score.high);
    let message = ( isWinner ? 
      "winner, winner, chicken dinner, click any puppy to start new game"
      :
      "sorry, you already clicked that one, click any puppy to start new game"
    );
    let score = { current, high, message };
    this.setState({ score });
  };

  updateScore = () => {
    let current = this.state.score.current + 1;
    let high = this.state.score.high;
    let message = "Good, click another one";

    if ( current > high) { 
        high = current; 
        message = "new high score - keep going";
      };
    let score = { current, high, message };
    this.setState({ score });

    if ( current === 12 ) { this.gameOver(true) };
  };

  puppyClicked = id => {

    const puppy = this.state.puppies.find(puppy => puppy.id === id);

    if (puppy.clicked === true) {
      let isWinner = false;
      this.gameOver(isWinner);
    } else {
      puppy.clicked = true;
      this.setState({ puppies });
      this.updateScore();
    }
    this.shuffle();
  };


  state = {
    puppies: puppies,
    score: {
      current: 0,
      high: 0,
      message: "Welcome!"
    }
  };

  render () {
    return (
      <Wrapper>
        <Title>Play All Day</Title>
        <ScoreCard 
          current={this.state.score.current}
          high={this.state.score.high}
          message={this.state.score.message}
        />
        {this.state.puppies.map(puppy => (
          <PuppyCard
            puppyClicked={this.puppyClicked}
            id={puppy.id}
            key={puppy.id}
            image={puppy.image}
            clicked={puppy.clicked}
          />
        ))}
      </Wrapper>
    );    
  }
}

export default App;
