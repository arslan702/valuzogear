import React from 'react'

export default function Component() {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl font-bold">SHEIN</h1>
        <div className="space-x-4">
          <button className="bg-[#555] text-white" variant="ghost">
            SECURE CHECKOUT
          </button>
          <button className="bg-[#555] text-white" variant="ghost">
            CONTINUE SHOPPING
          </button>
        </div>
      </header>
      <nav className="p-4 text-sm">
        <ol className="flex space-x-2">
          <li>Cart</li>
          <li>{`>`}</li>
          <li>Place Order</li>
          <li>{`>`}</li>
          <li>Pay</li>
          <li>{`>`}</li>
          <li>Order Complete</li>
        </ol>
      </nav>
      <main className="p-4">
        <section className="text-center">
          <div className="inline-block p-10 border rounded-md">
            <ShoppingCartIcon className="text-gray-300" />
          </div>
          <h2 className="mt-4 text-xl font-semibold">YOUR CART IS EMPTY</h2>
          <p className="text-gray-500">sign in to view your cart and start shopping</p>
          <div className="mt-4 space-x-2">
            <button className="bg-black text-white">SIGN IN / REGISTER</button>
            <button className="bg-black text-white">SHOP NOW</button>
          </div>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-4">You Might Like To Fill It With</h3>
          <div className="grid grid-cols-5 gap-4">
            <div className="w-full">
              <div>
                <img
                  alt="Product Image"
                  className="w-full"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <p className="text-sm mt-2">4Pcs Tempered Glass Compatible...</p>
                <p className="font-bold">
                  $1.84 <span className="text-sm text-red-500">-44%</span>
                </p>
              </div>
            </div>
            <div className="w-full">
              <div>
                <img
                  alt="Product Image"
                  className="w-full"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <p className="text-sm mt-2">63XL Cartridge Combo Pack Replacement...</p>
                <p className="font-bold">$12.80</p>
              </div>
            </div>
            <div className="w-full">
              <div>
                <img
                  alt="Product Image"
                  className="w-full"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <p className="text-sm mt-2">100M Crystal Elastic String For Jewelry Making...</p>
                <p className="font-bold">
                  $1.44 <span className="text-sm text-red-500">-10%</span>
                </p>
              </div>
            </div>
            <div className="w-full">
              <div>
                <img
                  alt="Product Image"
                  className="w-full"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <p className="text-sm mt-2">Waterproof Eyelash Glue 5ml...</p>
                <p className="font-bold">
                  $1.28 <span className="text-sm text-red-500">-20%</span>
                </p>
              </div>
            </div>
            <div className="w-full">
              <div>
                <img
                  alt="Product Image"
                  className="w-full"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <p className="text-sm mt-2">1set 3pcs Simple & Fashionable...</p>
                <p className="font-bold">
                  $2.08 <span className="text-sm text-red-500">-20%</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

   
