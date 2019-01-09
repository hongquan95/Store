<?php

namespace App\Http\Transformers;

use App\Models\Product;
use League\Fractal\TransformerAbstract;

class ProductOrderTransformer extends TransformerAbstract
{
    public function transform(Product $product)
    {
        return [
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => $product->pivot->quantity,
        ];
    }
}
