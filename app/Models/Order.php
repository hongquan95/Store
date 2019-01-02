<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'customer_id', 'status',
    ];

    /**
     * One order has many products.
     */
    public function products()
    {
        return $this->belongsToMany(Product::class, 'order_details')
            ->withPivot('product_id', 'order_id', 'quantity');
    }
}
