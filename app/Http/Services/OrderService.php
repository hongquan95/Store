<?php

namespace App\Http\Services;

use App\Models\Order;
use App\Models\OrderDetail;
use App\Http\Requests\CreateOrderRequest;


class OrderService
{
    /**
     * Customer create order
     *
     * @param CreateOrderRequest $request request
     *
     * @return Order
     */
    public function create(CreateOrderRequest $request)
    {
        $params = $request->params;
        $customerId = currentLoginableId();
        \DB::beginTransaction();
        try {
            $order = Order::create([
                'customer_id' => $customerId,
            ]);
            foreach ($params as $productId => $quantity)
            {
                OrderDetail::create([
                    'product_id' => $productId,
                    'quantity' => $quantity,
                    'order_id' => $order->id,
                ]);
            }
            \DB::commit();
            return $order;
        } catch (\Exception $e)
        {
            \Log::error($e);
            \DB::rollback();
            return;
        }
    }
}
