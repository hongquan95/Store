<?php

use Faker\Generator as Faker;

$factory->define(App\Models\ProductCategory::class, function (Faker $faker) {
    return [
        'category_id' => factory(App\Models\Category::class)->create()->id,
        'product_id' => factory(App\Models\Product::class)->create()->id,
    ];
});
