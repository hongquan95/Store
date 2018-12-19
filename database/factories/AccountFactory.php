<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Account::class, function (Faker $faker) {
    $faker = \Faker\Factory::create('vi_VN');
    return [
        'username' => $faker->userName,
        'password' => Hash::make('secret')
    ];
});
