<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Category::class, function (Faker $faker) {
    return [
        'name' => 'Category ' . random_int(100, 200),
    ];
});
