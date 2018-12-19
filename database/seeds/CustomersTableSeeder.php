<?php

use Illuminate\Database\Seeder;

class CustomersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Customer::class, 10)->create()->each(function ($customer) {
            factory(App\Models\Account::class)->create([
                'loginable_id' => $customer->id,
                'loginable_type' => 'customer',
            ]);
        });
    }
}
