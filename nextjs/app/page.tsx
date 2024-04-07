"use client"
import { redirect } from "next/navigation";
import { items } from "./items";
import { pay } from "./actions/pay";

export default function Home() {
  return (
    <main className="min-h-screen text-center p-2">
      <h1 className="text-2xl">Przykładowy ItemShop</h1>
      <div className="flex gap-2 content-center items-center justify-center mt-5">
        {items.map((item, i) => (
          <div key={`items-${i}`} className="border-orange-500 border-2 p-4 rounded-md">
            <h2 className="text-xl">{item.name}</h2>
            <button onClick={() => pay(i).then(url => window.location.href = url)} className="text-white outline-none p-2 bg-orange-600 rounded-lg mt-2">Kup za {item.price} PLN</button>
          </div>
        ))}
      </div>
    </main>
  );
}
