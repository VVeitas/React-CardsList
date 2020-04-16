import React from 'react';
import { CardList } from './components/card-list/card.list';

type AppState = {
  people: { name: string; age: number; id: number }[];
};

export class App extends React.Component {
  state: AppState = {
    people: [
      { name: 'Josh', age: 4, id: 0 },
      { name: 'Marry', age: 25, id: 1 },
      { name: 'John', age: 14, id: 2 },
      { name: 'Kobe', age: 66, id: 3 },
      { name: 'Luke', age: 33, id: 4 },
      { name: 'Quentin', age: 33, id: 5 },
      { name: 'David', age: 33, id: 6 },
      { name: 'Margaret', age: 33, id: 7 },
    ],
  };

  render() {
    return (
      <div className='App'>
        <CardList people={this.state.people}></CardList>
      </div>
    );
  }
}

export default App;
