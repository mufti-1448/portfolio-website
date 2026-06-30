<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\ExperienceController;
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

    // Resource Routes for Admin CRUD
    Route::resource('projects', ProjectController::class, [
        'names' => [
            'index' => 'admin.projects.index',
            'create' => 'admin.projects.create',
            'store' => 'admin.projects.store',
            'show' => 'admin.projects.show',
            'edit' => 'admin.projects.edit',
            'update' => 'admin.projects.update',
            'destroy' => 'admin.projects.destroy',
        ],
        'parameters' => ['project' => 'project'],
    ])->only(['index', 'create', 'store', 'show', 'edit', 'update', 'destroy']);

    Route::resource('skills', SkillController::class, [
        'names' => [
            'index' => 'admin.skills.index',
            'create' => 'admin.skills.create',
            'store' => 'admin.skills.store',
            'show' => 'admin.skills.show',
            'edit' => 'admin.skills.edit',
            'update' => 'admin.skills.update',
            'destroy' => 'admin.skills.destroy',
        ],
        'parameters' => ['skill' => 'skill'],
    ])->only(['index', 'create', 'store', 'show', 'edit', 'update', 'destroy']);

    Route::resource('certificates', CertificateController::class, [
        'names' => [
            'index' => 'admin.certificates.index',
            'create' => 'admin.certificates.create',
            'store' => 'admin.certificates.store',
            'show' => 'admin.certificates.show',
            'edit' => 'admin.certificates.edit',
            'update' => 'admin.certificates.update',
            'destroy' => 'admin.certificates.destroy',
        ],
        'parameters' => ['certificate' => 'certificate'],
    ])->only(['index', 'create', 'store', 'show', 'edit', 'update', 'destroy']);

    Route::resource('experiences', ExperienceController::class, [
        'names' => [
            'index' => 'admin.experiences.index',
            'create' => 'admin.experiences.create',
            'store' => 'admin.experiences.store',
            'show' => 'admin.experiences.show',
            'edit' => 'admin.experiences.edit',
            'update' => 'admin.experiences.update',
            'destroy' => 'admin.experiences.destroy',
        ],
        'parameters' => ['experience' => 'experience'],
    ])->only(['index', 'create', 'store', 'show', 'edit', 'update', 'destroy']);

    // Admin Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('admin.profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('admin.profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('admin.profile.destroy');
});

// ============================================
// AUTH ROUTES (Login, Register, etc)
// ============================================
require __DIR__ . '/auth.php';
