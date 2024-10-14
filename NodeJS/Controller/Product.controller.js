import Product from "../Model/product.model.js"

// fetch data from api control function
export function fetchProducts(req, res){
    Product.find().then(data => {
        if(!data){
            return res.status(400).send("someting wnent wrong")
        }
        res.send(data)
    }).catch(err => res.status(500).json({message : "internal server error" || err.message}))
}

export async function individualProduts(req, res) {
    const { id } = req.params; // "id" is a string, which can be a number or an ObjectId
  
    try {
      // If your "id" field is a number, use "findOne" and check by the custom "id" field
      const product = await Product.findOne({ id: parseInt(id) });  // Assuming "id" is a number
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  }