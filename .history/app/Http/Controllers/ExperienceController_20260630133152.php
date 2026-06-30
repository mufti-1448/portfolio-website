<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExperienceController extends Controller
{
    public function index()
    {
        $experiences = Experience::all();
        return Inertia::render('Admin/Experiences/Index', ['experiences' => $experiences]);
    }

    public function create()
    {
        return Inertia::render('Admin/Experiences/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date',
            'is_current' => 'nullable|boolean',
        ]);

        Experience::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Experience created successfully',
        ], 201);
    }

    public function show(Experience $experience)
    {
        return Inertia::render('Admin/Experiences/Show', ['experience' => $experience]);
    }

    public function edit(Experience $experience)
    {
        return Inertia::render('Admin/Experiences/Edit', ['experience' => $experience]);
    }

    public function update(Request $request, Experience $experience)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date',
            'is_current' => 'nullable|boolean',
        ]);

        $experience->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Experience updated successfully',
        ], 200);
    }

    public function destroy(Experience $experience)
    {
        $experience->delete();

        return response()->json([
            'success' => true,
            'message' => 'Experience deleted successfully',
        ], 200);
    }
}
