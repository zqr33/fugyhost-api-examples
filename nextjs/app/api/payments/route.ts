import { NextResponse } from "next/server"

export async function POST(req: Request) {
    if(req.headers.get("fugyhost-api-token") !== process.env.FUGYHOST_API_KEY) {
        return NextResponse
    }

    const json = await req.json()

    console.log(json)
    //handle webhook

    return NextResponse.json({
        message: "ok"
    })
}