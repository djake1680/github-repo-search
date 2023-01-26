<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GitRepository extends Model
{
    use HasFactory;

    protected $table = 'git_repositories';
    protected $fillable = [ 'repo_id', 'repo_name', 'username', 'url', 'repo_created_date', 'last_push_date', 'description', 'star_count'];
}
