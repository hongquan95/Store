<?php

namespace App\Http\Controllers\Api\V1;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Services\ProductService;
use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{
    /**
     * @var ProductService
     */
    private $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = $this->productService->getListProducts();
        return $this->responseSuccess($products, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CreateProductRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateProductRequest $request)
    {
        $product = $this->productService->createProduct($request);
        if ($product) {
            return $this->responseSuccess($product, Response::HTTP_CREATED);
        }
        return $this->responseError(__('product.created_fail'), Response::HTTP_INTERNAL_SERVER_ERROR);

    }

    /**
     * Display the specified resource.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $product = $this->productService->getProductDetail($request);
        if ($product) {
            return $this->responseSuccess($product, Response::HTTP_OK);
        }
        return $this->responseError(__('product.not_found'), Response::HTTP_NOT_FOUND);
    }

    /**
     * Supplier update product detail.
     *
     * @param  UpdateProductRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, int $id)
    {
        $product = $this->productService->updateProductDetail($request, $id);
        return $this->responseError(__('product.update_success'), Response::HTTP_OK);
    }

    /**
     * Remove product.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $message = $this->productService->removeProduct($id);
        if ($message) {
            return $this->responseSuccess(__('product.remove_success'), Response::HTTP_OK);
        }
        return $this->responseError(__('product.remove_fail'), Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
