<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $skills = Skill::all();

        return Inertia::render('Admin/Skills/Index', [
            'skills' => $skills,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Skills/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|in:Frontend,Backend,Database,Tools',
            'icon' => 'nullable|string|max:10',
            'proficiency' => 'required|integer|min:1|max:5',
        ]);

        // Create skill
        Skill::create($validated);

        return redirect()->route('admin.skills.index')->with('success', 'Skill created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Skill $skill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Skill $skill)
    {
        return Inertia::render('Admin/Skills/Edit', [
            'skill' => $skill,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Skill $skill)
    {
        // Validate request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|in:Frontend,Backend,Database,Tools',
            'icon' => 'nullable|string|max:10',
            'proficiency' => 'required|integer|min:1|max:5',
        ]);

        // Update skill
        $skill->update($validated);

        return redirect()->route('admin.skills.index')->with('success', 'Skill updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Skill $skill)
    {
        $skill->delete();

        return redirect()->route('admin.skills.index')->with('success', 'Skill deleted successfully');
    }
}
