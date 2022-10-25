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
        $folder=explode('\\',public_path('images'))[8]."/";
        $folderPublic=public_path('images');
        $bannerTextImgFile=$folder.$request->bannerTextImg->getClientOriginalName();
        $bannerImgFile=$folder.$request->bannerImg->getClientOriginalName();
        $backgroundImgFile=$folder.$request->backgroundImg->getClientOriginalName();
        $request->bannerTextImg->move($folderPublic,$request->bannerTextImg->getClientOriginalName());
        $request->bannerImg->move($folderPublic,$request->bannerImg->getClientOriginalName());
        $request->backgroundImg->move($folderPublic,$request->backgroundImg->getClientOriginalName());
        DB::table('wedding')->insert([
            ['headertext' => $request->headerText, 'headerdate' => $request->headerDate,'bannertextimg' => $bannerTextImgFile,
            'bannerimg' => $bannerImgFile,'bridename' => $request->brideName,
            'groomname' => $request->groomName,'backgroundimg' => $backgroundImgFile,'groomfacebook' => $request->facebookGroom,
            'bridefacebook' => $request->facebookBride,'datewedding' => $request->dateWedding,'youtubelink' => $request->youtubeLink,
            'map' => $request->map]
        ]);
        foreach($item as $request->storyList){
            
        }
    }
}
