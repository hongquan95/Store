<?php

namespace App\Http\Requests;

use App\Http\Requests\JsonRequest;

class UpdateProductRequest extends JsonRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
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
            'rating' => 'nullable|integer|min:1|max:5',
            'description' => 'nullable',
        ];
    }
}
