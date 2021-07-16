import './card-list.css';
import {Card} from '../card/card';
import React from 'react';

export const CardList = (props) => {
  return (
          <div className="card-list">
            {props.monster.map((user) => (
                    <Card key={user.id} monster={user}/>
            ))}
          </div>
  );
};
