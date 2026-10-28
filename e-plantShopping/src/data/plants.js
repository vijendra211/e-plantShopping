const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

export const plantCategories = [
  {
    name: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 299, image: photo('photo-1593482892290-f54927ae2b75'), description: 'Upright, architectural leaves and easy care.' },
      { id: 2, name: 'Peace Lily', price: 399, image: photo('photo-1593691509543-c55fb32e5cee'), description: 'Elegant foliage for a calm corner.' },
      { id: 3, name: 'Spider Plant', price: 249, image: photo('photo-1485955900006-10f4d324d411'), description: 'A cheerful, adaptable classic.' },
      { id: 4, name: 'Rubber Plant', price: 549, image: photo('photo-1501004318641-b39e6451bec6'), description: 'Glossy leaves with a bold silhouette.' },
      { id: 5, name: 'Areca Palm', price: 699, image: photo('photo-1497250681960-ef046c08a56e'), description: 'Feathery tropical foliage.' },
      { id: 6, name: 'Boston Fern', price: 329, image: photo('photo-1616763355548-1b606f439f86'), description: 'Soft fronds with lush texture.' }
    ]
  },
  {
    name: 'Low Maintenance Plants',
    plants: [
      { id: 7, name: 'ZZ Plant', price: 399, image: photo('photo-1509423350716-97f9360b4e09'), description: 'A resilient favourite with shiny leaves.' },
      { id: 8, name: 'Golden Pothos', price: 249, image: photo('photo-1616763355548-1b606f439f86'), description: 'Trailing vines for shelves and planters.' },
      { id: 9, name: 'Aloe Vera', price: 199, image: photo('photo-1509423350716-97f9360b4e09'), description: 'A sculptural succulent for bright spots.' },
      { id: 10, name: 'Jade Plant', price: 279, image: photo('photo-1485955900006-10f4d324d411'), description: 'Fleshy leaves and a compact form.' },
      { id: 11, name: 'Chinese Money Plant', price: 349, image: photo('photo-1497250681960-ef046c08a56e'), description: 'Round leaves with a playful shape.' },
      { id: 12, name: 'Philodendron', price: 299, image: photo('photo-1616763355548-1b606f439f86'), description: 'Heart-shaped foliage for everyday spaces.' }
    ]
  },
  {
    name: 'Decorative Plants',
    plants: [
      { id: 13, name: 'Monstera Deliciosa', price: 649, image: photo('photo-1614594975525-e45190c55d0b'), description: 'Iconic split leaves with tropical character.' },
      { id: 14, name: 'Bird of Paradise', price: 899, image: photo('photo-1597055181300-a8e1e2a0c6d5'), description: 'Large leaves that make a statement.' },
      { id: 15, name: 'Anthurium', price: 499, image: photo('photo-1593691509543-c55fb32e5cee'), description: 'A colourful accent for your room.' },
      { id: 16, name: 'Calathea', price: 459, image: photo('photo-1501004318641-b39e6451bec6'), description: 'Patterned leaves full of character.' },
      { id: 17, name: 'Dracaena', price: 429, image: photo('photo-1593482892290-f54927ae2b75'), description: 'A tall, clean-lined foliage plant.' },
      { id: 18, name: 'Fiddle Leaf Fig', price: 799, image: photo('photo-1501004318641-b39e6451bec6'), description: 'Broad leaves for a bright interior.' }
    ]
  }
];