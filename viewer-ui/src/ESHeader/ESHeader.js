import React from 'react';
import './ESHeader.scss';
import {Navbar, Button, Form, FormControl} from 'react-bootstrap';
import Fuse from 'fuse.js';

function ESHeader(props) {    

  const options = {
    isCaseSensitive: false,
    findAllMatches: false,
    includeMatches: false,
    includeScore: false,
    useExtendedSearch: false,
    minMatchCharLength: 1,
    shouldSort: true,
    threshold: 0.5,
    location: 0,
    distance: 100,
    keys: [      
      "name"
    ]
  };

  const list = {
    "cards":
      [
        { "name": "Raise Dead", "rarity": "Legendary", "type": "Action", "cost": 2, "set": { "id": "cs", "name": "Core Set", "_self": "https://api.elderscrollslegends.io/v1/sets/cs" }, "collectible": false, "text": "Summon a random creature from each discard pile.", "attributes": ["Endurance"], "unique": false, "imageUrl": "https://images.elderscrollslegends.io/cs/raise_dead.png", "id": "ce7be2e72d6b06a52e50bed01952801ca4ecfade" },
        { "name": "Raise Living", "rarity": "Legendary", "type": "Action", "cost": 2, "set": { "id": "cs", "name": "Core Set", "_self": "https://api.elderscrollslegends.io/v1/sets/cs" }, "collectible": false, "text": "Summon a random creature from each discard pile.", "attributes": ["Endurance"], "unique": false, "imageUrl": "https://images.elderscrollslegends.io/cs/raise_dead.png", "id": "ce7be2e72d6b06a52e50bed01952801ca4ecfade" },
        { "name": "Reachman Shaman", "rarity": "Common", "type": "Creature", "subtypes": ["Reachman"], "cost": 2, "power": 2, "health": 2, "set": { "id": "cs", "name": "Core Set", "_self": "https://api.elderscrollslegends.io/v1/sets/cs" }, "collectible": true, "soulSummon": 50, "soulTrap": 5, "text": "At the start of your turn, give another random friendly creature +1/+1.", "attributes": ["Neutral"], "unique": false, "imageUrl": "https://images.elderscrollslegends.io/cs/reachman_shaman.png", "id": "15d9c10821d4033fb045ed2cb4599ac76288ac67" },
        { "name": "Reachwoman Shaman", "rarity": "Common", "type": "Creature", "subtypes": ["Reachman"], "cost": 2, "power": 2, "health": 2, "set": { "id": "cs", "name": "Core Set", "_self": "https://api.elderscrollslegends.io/v1/sets/cs" }, "collectible": true, "soulSummon": 50, "soulTrap": 5, "text": "At the start of your turn, give another random friendly creature +1/+1.", "attributes": ["Neutral"], "unique": false, "imageUrl": "https://images.elderscrollslegends.io/cs/reachman_shaman.png", "id": "15d9c10821d4033fb045ed2cb4599ac76288ac67" },
        { "name": "Reachperson Shaman", "rarity": "Common", "type": "Creature", "subtypes": ["Reachman"], "cost": 2, "power": 2, "health": 2, "set": { "id": "cs", "name": "Core Set", "_self": "https://api.elderscrollslegends.io/v1/sets/cs" }, "collectible": true, "soulSummon": 50, "soulTrap": 5, "text": "At the start of your turn, give another random friendly creature +1/+1.", "attributes": ["Neutral"], "unique": false, "imageUrl": "https://images.elderscrollslegends.io/cs/reachman_shaman.png", "id": "15d9c10821d4033fb045ed2cb4599ac76288ac67" },
        { "name": "Reacher Shaman", "rarity": "Common", "type": "Creature", "subtypes": ["Reachman"], "cost": 2, "power": 2, "health": 2, "set": { "id": "cs", "name": "Core Set", "_self": "https://api.elderscrollslegends.io/v1/sets/cs" }, "collectible": true, "soulSummon": 50, "soulTrap": 5, "text": "At the start of your turn, give another random friendly creature +1/+1.", "attributes": ["Neutral"], "unique": false, "imageUrl": "https://images.elderscrollslegends.io/cs/reachman_shaman.png", "id": "15d9c10821d4033fb045ed2cb4599ac76288ac67" }
      ]
  };
  
  const fuse = new Fuse(list.cards, options);

  const pattern = "raise";
  console.log('list', list.cards);
  console.log('fuse search: ', fuse.search(pattern));

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Elder Scrolls Card Viewer </Navbar.Brand>                      
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>        
      </Navbar>
    </>
  );
}

export default ESHeader;