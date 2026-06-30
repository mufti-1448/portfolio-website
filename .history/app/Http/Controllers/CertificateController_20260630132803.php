<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificateController extends Controller
{
    public function index()
    {
        $certificates = Certificate::all();
        return Inertia::render('Admin/Certificates/Index', ['certificates' => $certificates]);
    }

    public function create()
    {
        return Inertia::render('Admin/Certificates/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'issuer' => 'required|string|max:255',
            'issue_date' => 'required|date',
            'expiry_date' => 'nullable|date',
            'credential_url' => 'nullable|url',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('certificates', 'public');
            $validated['image'] = $imagePath;
        }

        Certificate::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Certificate created successfully',
        ], 201);
    }

    public function show(Certificate $certificate)
    {
        return Inertia::render('Admin/Certificates/Show', ['certificate' => $certificate]);
    }

    public function edit(Certificate $certificate)
    {
        return Inertia::render('Admin/Certificates/Edit', ['certificate' => $certificate]);
    }

    public function update(Request $request, Certificate $certificate)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'issuer' => 'required|string|max:255',
            'issue_date' => 'required|date',
            'expiry_date' => 'nullable|date',
            'credential_url' => 'nullable|url',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('certificates', 'public');
            $validated['image'] = $imagePath;
        }

        $certificate->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Certificate updated successfully',
        ], 200);
    }

    public function destroy(Certificate $certificate)
    {
        $certificate->delete();

        return response()->json([
            'success' => true,
            'message' => 'Certificate deleted successfully',
        ], 200);
    }
}
