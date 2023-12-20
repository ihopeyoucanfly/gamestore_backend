import { ProductTypes } from "../models/types";

const ProductModel = require("../models/product-model");
const ApiError = require("../exceptions/api-error");

class ProductsService {
    async getHits(): Promise<ProductTypes[]> {
        const hits: ProductTypes[] = await ProductModel.find({ hit: { $ne: false } })
        if (!hits) {
            throw ApiError.BadRequest(
                'hits не найдены!'
            )
        }
        return hits;
    }
}

export default new ProductsService();