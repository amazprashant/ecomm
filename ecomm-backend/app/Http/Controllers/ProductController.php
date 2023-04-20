<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;


class ProductController extends Controller
{
    function addproduct(Request $req)
    {
        $product = new Product;
        $product->name = $req->input("name");
        $product->price = $req->input("price");
        $product->description = $req->input("description");
        $product->file_path =$req->file('file')->store('products');
        $product->updated_at =Now();
        $product->create_at =Now();

        $product->save();
        return $product;
    }
}
