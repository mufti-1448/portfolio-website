<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ============================================
// PUBLIC ROUTES
// ============================================

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// ============================================
// ADMIN ROUTES (Protected by Auth Middleware)
// ============================================

Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    // Admin Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

    // Admin Projects
    Route::get('/projects', function () {
        return Inertia::render('Admin/Projects/Index');
    })->name('admin.projects.index');

    Route::get('/projects/create', function () {
        return Inertia::render('Admin/Projects/Create');
    })->name('admin.projects.create');

    Route::get('/projects/{id}/edit', function ($id) {
        return Inertia::render('Admin/Projects/Edit', ['id' => $id]);
    })->name('admin.projects.edit');

    // Admin Skills
    Route::get('/skills', function () {
        return Inertia::render('Admin/Skills/Index');
    })->name('admin.skills.index');

    // Admin Certificates
    Route::get('/certificates', function () {
        return Inertia::render('Admin/Certificates/Index');
    })->name('admin.certificates.index');

    // Admin Experiences
    Route::get('/experiences', function () {
        return Inertia::render('Admin/Experiences/Index');
    })->name('admin.experiences.index');

    // Admin Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('admin.profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('admin.profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('admin.profile.destroy');
});

// ============================================
// AUTH ROUTES (Login, Register, etc)
// ============================================
// Breeze auth routes sudah include di auth.php
require __DIR__ . '/auth.php';
