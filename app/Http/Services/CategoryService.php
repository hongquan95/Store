<?php

namespace App\Http\Services;

use App\Models\Category;
use Illuminate\Http\Request;
use Yajra\Datatables\Datatables;
use App\Http\Requests\CreateCategoryRequest;

class CategoryService
{
    /**
     * Datatable
     *
     * @param Request $request
     *
     * @return object
     */
    public function dataTables(Request $request)
    {
        $params = $request->all();
        $search = $params['search']['value'];
        \Log::info($search);
        $categories = Category::select(['id', 'name', 'parent_id', 'created_at', 'updated_at'])
            ->orderBy('created_at', 'desc');


        return Datatables::of($categories)
            ->editColumn('parent_id', function($data) {

                if (isset($data->parent_id)) {
                    return Category::find($data->parent_id)->name;
                }
            })
            ->editColumn('created_at', function ($data) {
                return $data->created_at->toDateTimeString();
            })
            ->editColumn('updated_at', function ($data) {
                return $data->updated_at->toDateTimeString();
            })
            ->addColumn('action', function($data) {
                return view('admin.category.action', ['id' => $data->id]);
            })->make(true);
    }

    /**
     * Store category
     *
     * @param CreateCategoryRequest $request
     *
     * @return Category
     */
    public function store(CreateCategoryRequest $request)
    {
        $params = $request->only(['name', 'price', 'parent_id']);
        if (!isset($params['parent_id'])) {
            return Category::create($params);
        }
        $parent = Category::find($params['parent_id']);
        return Category::create($params, $parent);
    }
}
