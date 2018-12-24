<?php

namespace App\Http\Services;

use App\Models\Category;
use Illuminate\Http\Request;
use Yajra\Datatables\Datatables;

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
        $categories = Category::select(['id', 'name', 'parent_id', 'created_at', 'updated_at']);


        return Datatables::of($categories)
            ->editColumn('parent_id', function($data) {
                if (isset($data->parent_id)) {
                    return Category::where('id', $data->parent_id)->name;
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
}
