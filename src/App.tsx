import React from 'react';
import { CardList } from './components/card-list/card.list';
import './App.css';
import { SearchBox } from './components/search-box/search-box';

type AppState = {
  people: { name: string; age: number; id: number }[];
  searchField: string;
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
    searchField: '',
  };

  render() {
    const { people, searchField } = this.state;
    const filteredPeople = people.filter(person =>
      person.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1> People </h1>
        <SearchBox
          placeholder='search person'
          handleChange={(e: { target: { value: any } }) => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList people={filteredPeople} />
      </div>
    );
  }
}

export default App;
