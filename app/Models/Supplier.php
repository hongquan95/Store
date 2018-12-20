<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Supplier extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'address', 'phone', 'email'
    ];

    /**
     * Suppiler has one account via loginable
     *
     */
    public function account()
    {
        return $this->morphOne(Account::class, 'loginable');
    }
}
