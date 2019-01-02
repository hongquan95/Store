<?php

namespace App\Http\Services;

use App\Models\Product;
use App\Http\Requests\GetCartRequest;
use App\Http\Transformers\CartTransformer;

class CartService
{
    /**
     * Get cart detail.
     *
     * @param GetCartRequest $request request
     *
     * @return array
     */
    public function getDetail(GetCartRequest $request)
    {
        $params = $request->all();
        $ids = array_keys($params['params']);
        $quantitys = array_values($params['params']);
        $products = Product::with('supplier')->find($ids);
        return collect(fractal($products, new CartTransformer))->groupBy('supplier.name')->toArray();
    }
}
