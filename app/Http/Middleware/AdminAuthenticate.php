<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAuthenticate
{
    /**
     * @param Request $request
     * @param Closure $next
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next)
    {
        $auth = Auth::guest();
        if (Auth::guest()) {
            if ($request->ajax() || $request->wantsJson()) {
                return response('Unauthorized.', 401);
            } else {
                //dd($request->getRequestUri());
                if($request->getRequestUri() != "/admin/login")
                    return redirect()->guest('admin/login');
            }
        }else{
            if (! Auth::user()->isAdmin()) {
                return response('Access denied.', 401);
            }
        }
        return $next($request);
    }
}
