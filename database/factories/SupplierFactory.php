<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Supplier::class, function (Faker $faker) {
    $faker = \Faker\Factory::create('vi_VN');
    return [
        'name' => $faker->name,
        'address' => preg_replace('~[\r\n]+~', '', $faker->address),
        'phone' => $faker->phoneNumber,
        'email' => $faker->safeEmail,
    ];
});
