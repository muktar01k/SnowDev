import Logo from "../assets/logo.png"



export const Futter = () => {

    return (
        <div className="bg-[#211e39] h-[20rem] mt-[8rem] sm:h-[30rem] sm:w-full">
            {/* <div className="">  */}
            <div className="w-[10rem] ml-[20rem] sm:ml-[9rem] sm:w-[8rem] sm:pt-[2rem]">
                <img src={Logo} alt="" />
            </div>
            <div className="flex justify-center gap-4 mt-[1rem]  text-xl font-Josefin Sans sm:w-[22rem] sm:ml-[2rem] smxx:ml-[0.5rem]">
                <p className="text-[orange] hover:text-[orange]">Home</p>
                <p className="text-[grey]">About</p>
                <p className="text-[grey]">Contact us</p>
                <p className="text-[grey]">Location</p>
                <p className="sm:hidden text-[grey]">Portfolio</p>
                <p className="sm:hidden text-[grey]">Payment</p>
            </div>
            <hr className="w-[40rem] ml-[5rem] mt-[2rem] sm:3rem sm:ml-[2rem] sm:w-[22rem] sm:mt-[12rem] smxx:w-[20rem] smxx:ml-[1.5rem]" />
            <p className="text-[black] text-xl font-Josefin Sans ml-[12rem] mt-[1rem] sm:ml-[2rem] smxx:ml-[1rem]">Copyright 2024 snowdev All well reserved</p>
            {/* </div>  */}
        </div>
    )
}


