"use server"

import client from "@/db";
export async function signup(username:string,password:string){
    // console.log(body);
  try{
    await client.user.create({
        data: {
            username: username,
            password: password
        }
    });
    console.log(true);
    return true;
  }catch(e){
    console.log(false);
    return false;
  }

}