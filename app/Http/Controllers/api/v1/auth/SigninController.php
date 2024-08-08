<?php

namespace App\Http\Controllers\api\v1\auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\auth\SigninRequest;
use App\Models\User;
use App\Traits\HttpResponses;

class SigninController extends Controller
{
    use HttpResponses;

    public function signin(SigninRequest $request)
    {
        try {
            $request->validated();
            $request->authenticate();

            $user = User::where('email', $request->email)->first();
            $token = $user->createToken('signin_token')->plainTextToken;

            return $this->success(['access_token' => $token], 'Signed in Successfully', 200);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 'Error', $th->status);
        }
    }
}
