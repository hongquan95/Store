<?php

namespace App\Http\Requests;

use App\Http\Requests\JsonRequest;
use App\Http\Services\ProductService;

class UpdateProductRequest extends JsonRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $productService = new ProductService();
        return $productService->validateSupplier($this->id) ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:products,name,' . $this->id,
            'price' => 'required|numeric|min:0',
            'description' => 'nullable',
        ];
    }
}
