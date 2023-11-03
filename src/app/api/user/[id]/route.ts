import prisma from "../../../libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try{
        const { id } = params;
        const post: unknown = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!post) {
            return NextResponse.json({message : "POST NOT FOUND"}, {status : 404});
        }
        return NextResponse.json(post);
    }catch(err){
        return NextResponse.json({message : "GET ERROR", err}, {status : 500})
    }
}

export const PATCH = async (request, { params }) => {
    try{
        const { id } = params;
        const body: unknown = await request.json();
        const { voterId, walletId, name } = body;

        const post: unknown = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                voterId : String(voterId),
                walletId : String(walletId),
                name: String(name)
            }
        });

        if (!post) {
            return NextResponse.json({message : "POST NOT FOUND"}, {status : 404});
        }       

        return NextResponse.json(post);
    }catch(err){
        return NextResponse.json({message : "PATCH ERROR", err}, {status : 500})
    }
}

export const DELETE = async (request, { params }) => {
    try{
        const { id } = params;
        const post: unknown = await prisma.user.delete({
            where: {
                id: Number(id)
            }
        });
        return NextResponse.json(post);
    }catch(err){
        return NextResponse.json({message : "DELETE ERROR", err}, {status : 500})
    }
}