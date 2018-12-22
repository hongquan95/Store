<?php

namespace App\Http\Services;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateProductRequest;
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
     * @param Request $request
     *
     * @return array
     */
    public function getProductDetail(Request $request)
    {
        $id = $request->id;
        $product = Product::with('supplier')->find($id);
        return fractal($product, new ProductTransformer)->toArray();
    }

    /**
     * Update product detail
     *
     * @param UpdateProductRequest $request
     * @param int $id
     *
     * @return void
     */
    public function updateProductDetail(UpdateProductRequest $request, int $id)
    {
        $params = $request->all();
        \DB::beginTransaction();
        try {
            if ($this->validateSupplier($id)) {
                $data = $this->handlePrepareParams($params);
                Product::where('id', $id)->update($data);
                \DB::commit();
            } else {
                throw new \Exception(__('auth.unauthorized'));
            }
        } catch (\Exception $e) {
            \DB::rollback();
            \Log::error($e);
            throw new \Exception(__('product.update_fail'));
        }
    }

    /**
     * Check supplier validate
     *
     * @param int
     *
     * @return bool
     */
    public function validateSupplier(int $id)
    {
        return isSupplier() && Product::find($id)->supplier_id == currentLoginableId() ? true : false;
    }

    /**
     * Handle params.
     *
     * @param array $params
     *
     * @return array
     */
    public function handlePrepareParams(array $params)
    {
        return [
            'name' => $params['name'],
            'price' =>$params['price'],
            'rating' => $params['rating'],
            'description' => $params['description'],
        ];
    }
}
