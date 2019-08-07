import React, { Component } from 'react';
import PuppyCard from "./components/PuppyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import puppies from "./puppies.json";


class App extends Component {

  state = {
    puppies: puppies,
    score: {
      current: 0,
      high: 0
    }
  };

  puppyClicked = id => {
    const puppies = this.state.puppies.filter(puppy => puppy.id !== id);
    this.setState({ puppies });
  };

  render () {
    return (
      <Wrapper>
        <Title>Play All Day</Title>
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
