<?php

namespace App\Http\Transformers;

use App\Models\Product;
use League\Fractal\TransformerAbstract;
use App\Http\Transformers\CategoryTransformer;
use App\Http\Transformers\SupplierTransformer;

class ProductTransformer extends TransformerAbstract
{
    /**
     * Include resources without needing it to be requested.
     *
     * @var array
     */
    protected $defaultIncludes = [
        'supplier',
        'categories'
    ];

    public function transform(Product $product)
    {
        return  [
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'rating' => $product->rating,
            'description' => $product->description,
            'updated_at' => $product->updated_at->toDateTimeString(),
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

    /**
     * Include categories
     *
     * @param Product $product product
     *
     * @return League\Fractal\Resource\Collection
     */
    public function includeCategories(Product $product)
    {
        return $this->collection($product->categories, new CategoryTransformer);
    }

}
