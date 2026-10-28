import { useState } from 'react';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './components/AboutUs.jsx';

export default function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);

  const goHome = () => {
    setShowProductList(false);
    setShowShoppingCart(false);
    setShowAboutUs(false);
  };
  const goPlants = () => {
    setShowProductList(true);
    setShowShoppingCart(false);
    setShowAboutUs(false);
  };
  const goCart = () => {
    setShowProductList(false);
    setShowShoppingCart(true);
    setShowAboutUs(false);
  };
  const goAbout = () => {
    setShowProductList(false);
    setShowShoppingCart(false);
    setShowAboutUs(true);
  };

  if (showShoppingCart) {
    return <CartItem onHome={goHome} onPlants={goPlants} onCart={goCart} />;
  }
  if (showAboutUs) {
    return <AboutUs onHome={goHome} onPlants={goPlants} onCart={goCart} />;
  }
  if (showProductList) {
    return <ProductList onHome={goHome} onPlants={goPlants} onCart={goCart} onAbout={goAbout} />;
  }

  return (
    <main className="landing-page">
      <div className="landing-shade" />
      <section className="landing-copy">
        <p className="eyebrow">A greener home starts here</p>
        <h1>Welcome to <em>Paradise Nursery</em></h1>
        <p className="landing-description">Discover plants that bring calm, colour, and a little more life to your space.</p>
        <button className="primary-button" onClick={() => setShowProductList(true)}>Get Started <span aria-hidden="true">→</span></button>
        <button className="landing-about" onClick={goAbout}>Learn about us</button>
      </section>
    </main>
  );
}