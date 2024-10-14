import express from "express"
import mongoose from "mongoose"
import { ProductRoutes } from "./Routes/product.routes.js";
import cors from 'cors';  // Import the CORS package
import { AuthRouter } from "./Routes/auth.route.js";
import { cartRoutes } from "./Routes/cart.route.js";

const app = express();
app.use(express.json());
app.use(cors());

const dbName = 'productsDB';
mongoose.connect(`mongodb://localhost:27017/${dbName}`);

const db = mongoose.connection;
db.on('open', () => {
  console.log('Connection successful');
});

db.on('error', () => {
  console.log('Connection is not successful');
});

// Use product routes
ProductRoutes(app);
AuthRouter(app)
 cartRoutes(app)



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

