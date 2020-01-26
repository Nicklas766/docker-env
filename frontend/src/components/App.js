import React, { useState, useEffect } from 'react';
import API from '../utils/API'
import './App.css';

const App = () => {
  const [coffeeProducts, setCoffeeProducts] = useState([]);
  const [nameText, setNameText] = useState('');

  const fetchCoffees = () => {
    API.getData('/fetch')
      .then((res) => setCoffeeProducts(res.data))
      .catch((err) => console.log(err));
  }

  const createCoffee = (event) => {
    event.preventDefault();

    API.postData('/create', { name: nameText })
      .then(() => {
        fetchCoffees();
        setNameText('');
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => fetchCoffees(), []);

  return (
    <div className="App">
      <h1>Coffee inventory ☕️</h1>

      <h2>All coffee products:</h2>
      <ul>
        {coffeeProducts.map((coffee, index) => <li key={index}>
          {coffee.name}
        </li>)}
      </ul>

      <form onSubmit={(event) => createCoffee(event)}>
        <input placeholder="name here" value={nameText} onChange={(event) => setNameText(event.target.value)} />
        <input type="submit" value="Add coffee to database" />
      </form>
    </div>
  );
}

export default App;
