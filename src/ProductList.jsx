import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItem } from './features/CartSlice.jsx';
import { plantCategories } from './data/plants.js';

const money = (amount) => `₹${amount.toLocaleString('en-IN')}`;

export function Navbar({ onHome, onPlants, onCart }) {
  const cart = useSelector((state) => state.cart.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className="navbar">
      <button className="brand" onClick={onHome}>✿ Paradise Nursery</button>
      <div className="nav-links">
        <button onClick={onHome}>Home</button>
        <button onClick={onPlants}>Plants</button>
        <button className="cart-nav" onClick={onCart}>🛒 Cart <span className="cart-count">{totalItems}</span></button>
      </div>
    </nav>
  );
}

export default function ProductList({ onHome = () => {}, onPlants = () => {}, onCart = () => {}, onAbout = () => {} }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [addedToCart, setAddedToCart] = useState({});
  const [search, setSearch] = useState('');

  const cartNames = new Set(cart.map((item) => item.name));
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((previous) => ({ ...previous, [plant.name]: true }));
  };

  return (
    <div className="page">
      <Navbar onHome={onHome} onPlants={onPlants} onCart={onCart} />
      <main className="catalog-container">
        <section className="catalog-heading">
          <div><p className="eyebrow">The Paradise collection</p><h1>Find your <em>green.</em></h1><p>Choose a leafy companion for every corner of your home.</p></div>
          <label className="search-input">⌕ <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search plants..." /></label>
        </section>
        {plantCategories.map((category) => {
          const filteredPlants = category.plants.filter((plant) => `${plant.name} ${category.name}`.toLowerCase().includes(search.toLowerCase()));
          if (!filteredPlants.length) return null;
          return (
            <section className="plant-category" key={category.name}>
              <div className="category-heading"><h2>{category.name}</h2><span>{filteredPlants.length} plants</span></div>
              <div className="plant-grid">
                {filteredPlants.map((plant) => (
                  <article className="plant-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} loading="lazy" />
                    <div className="plant-card-body">
                      <h3>{plant.name}</h3><p>{plant.description}</p>
                      <div className="plant-card-footer"><strong>{money(plant.price)}</strong>
                        <button
                          className="add-button"
                          onClick={() => handleAddToCart(plant)}
                          disabled={Boolean(addedToCart[plant.name]) || cartNames.has(plant.name)}
                        >
                          {(addedToCart[plant.name] || cartNames.has(plant.name)) ? 'Added ✓' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
        <button className="about-inline" onClick={onAbout}>About Paradise Nursery</button>
      </main>
    </div>
  );
}