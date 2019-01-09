<?php

namespace App\Http\Services;

use App\Models\Order;
use App\Models\OrderDetail;
use App\Http\Requests\CreateOrderRequest;
use App\Http\Transformers\OrderDetailTransformer;
use App\Http\Transformers\CustomerOrderListTransformer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;


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

    /**
     * Get list orders customer.
     *
     * @param int $id id
     */
    public function getCustomerOrderList()
    {
        $per_page = $params['per_page'] ?? config('define.order.per_page');
        $orderId = auth('api')->user()->id;
        $orders = Order::with(['customer', 'products'])->where('customer_id', $orderId)->paginate($per_page);
        return fractal($orders, new CustomerOrderListTransformer)->toArray();
    }

    /**
     * Get order detail.
     *
     * @param int $id id
     */
    public function getOrderDetail(int $id)
    {
        $order = Order::with(['customer', 'products'])->find($id);
        return fractal($order, new OrderDetailTransformer)->toArray();
    }
}
