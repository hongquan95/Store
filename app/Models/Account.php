<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Account extends Authenticatable
{
    use Notifiable, HasApiTokens, SoftDeletes;

    const CUSTOMER = 'customer';
    const SUPPLIER = 'supplier';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Loginable polimophic relationship
     *
     * @return Illuminate\Database\Eloquent\Relations\MorphTo morphTo
     */
    public function loginable()
    {
        return $this->morphTo();
    }
}
