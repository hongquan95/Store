<?php

namespace App\Http\Transformers;

use App\Models\Supplier;
use League\Fractal\TransformerAbstract;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class SupplierTransformer extends TransformerAbstract
{
    public function transform(Supplier $supplier)
    {
        return  [
            'id' => $supplier->id,
            'name' => $supplier->name,
            'address' => $supplier->address,
            'phone' => $supplier->phone,
            'email' => $supplier->email,
            'avatar' => $supplier->avatar,
        ];
    }
}
