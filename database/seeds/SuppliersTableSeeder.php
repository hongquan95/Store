<?php

use Illuminate\Database\Seeder;

class SuppliersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Supplier::class, 10)->create()->each(function ($supplier) {
            factory(App\Models\Account::class)->create([
                'loginable_id' => $supplier->id,
                'loginable_type' => 'supplier',
            ]);
        });
    }
}
