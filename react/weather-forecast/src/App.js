import React from 'react';
import UserItem from './UserItem';

function App() {

  const users = [
    {
      id: 1,
      city: "Andover",
      primaryPostalCode: "02108",
      country: {
      abbrev: "US",
      nameOfCountry :"United State Of America"
      },
      administrativeArea: {
      abbrev : "MA",
      nameOfState : "Massachusetts",
      type: "State"
      }

    },

    {
      id: 2,
      city: "Southampton",
      primaryPostalCode: "11968",
      country: {
      abbrev: "US",
      nameOfCountry :"United State Of America"
      },
      administrativeArea: {
      abbrev : "NY",
      nameOfState : "New York",
      type: "State"
      }
    }

  ];



   const handleUserChange = (event) => {
    console.log(event.target.value);
  };

    
  return (
    <div className="App">
      <h1>Weather</h1>
      <label htmlFor="user-name">City : </label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        onChange={handleUserChange}
      />

      <hr />

      <UserItem users={users} />
    </div>
  );
}


export default App;
