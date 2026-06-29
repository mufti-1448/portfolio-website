<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all();

        return Inertia::render('Admin/Projects/Index', [
            'projects' => $projects,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Projects/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate request
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'tech_stack' => 'nullable|json',
            'github_url' => 'nullable|url',
            'live_url' => 'nullable|url',
            'is_featured' => 'nullable|boolean',
        ]);

        // Convert JSON string back to array
        if ($validated['tech_stack']) {
            $validated['tech_stack'] = json_decode($validated['tech_stack'], true);
        }

        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('projects', 'public');
            $validated['image'] = $imagePath;
        }

        // Create project
        $project = Project::create($validated);

        // Return JSON response (for axios)
        return response()->json([
            'success' => true,
            'message' => 'Project created successfully',
            'project' => $project,
        ], 201);
    }
    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        // Validate request
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'tech_stack' => 'nullable|json',
            'github_url' => 'nullable|url',
            'live_url' => 'nullable|url',
            'is_featured' => 'nullable|boolean',
        ]);

        // Convert JSON string back to array
        if ($validated['tech_stack']) {
            $validated['tech_stack'] = json_decode($validated['tech_stack'], true);
        }

        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('projects', 'public');
            $validated['image'] = $imagePath;
        }

        // Update project
        $project->update($validated);

        // Return JSON response (for axios)
        return response()->json([
            'success' => true,
            'message' => 'Project updated successfully',
            'project' => $project,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();

        // Return JSON response (for axios)
        return response()->json([
            'success' => true,
            'message' => 'Project deleted successfully',
        ], 200);
    }
}
