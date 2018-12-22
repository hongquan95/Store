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
        return $this->belongsToMany(Product::class, 'product_categories');
    }
}
