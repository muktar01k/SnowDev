import Logo from "../assets/logo.png"



export const Futter = () => {

    return (
        <div className="bg-[#211e39] h-[20rem] mt-[8rem]">
            {/* <div className="">  */}
            <div className="w-[10rem] ml-[20rem]">
                <img src={Logo} alt="" />
            </div>
            <div className="flex justify-center gap-4 mt-[1rem] text-[grey] text-xl font-Josefin Sans">
                <p>Home</p>
                <p>About</p>
                <p>Contact us</p>
                <p>Location</p>
                <p>Portfolio</p>
                <p>Payment</p>
            </div>
            <hr className="w-[40rem] ml-[5rem] mt-[2rem]" />
            <p className="text-[black] text-xl font-Josefin Sans ml-[12rem] mt-[1rem]">Copyright 2023 snowdev All well reserved</p>
            {/* </div>  */}
        </div>
    )
}