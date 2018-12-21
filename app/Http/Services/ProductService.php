<?php

namespace App\Http\Services;

use App\Models\Product;
use App\Http\Transformer\ProductTransformer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class ProductService
{
    public function getProducts()
    {
        $params = request()->all();
        $per_page = $params['per_page'] ?? config('define.product.per_page');
        $products =  Product::with('supplier')->paginate($per_page);
        return collect(fractal($products, new ProductTransformer));
    }

}
