<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;

    protected $table = "favorites";
    
    protected $fillable = [
        "name",
        "image",
        "timePreparation",
        // "Number"
    ];

    public $timestamps= false;
}
