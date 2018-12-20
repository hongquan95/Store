<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\JsonRequest;
use App\Models\Account;

class RegisterAccountRequest extends JsonRequest
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
            'username' => 'required|unique:accounts',
            'password' => 'required',
            'loginable_type' => 'required|in:' .
                Account::TYPE_CUSTOMER . ',' .
                Account::TYPE_SUPPLIER,
            'name' => 'required|regex:/^[a-z\s]+$/i',
            'address' => 'required',
            'phone' => 'required',
            'gender' => 'nullable|in:1,2,3'
        ];
    }
}
