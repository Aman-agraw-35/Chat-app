"use client";
import Image from "next/image"

type Props = {
    size? : number 
}

const Loading = ({size = 100 }: Props) => {
  return (
    <div className="h-full w-full flex justify-center items-center ">
       <Image 
       src = "/logo.svg" 
       alt="logo heightr"
       height={size}
       width={size}
       className="animate-pulse duration-500 "
       />
    </div>
  )
}

export default Loading;