<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'category',
        'icon',
        'proficiency',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'proficiency' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
