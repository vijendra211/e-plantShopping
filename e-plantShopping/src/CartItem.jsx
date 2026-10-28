import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from './ProductList.jsx';
import { removeItem, updateQuantity } from './features/CartSlice.jsx';

const money = (amount) => `₹${amount.toLocaleString('en-IN')}`;

export default function CartItem({ onHome = () => {}, onPlants = () => {}, onCart = () => {} }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };
  const handleDecrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="page">
      <Navbar onHome={onHome} onPlants={onPlants} onCart={onCart} />
      <main className="cart-container">
        <div className="cart-title-row"><div><p className="eyebrow">Your selection</p><h1>Shopping <em>Cart</em></h1></div><button className="secondary-button" onClick={onPlants}>← Continue Shopping</button></div>
        {cart.length === 0 ? (
          <section className="empty-cart"><div className="empty-leaf">♧</div><h2>Your cart is empty</h2><p>Find a plant to bring a little more green into your home.</p><button className="primary-button" onClick={onPlants}>Browse Plants →</button></section>
        ) : (
          <div className="cart-layout">
            <section className="cart-list">
              {cart.map((item) => (
                <article className="cart-item" key={item.name}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info"><h2>{item.name}</h2><p className="unit-price">Unit price: {money(item.price)}</p><button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button></div>
                  <div className="quantity-controls">
                    <button aria-label={`Decrease ${item.name}`} onClick={() => handleDecrement(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button aria-label={`Increase ${item.name}`} onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <strong className="item-total">{money(item.price * item.quantity)}</strong>
                </article>
              ))}
            </section>
            <aside className="cart-summary"><p className="eyebrow">Order summary</p><h2>Total cost</h2><div className="summary-total"><span>Total ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span><strong>{money(totalAmount)}</strong></div><button className="primary-button checkout-button" onClick={() => window.alert('Checkout coming soon!')}>Checkout</button><p className="checkout-note">Checkout is a demo feature and does not process payments.</p></aside>
          </div>
        )}
      </main>
    </div>
  );
}