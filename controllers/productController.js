import * as productService from '../services/productService.js'
import { successResponse ,errorResponse } from '../utils/apiResponse.js'

export const getAllProducts = async (req, res) => {
    try{
        const products = await productService.getAllProducts()
        return res.status(200).json(successResponse(products,'Products retrieved successfully'))
    } catch(error){
        return res.status(500).json(errorResponse(error.message))
    }
}

export const getProductById = async (req, res) => {
    try{
        const {id} = req.params
        const product = await productService.getProductById(id)
        return res.status(200).json(successResponse(product,'Product retrieved successfully'))
    } catch(error){
        return res.status(500).json(errorResponse(error.message))
    }
}

export const createProduct = async (req, res) => {
    try{
        const {name,price} = req.body
        const product = await productService.createProduct(name,price)
        return res.status(201).json(successResponse(product,'Products created successfully'))
    } catch(error){
        return res.status(500).json(errorResponse(error.message))   
    }
}

export const updateProduct = async (req, res) => {
    try{
        const {id} = req.params
        const {name,price} = req.body
        const product = await productService.updateProduct(id,name,price)
        return res.status(200).json(successResponse(product,'Product updated successfully'))
    } catch(error){
        return res.status(500).json(errorResponse(error.message))
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params
        const product = await productService.deleteProduct(id)
        return res.status(200).json(successResponse(product,'Product deleted successfully'))
    } catch(error){
        return res.status(500).json(errorResponse(error.message))
    }
}

// ค้นหาข้อมูลสินค้าตามชื่อ
export const searchProductByName = async (req, res) => {
    try {
      const { name } = req.query
      const products = await productService.searchProduct(name)
      return res.status(200).json(successResponse(products, 'Products retrieved successfully'))
    } catch (error) {
      return res.status(500).json(errorResponse(error.message))
    }
  }



