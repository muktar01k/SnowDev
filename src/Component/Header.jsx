// import { Link } from 'react-router-dom'
import Codeset from '../assets/codeset.jpg'
import Logo from '../assets/logo.png'
import Macset from '../assets/macset.jpg'
// import Programmer from '../assets/programmer.jpg'
import Wall from '../assets/Wallpapper.png'
import { useState } from 'react'
import Button from '../Shared/Button'
import { NavDetails, WelcomeDetails, WelcomePictures } from '../Shared/Data'
import { Details, WelcomeText } from '../Shared/Cards'
// import { WelcomeImages } from '../Shared/ImageData'

const Header = () => {
    const [toggleham, setToggleham] = useState(false)

    function Hamburger() {
        setToggleham(!toggleham)
    }


    return (

        <div className="">
            <div className='bg-[#ebf9ff]'>
                <nav className=' flex  gap-[5rem]  md:gap-[25rem]'>
                    <div className='w-[7rem] mt-[1rem] sm:mt-[2rem] w-[7rem] ml-[1rem]  h-[7rem] md:w-[10rem] '>
                        <img className='' src={Logo} alt="" />
                    </div>
                    <div className=' '>
                        <div onClick={Hamburger} className="w-[2rem] h-[3rem] ml-[8rem] mt-[4rem] bg-[red] p-0 md:w-[3rem]">
                            <img src={Wall} alt="" />
                        </div>
                        {toggleham && (
                            <div className="sm:absolute mt-[2rem]  ">
                                <div className='text-xl pt-[3rem] text-lg   text-[grey] sm:flex sm:flex-col sm:gap-[1rem] bg-[white] sm:rounded-xl sm:w-[20rem]'>
                                    {
                                        NavDetails.map((NavDetail) => (<Details {...NavDetail} />))
                                    }

                                    {/* <a href="">About</a>
                                    <a href="">Location</a>
                                    <a href="">Sevice</a>
                                    <a href="">Portfolio</a>
                                    <a href="">Payment</a> */}
                                    <Button className='h-[3rem] ml-[3rem]  bg-[orange] mt-[2.5rem] mb-[1rem] w-[10rem]  rounded-3xl sm:ml-[0.2rem] sm:w-[8rem]  ' Value='Contact Us' />
                                    {/* <button className='h-[3rem] ml-[3rem]  bg-[orange] mt-[2.5rem] mb-[1rem] w-[10rem]  rounded-3xl sm:ml-[0.2rem] sm:w-[8rem]  '>Contact Us</button> */}
                                </div>
                            </div>
                        )
                        }


                    </div>

                </nav>
                {/* <div className="justify-center text-center mt-[5rem] h-[50rem] sm:static ">
                    <h2 className='text-8xl font-Josefin Sans font-semibold sm:text-3xl sm:pr-[2rem]'>Hello, Welcome To</h2>
                    <h1 className='text-8xl font-bold mt-[1rem] sm:text-6xl sm:pr-[2rem]'>SNOWDEV</h1>
                    <p className='w-[70rem] ml-[9rem] text-[grey] font-medium mt-[2rem] text-xl sm:w-[25rem] sm:ml-[0.5rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur cum accusamus.🤪 Fuga quo aliquid dolor repudiandae assumenda reprehenderit nesciunt magni est. Non pariatur 🥰 vero perspiciatis ipsa voluptatum mollitia eligendi!
                        Culpa illo 🥰repellendus facilis vel dolorum adipisci quas ut</p>
                    <div className="flex justify-center gap-[8rem] mt-[3rem] sm:flex sm:flex-col">
                        <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:w-[20rem] sm:h-[13rem] sm:ml-[3rem] sm:mt-[3rem]' src={Programmer} alt="" />
                        <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden' src={Codeset} alt="" />
                        <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden' src={Macset} alt="" />
                    </div> 000
                </div> */}
                {
                    WelcomeDetails.map((WelcomeDetail) => (<WelcomeText {...WelcomeDetail} />))
                }
                {/* <div className="flex justify-center gap-[8rem] mt-[3rem] sm:flex sm:flex-col">
                    <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:w-[20rem] sm:h-[13rem] sm:ml-[3rem] sm:mt-[3rem]' src={Programmer} alt="" />
                    <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden' src={Codeset} alt="" />
                    <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden' src={Macset} alt="" />
                </div> */}
            </div>
        </div>
    )
}

export default Header