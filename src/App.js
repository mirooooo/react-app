import React, {
  Component
} from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';


class App extends Component {

  state = {
    counters: [{
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };

  constructor(props) {
    super(props);
    console.log('App - Constructor');
  }



  //   Aways use Arrow Function to Bind Event Handlers
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter
    };
    counters[index].value++;
    this.setState({
      counters
    });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter
    };
    counters[index].value--;
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  handleDelete = counterId => {
    //   filtering counters so when Event is clicked to showing all the conterId exept the one is clicked//Deleting
    const counters = this.state.counters.filter(c => c.id !== counterId);
    // calling this.setState and overwriting this.state.counters with our const counters.
    this.setState({
      counters: counters
    });
  };

  render() {
    return ( <
      React.Fragment >
      <
      NavBar totalCounters = {
        this.state.counters.filter(c => c.value > 0).length
      } > < /NavBar> <
      main className = 'container' >
      <
      Counters counters = {
        this.state.counters
      }
      onReset = {
        this.handleReset
      }
      onIncrement = {
        this.handleIncrement
      }
      onDecrement = {
        this.handleDecrement
      }

      onDelete = {
        this.handleDelete
      }
      /> < /
      main >
      <
      /React.Fragment>
    );
  }
}

export default App;