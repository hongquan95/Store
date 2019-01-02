<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Response;
use App\Http\Services\CartService;
use App\Http\Controllers\Controller;
use App\Http\Requests\GetCartRequest;

class CartController extends Controller
{
    private $cartService;

    public function __construct(CartService $cartService)
    {
        $this->cartService = $cartService;
    }

    /**
     * Get cart detail
     *
     * @param GetCartRequest $params params
     *
     * @return Response
     */
    public function getDetail(GetCartRequest $request)
    {
        $data = $this->cartService->getDetail($request);
        return $this->responseSuccess($data, Response::HTTP_OK);
    }
}
