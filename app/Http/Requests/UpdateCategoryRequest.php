<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Models\Category;

class UpdateCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $categoryId = $this->category;
        return [
            'name' => 'required',
            'name' => 'unique:categories,name,' . $categoryId,
            'parent_id' => [
                'exists:categories,id',
                function ($attribute, $parent_id, $fail) use ($categoryId) {
                    $category = Category::findOrFail($categoryId);
                    if (Category::findOrFail($parent_id)->isDescendantOf($category) || $parent_id == $categoryId) {
                        $fail("The parent is wrong");
                    }
                },
            ]
        ];
    }

    /**
     * Get the messages rules that apply to the request.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'parent_id.exists' => 'The parent is wrong'
        ];
    }
}
