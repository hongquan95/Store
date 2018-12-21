<?php

namespace App\Http\Services;

use App\Models\Product;
use App\Http\Transformer\ProductTransformer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class ProductService
{
    /**
     * Get list products
     * @return array
     */
    public function getListProducts()
    {
        $params = request()->all();
        $per_page = $params['per_page'] ?? config('define.product.per_page');
        $products =  Product::with('supplier')->paginate($per_page);
        return fractal($products, new ProductTransformer)->toArray();
    }

    /**
     * Get product detail
     *
     * @return array
     */
    public function getProductDetail($request)
    {
        $id = $request->id;
        $product = Product::with('supplier')->find($id);
        return fractal($product, new ProductTransformer)->toArray();
    }
}
