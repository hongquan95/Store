<?php

namespace App\Http\Services;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Yajra\Datatables\Datatables;
use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

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
        session()->flash('success', __('category.create.success'));
        return Category::create($params, $parent);
    }

    /**
     * Get category by Id
     *
     * @param int $id id
     *
     * @return Category
     */
    public function findById(int $id)
    {
        return Category::findOrFail($id);
    }

    /**
     * Get All Categories
     *
     * @return Collection
     */
    public function getAllCategories()
    {
        return Category::all();
    }

    /**
     * Update category
     *
     * @param UpdateCategoryRequest $request request
     * @param int $id id
     *
     * @return void
     */
    public function update(UpdateCategoryRequest $request, int $id)
    {
        Category::where('id', $id)->update($request->only(['name', 'parent_id']));
        session()->flash('success', __('category.update.success'));
    }

    /**
     * Remove category with descendent
     *
     * @param int $id id
     *
     * @return Response
     */
    public function delete(int $id)
    {
        \DB::beginTransaction();
        $category = Category::findOrFail($id);
        $ids = $category->descendants()->pluck('id');
        $ids[] = $id;
        try {
            Category::destroy($ids);
            \DB::commit();
            session()->flash('success', __('category.delete.success'));

        } catch (\Exception $e) {
            \Log::error($e);
            \DB::rollback();
            throw $e;
        }
    }
}
