<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Supplier::class, function (Faker $faker) {
    $faker = \Faker\Factory::create('vi_VN');
    return [
        'name' => $faker->name,
        'address' => $faker->address,
        'phone' => $faker->phoneNumber,
        'email' => $faker->safeEmail,
    ];
});
