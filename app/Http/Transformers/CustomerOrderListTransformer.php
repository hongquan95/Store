<?php

namespace App\Http\Transformers;

use App\Models\Order;
use League\Fractal\TransformerAbstract;
use App\Http\Transformers\ProductOrderTransformer;

class CustomerOrderListTransformer extends TransformerAbstract
{
    protected $defaultIncludes = [
        'products'
    ];

    public function transform(Order $order)
    {
        return [
            'id'          => $order->id,
            'customer_id' => $order->customer_id,
            'created_at'  => $order->created_at->toDateTimeString(),
            'status'      => $order->status,
        ];
    }

    /**
     * Include supplier
     *
     * @param Order $order order
     *
     * @return League\Fractal\Resource\Collection
     */
    public function includeProducts(Order $order)
    {
        return $this->collection($order->products, new ProductOrderTransformer);
    }
}
