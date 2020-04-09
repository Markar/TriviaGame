import React from 'react';
import './App.scss';
import CardGrid from './CardGrid/CardGrid';
import cards from './cards.json';

function App() {

  const cardData = {
    "name": "Alduin",
    "rarity": "Legendary",
    "type": "Creature",
    "subtypes": ["Dragon"],
    "cost": 20,
    "power": 12,
    "health": 12,
    "set": {
      "id": "hos",
      "name": "Heroes of Skyrim",
      "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
    },
    "soulSummon": 1200,
    "soulTrap": 400,
    "text": "Costs 2 less for each Dragon in your discard pile. Summon: Destroy all other creatures. At the start of your turn, summon a random Dragon from your discard pile.",
    "attributes": [
      "Neutral"
    ],
    "keywords": [],
    "unique": true,
    "imageUrl": "https://images.elderscrollslegends.io/hos/alduin.png",
    "id": "1fd81123ab3eca0b29c4c19757045db9757b4f1a"
  };

  console.log('cardData in app', cardData);
  return (
    <div className="App">      
      <CardGrid cards={cards.cards} />
    </div>
  );
}

export default App;
