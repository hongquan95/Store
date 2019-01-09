<?php

namespace App\Http\Transformers;

use App\Models\Order;
use League\Fractal\TransformerAbstract;
use App\Http\Transformers\ProductOrderTransformer;

class OrderDetailTransformer extends TransformerAbstract
{
    protected $defaultIncludes = [
        'products'
    ];

    public function transform(Order $order)
    {
        $result = \DB::table('products')
            ->join('order_details', 'products.id', '=', 'order_details.product_id')
            ->selectRaw('SUM(products.price * order_details.quantity) as total')
            ->where('order_details.order_id', $order->id)
            ->get();
        return [
            'id'          => $order->id,
            'customer_id' => $order->customer_id,
            'created_at'  => $order->created_at->toDateTimeString(),
            'total'       => $result->first()->total,
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
