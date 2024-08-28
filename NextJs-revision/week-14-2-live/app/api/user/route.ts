import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
const client = new PrismaClient;
export async function POST(req: NextRequest){
    // extract the body 
    const body = await req.json();

    // store the body in DB
    console.log("db started");
    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    console.log("db created");

    return Response.json({
        message: "You are logge in"
    })
}
export function GET(){
    return Response.json({
        name: "Prince Yadav",
        email: "prince@gamil.com"
    });
}