<?php

namespace App\Http\Services;

use App\Models\Supplier;

class SupplierService
{
    /**
     * Create spplier
     *
     * @param array
     *
     * @return int
     */
    public function create(array $params)
    {
        return Supplier::create($params)->id;
    }
}
