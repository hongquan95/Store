<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Product::class, function (Faker $faker) {
    return [
        'name' => 'Product ',
        'supplier_id' => factory(App\Models\Supplier::class)->create()->id,
        'price' => $faker->randomElement([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]),
        'rating' => $faker->numberBetween(1, 5),
        'description' => $faker->text(50),
    ];
});
