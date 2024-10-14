import mongoose from 'mongoose';

// Define the schema for nested objects like dimensions, reviews, and meta
const dimensionsSchema = new mongoose.Schema({
  width: Number,
  height: Number,
  depth: Number
});

const reviewSchema = new mongoose.Schema({
  rating: Number,
  comment: String,
  date: Date,
  reviewerName: String,
  reviewerEmail: String
});

const metaSchema = new mongoose.Schema({
  createdAt: Date,
  updatedAt: Date,
  barcode: String,
  qrCode: String
});

// Main product schema
const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  category: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  tags: [String], // Array of strings
  brand: String,
  sku: String,
  weight: Number,
  dimensions: dimensionsSchema, // Use the dimensions schema here
  warrantyInformation: String,
  shippingInformation: String,
  availabilityStatus: String,
  reviews: [reviewSchema], // Array of review objects
  returnPolicy: String,
  minimumOrderQuantity: Number,
  meta: metaSchema, // Meta information
  images: [String], // Array of image URLs
  thumbnail: String
});

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

export default Product;
