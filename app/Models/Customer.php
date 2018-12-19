<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'address', 'phone', 'email', 'gender'
    ];

    /**
     * Customer has one account via loginable
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne MorphOne
     */
    public function account()
    {
        $this->morphOne(Account::class, 'loginable');
    }
}
