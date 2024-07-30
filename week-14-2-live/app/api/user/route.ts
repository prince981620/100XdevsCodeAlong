import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server"


const client = new PrismaClient
export function GET(){
    // database logic
    return Response.json({
        name: "Prince",
        email: "prince@gmail.com"
    })
}
export async function POST(req:NextRequest){
    const body = await req.json();
    // console.log(body);
    const response = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    if(response){
        return Response.json({
            Message: "You are logged in!"
        })
    }else {
        return Response.json({
            Message: "Error!!"
        })
    }
}