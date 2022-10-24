<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WeddingController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //
    }
    public function wedding(Request $request){
        dd($request);
        DB::table('wedding')->insert([
            ['headerText' => $request->headerText, 'headerDate' => $request->headerDate]
        ]);
    }
}
