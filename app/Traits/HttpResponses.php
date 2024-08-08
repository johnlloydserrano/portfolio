<?php

namespace App\Traits;

trait HttpResponses
{
    protected function success($data, $message = null, $code = 200)
    {
        return response()->json([
            'status' => 'Request was successfull',
            'message' => $message,
            'result' => $data

        ], $code);
    }
    protected function error($data, $message = null, $code)
    {
        return response()->json([
            'status' => 'Error has occured',
            'message' => $message,
            'result' => $data
            
        ], $code);
    }

    protected function unauthorize($message, $code)
    {
        return response()->json([
            'status' => 'Unauthorized',
            'message' => $message
        ], $code);
    }
}
