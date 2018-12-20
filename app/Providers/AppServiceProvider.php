<?php

namespace App\Providers;

use App\Models\Account;
use App\Models\Customer;
use App\Models\Supplier;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * An array to map class names to their morph names in database.
     *
     * @var array
     */
    protected $morphMaps = [
        Account::TYPE_CUSTOMER => Customer::class,
        Account::TYPE_SUPPLIER => Supplier::class,
    ];
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Relation::morphMap($this->morphMaps);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
