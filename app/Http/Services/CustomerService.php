<?php

namespace App\Http\Services;

use App\Models\Customer;

class CustomerService
{
    /**
     * Create customer
     *
     * @param array $params params
     *
     * @return int
     */
    public function create(array $params)
    {
        return Customer::create($params)->id;
    }
}
