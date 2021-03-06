<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Product::class, 10)->create()->each(function ($product, $index) {
            $product->name = 'Product ' . $index;
            $product->save();
        });
    }
}
