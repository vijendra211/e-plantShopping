export default function AboutUs({ onHome = () => {}, onPlants = () => {}, onCart = () => {} }) {
  return (
    <div className="page">
      <nav className="navbar">
        <button className="brand" onClick={onHome}>✿ Paradise Nursery</button>
        <div className="nav-links">
          <button onClick={onHome}>Home</button>
          <button onClick={onPlants}>Plants</button>
          <button onClick={onCart}>Cart</button>
        </div>
      </nav>
      <main className="about-us-container">
        <p className="eyebrow">Our story</p>
        <h1>About Paradise Nursery</h1>
        <p>Paradise Nursery is a plant-shopping destination built around the belief that greenery can make everyday spaces feel more welcoming.</p>
        <p>Our mission is to help plant lovers and beginners discover indoor plants for different homes, routines, and levels of experience. We aim to make choosing and caring for plants feel simple, enjoyable, and accessible.</p>
        <p>From easy-care favourites to statement foliage, our collection celebrates the colour, texture, and calm that plants bring to a room.</p>
        <button className="primary-button" onClick={onPlants}>Explore plants →</button>
      </main>
    </div>
  );
}