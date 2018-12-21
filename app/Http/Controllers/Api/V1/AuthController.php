<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\Http\Service\AccountService;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\RegisterAccountRequest;
use App\Http\Requests\Auth\LoginAccountRequest;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class AuthController extends Controller
{

    /**
     * User Service
     */
    public $accountService;

    /**
     * Construct
     */
    public function __construct(AccountService $accountService)
    {
        $this->accountService = $accountService;
    }

    /**
     * Login account
     *
     * @param LoginAccountRequest $request request
     *
     * @return Illuminate\Http\Response
     */
    public function login(LoginAccountRequest $request)
    {
        $account = $this->accountService->login($request);
        if ($account) {
            return $this->responseSuccess($account, Response::HTTP_OK);
        }
        return $this->responseError(__('auth.failed'), Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Logout account
     *
     * @param Illuminate\Http\Request $request request
     *
     * @return Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $message = $this->accountService->logout($request);
        return $this->responseSuccess($message);
    }

    /**
     * Logout account
     *
     * @param RegisterAccountRequest $request request
     *
     * @return Illuminate\Http\Response
     */
    public function register(RegisterAccountRequest $request)
    {
        $account = $this->accountService->register($request);
        if ($account) {
            return $this->responseSuccess($account, Response::HTTP_CREATED);
        }
        return $this->responseError(__('auth.register.fail'), Response::HTTP_INTERNAL_SERVER_ERROR);
    }


}
