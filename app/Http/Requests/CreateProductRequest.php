<?php

namespace App\Http\Requests;

use App\Http\Requests\JsonRequest;

class CreateProductRequest extends JsonRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return isSupplier() ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:products,name',
            'price' => 'required|integer|min:0',
            'description' => 'nullable',
        ];
    }
}
