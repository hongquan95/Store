<?php

namespace App\Http\Transformers;

use App\Models\Category;
use League\Fractal\TransformerAbstract;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class CategoryTransformer extends TransformerAbstract
{
    public function transform(Category $category)
    {
        return  [
            'id' => $category->id,
            'name' => $category->name,
            'description' => $category->description,
        ];
    }
}
