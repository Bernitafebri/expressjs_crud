import express from "express";
import { 
    getAllProduct,
    createProduct,
    getAllProductById,
    updateProduct,
    deleteProduct
 } from "../controllers/Product.js";

const router = express.Router();

router.get('/', getAllProduct);
router.get('/:id', getAllProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);


export default router;