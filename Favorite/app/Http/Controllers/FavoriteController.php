<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Favorite = Favorite::all();
        return $Favorite;
    }

    public function countfavorite(){
        $favorite=Favorite::all();
        return $favorite->count();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Favorite::create([

            'name' => $request->foodName,
            'image'=> $request->foodImg,
            'timePreparation' => $request->timePreparation,
            // 'Number' => $request->Number
        ]);

        return response()->json([
            'success' => true,
            'favorites' => Favorite::all()
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
       
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $favorite = Favorite::find($id);
        $favorite->delete();

        return response()->json([
            'favorites' => Favorite::all()
        ]);
    }
}
