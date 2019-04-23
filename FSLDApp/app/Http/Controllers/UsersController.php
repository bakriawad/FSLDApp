<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MyUser;


class UsersController extends Controller
{
    
    public function addUser(Request $req)
    {

        //insert users data into DB
        $user = new MyUser();
        $user->fname = $req->input("fname");
        $user->surname = $req->input("surname");
        $user->email = $req->input("email");
        $user->phone = $req->input("phone");
        $user->gender = $req->input("gender");
        $user->dob = $req->input("dob");
        $user->comments = $req->input("comments");
        //$user->save();


        //Set the reply with success or fail status
        $rep = new \stdclass();
        if($user->id)
        {
            $rep->status=true;
            $rep->id = $user->id;
        }
        else{$rep->status=false;}

        return json_encode($rep);
        //return Response::json($rep, $httpcode)
    }
}
