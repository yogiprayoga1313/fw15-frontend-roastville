import React from "react"
import Image from "next/image"
import Coffee from "../../../public/coffee.png"
import { FiSearch, FiUser } from "react-icons/fi"

export default function Chat() {
  return (
    <>
      <nav className="flex w-full justify-between items-center px-36 h-24 bg-white">
        <div className="flex justify-center items-center gap-5">
          <div>
            <Image src={Coffee} alt="coffee_image"></Image>
          </div>
          <div className="text-black tracking-wide font-extrabold">
            Coffee Shop
          </div>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-5 text-gray-600">
            <li>Home</li>
            <li>Product</li>
            <li>Your Cart</li>
            <li>History</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div>
            <button className="text-black">Login</button>
          </div>
          <div>
            <button className="btn btn-primary normal-case text-white rounded-3xl">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full h-full bg-gray-400">
        <div className="flex justify-center gap-4 p-20">
          <div className="flex flex-col gap-11 max-w-[448px] min-h-[1000px] rounded-xl px-12 py-14 bg-primary">
            <div className="flex gap-3 px-9 py-5 rounded-full bg-gray-200">
              <FiSearch size={25} />
              <input
                className="bg-transparent outline-none"
                type="text"
                placeholder="Search Chat"
              />
            </div>
            <div>
              <p className="text-white text-center text-[15px] font-semibold">
                Choose a staff you want to talk with
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 py-5 border-b border-white">
                <div>
                  <FiUser size={50} color="white" />
                </div>
                <div className="flex flex-col gap-3 text-white">
                  <p className="text-xl font-semibold">Jason</p>
                  <p className="text-[15px]">
                    Hey, I’m Jason, Let’s talk and share what’s on your
                    thoughts!
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-5 border-b border-white">
                <div>
                  <FiUser size={50} color="white" />
                </div>
                <div className="flex flex-col gap-3 text-white">
                  <p className="text-xl font-semibold">Cheryn</p>
                  <p className="text-[15px]">
                    Hey, I’m Cheryn, can I help you? Just chat me if you have
                    some trouble in ordering, happy shopping!
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-5 border-b border-white">
                <div>
                  <FiUser size={50} color="white" />
                </div>
                <div className="flex flex-col gap-3 text-white">
                  <p className="text-xl font-semibold">Lou</p>
                  <p className="text-[15px]">
                    Hey, I’m Lou, I’ll here to help you, just talk to me and we
                    solve the problem. Have a good day!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 max-w-[570px] h-full">
            <div className="flex flex-col gap-12 bg-white px-[46px] py-7 rounded-xl">
              <div>
                <p className="text-3xl font-semibold">Room Chat</p>
              </div>
              <div className="flex items-center gap-4 py-5">
                <div>
                  <FiUser size={50} />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <p className="text-xl font-semibold">Jason</p>
                    <p className="text-[10px] text-[#9F9F9F]">02.14 PM</p>
                  </div>
                  <p className="text-[15px]">
                    Hey jason, I can’t find the promo section. Can u tell me
                    where is it?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center h-[141px] bg-white rounded-xl">
              <p className="max-w-[371px] text-center text-[15px] text-gray-400">
                You have no conversation, start chat other staff! Have a good
                day!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}