import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const json = await req.json()

    console.log(json)
    //handle webhook

    return NextResponse.json({
        message: "ok"
    })
}