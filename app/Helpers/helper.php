<?php

if (!function_exists("isSupplier")) {
    /**
     * Check is supplier login
     */
    function isSupplier()
    {
        return Auth::check()  && Auth::user()->loginable_type == App\Models\Account::TYPE_SUPPLIER;
    }
}

if (!function_exists("isCustomer")) {
    /**
     * Check is customer login
     *
     * @return boolean
     */
    function isCustomer()
    {
        return Auth::check()  && Auth::user()->loginable_type == App\Models\Account::TYPE_CUSTOMER;
    }
}

if (!function_exists("currentLoginableId")) {
    /**
     * Get account id login
     *
     * @return int
     */
    function currentLoginableId()
    {
        return Auth::user()->id;
    }
}

