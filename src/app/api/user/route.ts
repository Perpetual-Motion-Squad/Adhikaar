import prisma from "../../../libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (request : any) => {
    try{
        const body: unknown = await request.json();
        const { voterId, walletId, name } = body;

        const newPost: unknown = await prisma.user.create({
            data: {
                voterId : String(voterId),
                walletId : String(walletId),
                name: String(name)
            }
        });

        return NextResponse.json(newPost);
    }catch(err){
        return NextResponse.json({message : "POST ERROR", err}, {status : 500})
    }
}

export const GET = async () => {
    try{
        const users: unknown = await prisma.user.findMany();
        return NextResponse.json(users);
    }catch(err){
        return NextResponse.json({message : "GET ERROR", err}, {status : 500})
    }
}