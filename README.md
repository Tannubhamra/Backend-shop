# shop

# Backend Shop API

This is a Node.js/Express API for a simple shop application. The API manages a collection of products stored in a JSON file and provides endpoints for CRUD operations as well as generating chart data based on product sales.

## Features

- **CRUD Endpoints:** Create, Read, Update, and Delete products.
- **Chart Data Endpoint:** Aggregate sales data by category for charting.
- **File-Based Storage:** Products are stored in a JSON file (`products.json`).
- **CORS Enabled:** Allows requests from different origins.
- **JSON Parsing:** Automatically parses incoming JSON request bodies.

## Prerequisites

- [Node.js](https://nodejs.org/en/) installed on your system.
- npm (comes with Node.js).

## Installation

   1. Clone this repository:
   ```bash
   git clone https://github.com/Tannubhamra/Backend-shop.git

##  Navigate to the project directory
- cd Backend-shop

## Install dependencies
- npm install

## Usage
- Start the server: 
- nodemon index.js or node index.js

The API will be available at http://localhost:3000

## API Endpoints
- GET /api/products
    - Description: Retrieve a list of all products.
    - Response: JSON array of product objects.

- GET /api/product/:id
    - Description: Retrieve a single product by its ID.
    - Response: JSON object of the product or a 404 error if not found.

- POST /api/product
    - Description: Create a new product.
    - Request Body: JSON object containing
        - name (String)
        - description (String)
        - price (Number)
        - stock (Number)
        - sales (Array of Numbers)
        - salesCategory (String)
    - Response: JSON object of the newly created product with a 201 status code.

- PUT /api/product/:id
   - Description: Update an existing product.
   - Request Body: JSON object with the updated values.
   - Response: JSON object of the updated product or a 404 error if not found.

- DELETE /api/product/:id
    - Description: Delete a product by its ID.
    - Response: 204 No Content if deletion is successful or a 404 error if not found.

- GET /api/chart-data
    - Description: Retrieve aggregated chart data for product sales.
    - Response: JSON object structured as follows:
        {
        "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        "salesByCategory": {
            "laptop": [totalSalesForEachMonth],
            "smartphone": [totalSalesForEachMonth],
            "Unknown Category": [totalSalesForEachMonth]
        }
        }
    - The endpoint aggregates the sales array from all products by their salesCategory

## File Structure
    - index.js: Main server file containing API routes and server configuration.
    - products.json: File used to store products data.
    - package.json: Project metadata and dependencies.

## Customization
    - Storage: This API uses a JSON file for simplicity. For production applications, consider using a database like MongoDB, PostgreSQL, etc.
    - Sales Aggregation: Modify the /api/chart-data endpoint if your chart data requirements change.

