import React from 'react';
import './card.styles.css';

type CardListProp = {
  person: { name: string; age: number; id: number };
};

export const Card: React.FC<CardListProp> = props => (
  <div className='card-container'>
    <img
      alt='person'
      src={`https://robohash.org/${props.person.id}?set=set2`}
    />
    <h1> {props.person.name}</h1>
  </div>
);
