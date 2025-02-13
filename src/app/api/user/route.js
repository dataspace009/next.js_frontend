import { NextResponse } from "next/server";

export async function GET() {
    const data = await { email: 'bjr@it.com', password: '123' };
    return NextResponse.json(data, { status: 200 })
}

export async function POST(req) {
    
    const userData = { email: 'bjr@it.com', password: '123' }
    const user = req.jsons()

    if (user.email == userData.email && user.password == userData.password) {
        const payload = { msg: 'success' }
        return NextResponse.json(payload)
    } else {
        const payload = { msg: 'false' }
        return NextResponse.json(payload)
    }

}