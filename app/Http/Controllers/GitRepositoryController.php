<?php

namespace App\Http\Controllers;

use App\Models\GitRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Carbon;

class GitRepositoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return GitRepository::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GitRepository  $gitRepository
     * @return \Illuminate\Http\Response
     */
    public function show(GitRepository $gitRepository)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GitRepository  $gitRepository
     * @return \Illuminate\Http\Response
     */
    public function edit(GitRepository $gitRepository)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GitRepository  $gitRepository
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GitRepository $gitRepository)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GitRepository  $gitRepository
     * @return \Illuminate\Http\Response
     */
    public function destroy(GitRepository $gitRepository)
    {
        //
    }

    public function gitDataFetch($repoCount)
    {
        $pages = $repoCount / 100;

        $page = 1;

        $response = [];

        for($i = 1; $i <= $pages; $i++) {
            $url = "https://api.github.com/search/repositories?q=language:php&sort=stars&order=desc&per_page=100";
            $url .= "&page=" . $i;
            $response = Http::get($url);
            foreach($response['items'] as $repo) {
                $gitRepo = new GitRepository();
                $gitRepo->repo_id = $repo['id'];
                $gitRepo->repo_name = $repo['name'];
                $gitRepo->username = $repo['owner']['login'];
                $gitRepo->url = $repo['html_url'];
                $gitRepo->repo_created_date = Carbon::parse($repo['created_at'])->format('Y-m-d H:i:s');
                $gitRepo->last_push_date = Carbon::parse($repo['pushed_at'])->format('Y-m-d H:i:s');
                $gitRepo->description = $repo['description'];
                $gitRepo->star_count = $repo['stargazers_count'];
                $gitRepo->save();
            }
        }

        $response = Http::get($url);
        return $response;
    }

    public function gitReposUpdate() {
        GitRepository::getQuery()->delete();
        return $this->gitDataFetch(1000);
    }
}
