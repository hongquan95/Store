<?php

namespace App\Http\Services;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\ProductCategory;
use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Transformers\ProductTransformer;
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
        $products =  Product::with(['supplier', 'categories'])->paginate($per_page);
        return fractal($products, new ProductTransformer)->toArray();
    }

    /**
     * Supplier create product
     *
     * @param CreateProductRequest $request
     *
     * @return array
     *
     */
    public function createProduct(CreateProductRequest $request)
    {
        $params = $request->all();
        \DB::beginTransaction();
        try {
            $data = $this->handlePrepareParams($params);
            $data['supplier_id'] = currentLoginableId();
            $product = Product::create($data);
            $this->insertListCategory($product->id, $data['category_ids']);
            \DB::commit();
            return fractal($product, new ProductTransformer)->toArray();
        } catch (\Exception $e) {
            \DB::rollback();
            \Log::error($e);
            throw new \Exception(__('product.created_fail'));
        }

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
            $data = $this->handlePrepareParams($params);
            $product = Product::find($id);
            $this->removeListcateogry($id)->insertListCategory($id, $data['category_ids']);
            $product->update($data);
            \DB::commit();
        } catch (\Exception $e) {
            \DB::rollback();
            \Log::error($e);
            throw new \Exception(__('product.update_fail'));
        }
    }

    /**
     * Remove product
     *
     * @param int $id
     *
     * @return string
     */
    public function removeProduct(int $id)
    {
        \DB::beginTransaction();
        try {
            if (!$this->validateSupplier($id)) {
                return;
            }
            Product::where('id', $id)->delete();
            \DB::commit();
            return __('product.remove_success');
        } catch (\Exception $e) {
            \DB::rollback();
            \Log::error($e);
            return;
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
            'description' => $params['description'],
            'category_ids' => array_unique($params['category_ids']),
        ];
    }

    /**
     * Remove Categoris of product
     *
     * @param int $productId productId
     *
     * @return this
     */
    public function removeListcateogry(int $productId)
    {
        \DB::table('product_categories')->where('product_id', $productId)->delete();
        return $this;
    }

    /**
     * Insert list category to product
     *
     * @param int $productId productId
     * @param array $cateIds cateIds
     *
     * @return this
     */
    public function insertListCategory(int $productId, array $cateIds)
    {
        foreach ($cateIds as $cateId)
        {
            ProductCategory::create([
                'product_id' => $productId,
                'category_id' => $cateId
            ]);
        }
        return $this;
    }
}
