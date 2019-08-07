import React, { Component } from 'react';
import PuppyCard from "./components/PuppyCard";
import ScoreCard from "./components/ScoreCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import puppies from "./puppies.json";


class App extends Component {

  updateScore = () => {
    let current = this.state.score.current + 1;
    let high = this.state.score.high;
    if ( current === 12 ) 
      { console.log("winnner, winner"); }
    if ( current > high) { high = current; };
    console.log (`current: ${current} | high: ${high}`);
    const score = {
      current,
      high
    };
    this.setState({ score });
  };

  puppyClicked = id => {

    const puppy = this.state.puppies.find(puppy => puppy.id === id);

    if (puppy.clicked === true) {
      console.log("loser");
    } else {
      puppy.clicked = true;
      this.updateScore();
    }

    this.setState({ puppies });
  };


  state = {
    puppies: puppies,
    score: {
      current: 0,
      high: 0
    }
  };

  render () {
    return (
      <Wrapper>
        <Title>Play All Day</Title>
        <ScoreCard 
          current={this.state.score.current}
          high={this.state.score.high}
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
