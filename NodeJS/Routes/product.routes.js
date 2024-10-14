import { verifyToken } from "../Controller/auth.controller.js"
import { fetchProducts, individualProduts,  } from "../Controller/Product.controller.js"

export function ProductRoutes(app){
    app.get("/api/products", verifyToken, fetchProducts)
    app.get("/api/products/:id", individualProduts)

}

