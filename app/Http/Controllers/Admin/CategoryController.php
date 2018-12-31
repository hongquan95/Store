<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Services\CategoryService;
use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Controllers\Controller as BaseController;

class CategoryController extends BaseController
{
    /**
     * @var CategoryService
     */
    private $categoryService;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    /**
     * Show list categorys
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.category.index');
    }

    /**
     * Category dataTables
     *
     * @param Request
     *
     * @return \Illuminate\Http\Response
     */
    public function dataTables(Request $request)
    {
        return $this->categoryService->dataTables($request);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $nodes = Category::get()->toTree();

        $traverse = function ($categories, $prefix = '') use (&$traverse) {
            foreach ($categories as $index => $category) {
                 echo '<option value="' . $category->id . '">' . $prefix.$category->name . '</option>';
                $traverse($category->children, $prefix. str_repeat("&nbsp;", 8));
            }
        };

        return view('admin.category.create')->with(['traverse' => $traverse, 'nodes' => $nodes]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CreateCategoryRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateCategoryRequest $request)
    {
        $this->categoryService->store($request);
        return redirect()->route('admin.categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id id
     * @return \Illuminate\Http\Response
     */
    public function edit(int $id)
    {
        $thisCategory = $this->categoryService->findById($id);
        $nodes = Category::get()->toTree();

        $traverse = function ($categories, $prefix = '') use (&$traverse, $thisCategory) {
            foreach ($categories as $index => $category) {
                if ($category->id == $thisCategory->parent_id) {
                    echo '<option value="' . $category->id . '" selected>' . $prefix.$category->name . '</option>';
                }
                elseif ($category->id != $thisCategory->id && !$category->isDescendantOf($thisCategory)) {
                    echo '<option value="' . $category->id . '">' . $prefix.$category->name . '</option>';
                }
                $traverse($category->children, $prefix. str_repeat("&nbsp;", 8));
            }
        };
        return view('admin.category.edit')->with(['traverse' => $traverse, 'nodes' => $nodes, 'category' => $thisCategory]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateCategoryRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, int $id)
    {
        $this->categoryService->update($request, $id);
        return redirect()->route('admin.categories.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $this->categoryService->delete($id);
        return redirect()->route('admin.categories.index');
    }
}
