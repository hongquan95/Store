<?php

namespace App\Http\Service;

use App\Models\Account;
use App\Models\Customer;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Services\CustomerService;
use App\Http\Services\SupplierService;
use App\Http\Requests\Auth\LoginAccountRequest;
use App\Http\Requests\Auth\RegisterAccountRequest;

class AccountService
{
    public $supplierService;
    public $customerService;

    public function __construct(SupplierService $supplierService, CustomerService $customerService)
    {
        $this->supplierService = $supplierService;
        $this->customerService = $customerService;
    }
    /**
     * Logint account
     *
     * @param LoginAccountRequest $request request
     *
     * @return mixed
     */
    public function login(LoginAccountRequest $request)
    {
        $crenticals = $request->only(['username', 'password']);
        if (Auth::attempt($crenticals)) {
            $account = Auth::user();
            $token = $account->createToken(config('define.api_token'))->accessToken;
            return [
                'result' => [
                    'api_token' => $token,
                    'token_type' => 'Bearer',
                ],
            ];
        }
        return null;
    }

    /**
     * Logout account
     *
     * @param Request $request request
     *
     * @return string
     */
    public function logout($request)
    {
        $token = $request->user()->token();
        $token->revoke();
        return [
            'message' => __('auth.logout')
        ];
    }

    /**
     * Register account.
     *
     * @param RegisterAccountRequest $request request
     *
     * @return mixed
     */
    public function register(RegisterAccountRequest $request)
    {
        $params = $request->all();
        \DB::beginTransaction();
        try {
            $params['loginable_id'] = $params['loginable_type'] == Account::TYPE_CUSTOMER ?
                $this->customerService->create($params) :
                $this->supplierService->create($params);
            $params['password'] = bcrypt($params['password']);
            $account = Account::create($params);
            $token = $account->createToken(config('define.api_token'))->accessToken;
            \DB::commit();
            return [
                'result' => [
                    'account' => $account,
                    'api_token' => $token,
                    'token_type' => 'Bearer'
                ],
            ];
        } catch (\Exception $e) {
            \DB::rollback();
            \Log::error($e);
        }
    }

}
