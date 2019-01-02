<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'price',
        'supplier_id',
        'rating',
        'description'
    ];

    /**
     * Product belong to a supplier
     */
    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id');
    }

    /**
     * Product belong many
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'product_categories');
    }

    /**
     * One product belongs to many Orders.
     */
    public function orders()
    {
        return $this->belongsToMany(Order::class, 'order_details')
            ->withPivot('product_id', 'order_id', 'quantity');
    }
}
