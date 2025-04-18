<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Session\Middleware\StartSession as BaseStartSession;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\ServiceProvider;
use App\Models\Users\User;

/** 
	* Code taken from http://stackoverflow.com/a/29251516 .
	* The handle() method in the StartSession class is called to handle
	* an incoming request. By overriding this method in the StartSession 
	* class, we can first check if the current route is configured as a 
	* "nosession" route (in config/app.php) If so, then do not create 
	* a session cookie.
	*/

class StartSession extends BaseStartSession
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next){

		// Look for routes configured as 'nosession' since they should
		// not create a session cookie.
		//
		$nosession = false;
		if (config('app.nosession')) {
			foreach (config('app.nosession') as $pattern) {
				if (is_array($pattern)) {
					if ($request->is(key($pattern))) {
						$nosession = in_array($requtest->method(), current($pattern));
						if ($nosession) {
						  break;
						}
					}
				} else {
					if ($request->is($pattern)) { 
						$nosession = true;
						break;
					}
				}
			}
		}

		// If we found a route that should not create a session cookie, 
		// set the session.driver to 'array' which prevents a session 
		// cookie from being created.
		//
		if ($nosession) {
			config([
				'session.driver' => 'array'
			]);
		}
		
		// Finally, call the parent's "handle" method.
		//
		return parent::handle($request,$next);
	}

	/**
	 * Start the session for the given request.
	 * Check if the current user has been marked as 'disabled' in the
	 * database. If so, then flush their session data.
	 * Code idea taken from 
	 * https://laracasts.com/discuss/channels/general-discussion/laravel-5-session-data-is-not-accessible-in-the-app-boot-process
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Session\SessionInterface
	 */
	protected function startSession(Request $request) {

		// Get the current session data
		//
		$session = parent::startSession($request);

		// Check if user_uid has been set in the session. If so, see
		// if that user_uid is disabled.
		//
		if ($session->has('user_id')) {
			$user_id = $session->get('user_id');
			if (strlen($user_id) > 0) {
				$user = User::find($user_id);

				// If user has been disabled, clear the current session data.
				//
				if (($user) && (!$user->account->isEnabled())) {
					$session->flush();
					$session->save();
				}
			}
		}

		return $session;
	}
}