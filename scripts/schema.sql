CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  seller_id INTEGER REFERENCES users(id),
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50),
  description TEXT,
  price DECIMAL(10, 2),
  discount DECIMAL(5, 2)
);

CREATE TABLE IF NOT EXISTS cart (
  id SERIAL PRIMARY KEY,
  buyer_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  UNIQUE(buyer_id, product_id)
);
