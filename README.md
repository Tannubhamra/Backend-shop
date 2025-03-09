# shop

# Backend Shop API

This is a simple **Node.js** and **Express.js** backend that provides a **JSON-based** API for managing products. The backend supports CRUD operations and generates sales data for visualization.


## Features

- **CRUD Endpoints:** Create, Read, Update, and Delete products.
- **CORS Enabled:** Allows requests from different origins.
- **JSON Parsing:** Automatically parses incoming JSON request bodies.
- **JSON-based Storage**: Uses a `products.json` file for data persistence.
- **CORS Enabled**: Allows cross-origin requests.
- **Sales Data for Charts**: Aggregates product sales data for visualization.
- **Lightweight and Fast**: No database required.


## Technologies Used

- **Node.js** - Server runtime
- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing
- **File System (fs)** - JSON file-based storage

## Prerequisites

- [Node.js](https://nodejs.org/en/) installed on your system.
- [Nodemon](https://www.npmjs.com/package/nodemon) (optional for development)
- npm (comes with Node.js).


## Installation

-  Clone this repository:
-  git clone https://github.com/Tannubhamra/Backend-shop.git

##  Navigate to the project directory
- cd Backend-shop

## Install dependencies
- npm install

## Usage
- Start the server: 
- nodemon index.js or node index.js

## API Endpoints

### **Product Endpoints**

| Method | Endpoint              | Description                 |
|--------|-----------------------|-----------------------------|
| GET    | `/api/products`       | Get all products           |
| GET    | `/api/product/:id`    | Get a single product by ID |
| POST   | `/api/product`        | Create a new product       |
| PUT    | `/api/product/:id`    | Update an existing product |
| DELETE | `/api/product/:id`    | Delete a product by ID     |

#### Example Product Object:
```json
{
  "id": 1,
  "name": "Product A",
  "description": "A sample product",
  "price": 100,
  "stock": 50,
  "sales": [10, 15, 20, 25, 30, 35],
  "salesCategory": "Electronics"
}
```

### **Chart Data Endpoint**

| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| GET    | `/api/chart-data`    | Get sales data for visualization |

#### Example Chart Data Response:
```json
{
  "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  "salesByCategory": {
    "Electronics": [10, 20, 30, 40, 50, 60],
    "Clothing": [5, 15, 25, 35, 45, 55]
  }
}
```

## Project Structure
```
Backend-shop/
│── products.json       # JSON file to store products
│── index.js            # Main server file
│── package.json        # Project dependencies and scripts
```


The API will be available at http://localhost:3000

## API Endpoints
- **GET:** /api/products
- Description: Retrieve a list of all products.
- Response: JSON array of product objects.

- **GET:**: /api/product/:id
    - Description: Retrieve a single product by its ID.
    - Response: JSON object of the product or a 404 error if not found.

- **POST:** /api/product
    - Description: Create a new product.
    - Request Body: JSON object containing
        - name (String)
        - description (String)
        - price (Number)
        - stock (Number)
        - sales (Array of Numbers)
        - salesCategory (String)
    - Response: JSON object of the newly created product with a 201 status code.

- **PUT:** /api/product/:id
   - Description: Update an existing product.
   - Request Body: JSON object with the updated values.
   - Response: JSON object of the updated product or a 404 error if not found.

- **DELETE:** /api/product/:id
    - Description: Delete a product by its ID.
    - Response: 204 No Content if deletion is successful or a 404 error if not found.

- **GET:** /api/chart-data
    - Description: Retrieve aggregated chart data for product sales.
    - Response: JSON object structured as follows:
    `
    {
        "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        "salesByCategory": {
            "laptop": [totalSalesForEachMonth],
            "smartphone": [totalSalesForEachMonth],
            "Unknown Category": [totalSalesForEachMonth]
        }
    }
    `
    - The endpoint aggregates the sales array from all products by their salesCategory

## File Structure

- **index.js:** Main server file containing API routes and server configuration.
- **products.json:** File used to store products data.
- **package.json:** Project metadata and dependencies.

## Customization
- **Storage:** This API uses a JSON file for simplicity. For production applications, consider using a database like MongoDB, PostgreSQL, etc.
- **Sales Aggregation:** Modify the /api/chart-data endpoint if your chart data requirements change.

## Contact
-  Tannu Priya, tannubhamra@gmail.com


