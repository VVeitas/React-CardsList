import React from 'react';
import { Card } from '../card/card.component';
import './card.list.styles.css';

type CardListProps = {
  people: { name: string; age: number; id: number }[];
};

export const CardList: React.FC<CardListProps> = props => {
  return (
    <div className='card-list'>
      {props.people.map(person => (
        <Card key={person.id} person={person} />
      ))}
    </div>
  );
};
