<?php

namespace App\Http\Transformers;

use App\Models\Product;
use League\Fractal\TransformerAbstract;
use App\Http\Transformers\SupplierTransformer;

class CartTransformer extends TransformerAbstract
{
    /**
     * Include resources without needing it to be requested.
     *
     * @var array
     */
    protected $defaultIncludes = [
        'supplier',
    ];

    public function transform(Product $product)
    {
        return  [
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price
        ];
    }

    /**
     * Include supplier
     *
     * @param Product $product product
     *
     * @return League\Fractal\Resource\Item
     */
    public function includeSupplier(Product $product)
    {
        return $this->item($product->supplier, new SupplierTransformer);
    }
}
