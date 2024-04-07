"use server"

import { items } from "../items"

export async function pay(itemIndex: number) {
    const res = await fetch("https://billing-dev.fugyhost.pl/api/payments", {
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
            webhookUrl: "https://examples-nextjs.fugyhost.pl/api/payment",
            returnUrl: "https://examples-nextjs.fugyhost.pl/payment"
        })
    })

    const json = await res.json() as { url: string }

    console.log(json)

    return json.url
}