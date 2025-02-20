const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());  // middleware to parse JSON
app.use(cors())

const fs = require("fs");
const DATA_FILE = path.join(__dirname, "./products.json");

const loadProducts = () => {
    if (!fs.existsSync(DATA_FILE)) {
        return { products: [] }; // Return an empty structure if file does not exist
    }
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  };

app.get('/api/products', (req, res) => {
    const products = loadProducts().products;
    res.json(products);
})

app.get('/api/product/:id', (req, res) => {
    const products = loadProducts().products;
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if(!product){
        return res.status(404).json({message: 'Product not found'})
    }
    res.json(product);
})
app.delete('/api/product/:id', (req, res) => {
    const products = loadProducts().products;
    const productIndex = products.findIndex((p) => p.id === parseInt(req.params.id));
    if(productIndex === -1 ) {
        return res.status(404).json({ message: 'Product not found! '});
    }
    products.splice(productIndex, 1);
    res.status(204).send();
})

// Function to save products to JSON file
function saveProducts(products) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ products }, null, 2));
}

app.post('/api/product', (req, res) => {
    const products = loadProducts().products;
    const { name, description, price,  stock, sales } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        description,
        price,
        stock,
        sales
    };
    products.push(newProduct);
    saveProducts(products); 
    res.status(201).json(newProduct);
});

app.put('/api/product/:id', (req, res) => {
    const products = loadProducts().products;
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if(!product) return res.status(404).json({ message: 'Product not found!'});
    const { name, description, price, stock, sales } = req.body;

    product.name = name ||  product.name;
    product.description =  description || product.description;
    product.price = price || product.price;
    product.stock = stock || product.stock;
    if (Array.isArray(sales)) {
        product.sales = sales;
    }
    saveProducts(products);
    res.json(product);
    
});

app.get("/api/chart-data", (req, res) => {
    const chartData = loadProducts().chartData;
    res.json(chartData);
  });

// start the server
app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
})
// nodemon index.js