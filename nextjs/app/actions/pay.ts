"use server"

import { items } from "../items"

export async function pay(itemIndex: number) {
    const res = await fetch("https://fugyhost.pl/api/payments", {
        method: "POST",
        headers: {
            Authorization: `API ${process.env.FUGYHOST_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            money: items[itemIndex].price,
            additionalData: JSON.stringify({
                itemId: itemIndex,
            }),
            webhookUrl: "https://fugyhost-examples-nextjs.zqr33.xyz/api/payments",
            returnUrl: "https://fugyhost-examples-nextjs.zqr33.xyz/payment"
        })
    })

    const json = await res.json() as { url: string }

    console.log(json)

    return json.url
}