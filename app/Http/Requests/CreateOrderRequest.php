<?php

namespace App\Http\Requests;

use App\Models\Product;
use App\Http\Requests\JsonRequest;

class CreateOrderRequest extends JsonRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return isCustomer() ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'params' => 'bail|required',
            'params' => function ($attributes, $data, $fail) {
                if (!is_array($data)) {
                    $fail ('params format is invalid');
                } else {
                    $ids = array_keys($data);
                    $productIds = Product::pluck('id')->toArray();
                    if (!empty(array_diff($ids, $productIds))) {
                        $fail ('Has id invalid');
                    }
                    $quantitys = array_values($data);
                    foreach ($quantitys as $quantity) {
                        if ($quantity <= 0 ) {
                            $fail ('Has quantity invalid');
                        }
                    }
                }
            }
        ];
    }
}
