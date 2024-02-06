import Codeset from '../assets/codeset.jpg'
import Logo from '../assets/logo.png'
import Macset from '../assets/macset.jpg'
import Programmer from '../assets/programmer.jpg'
import Service from '../assets/service-icon3.png'
import App from '../assets/app.png'
import Head from '../assets/head.png'
import Head2 from '../assets/head2.png'
import Head3 from '../assets/head3.png'
import Think from '../assets/think.png'
import Light from '../assets/light.png'
import Africa from '../assets/africa.svg'
import Tastimonials from '../assets/tastimonials.png'
import Wall from '../assets/Wallpapper.png'
import { useState } from 'react'


const Home = () => {

  const [Togglemodal, setTogglemodel] = useState(false)
  const [Togglemodal2, setTogglemodel2] = useState(false)


  function ToggleWeb() {
    setTogglemodel(!Togglemodal)
  }
  function Toggleweb2() {
    setTogglemodel2(!Togglemodal2)
  }

  return (
    <div>
      <div className='bg-[blue]'>
        <nav className=' flex pl-[5rem] w-full sm:gap-[6rem] '>
          <div className='w-[7rem] mt-[1rem] '>
            <img className='' src={Logo} alt="" />
          </div>
          <div className='text-xl ml-[5rem] pt-[3rem] text-lg space-x-8 text-[grey] sm:flex sm:flex-col sm:gap-[1rem]'>
          
            <a href="">About</a>
            <a href="">Testimonals</a>
            <a href="">Portfolio</a>
            <a href="">Sevice</a>
            <a href="">Payment</a>
            <a href="">Location</a>
            <div>
              <button className='h-[3rem]  ml-[3rem] bg-[orange] mt-[2.5rem] mb-[1rem] w-[10rem]  rounded-3xl sm:ml-[0.2rem] sm:w-[8rem]  '>Contact Us</button>
            </div>
          </div>

        </nav>
        <div className="justify-center text-center mt-[3rem] h-[50rem]">
          <h2 className='text-8xl font-Josefin Sans font-semibold sm:text-3xl sm:pr-[2rem]'>Hello, Welcome To</h2>
          <h1 className='text-8xl font-bold mt-[1rem] sm:text-6xl sm:pr-[2rem]'>SNOWDEV</h1>
          <p className='w-[70rem] ml-[9rem] text-[grey] font-medium mt-[2rem] text-xl sm:w-[25rem] sm:ml-[0.5rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur cum accusamus.🤪 Fuga quo aliquid dolor repudiandae assumenda reprehenderit nesciunt magni est. Non pariatur 🥰 vero perspiciatis ipsa voluptatum mollitia eligendi!
            Culpa illo 🥰repellendus facilis vel dolorum adipisci quas ut</p>
          <div className="flex justify-center gap-[8rem] mt-[3rem] sm:flex sm:flex-col">
            <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:w-[20rem] sm:h-[13rem] sm:ml-[3rem] sm:mt-[3rem]' src={Programmer} alt="" />
            <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden' src={Codeset} alt="" />
            <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden'  src={Macset} alt="" />
          </div>
        </div>

      </div>
      <div className=" mt-[5rem]">
        <h3 className='text-4xl text-center font-Josefin Sans font-semibold mt-[2rem] sm:text-3xl'>My Experties</h3>
        <p className='text-3xl text-center font-bold sm:text-2xl sm:w-[25rem]'>We deliver Top Notch In Any Of This Range</p>
        <div className="flex divide-x-4 mt-[2rem]">

          <div onClick={ToggleWeb} className=" flex ml-[5rem] mt-[rem] cursor-pointer w-[35rem] rounded-full bg-[whitesmoke] h-[10rem] pl-[3rem] pt-[0.5rem]">
            <div className="bg-[grey] w-[7rem] pl-[2rem] h-[7rem] pt-[2rem] rounded-full mt-[1rem]">
              <img className='w-[3rem] ' src={Service} alt="" />
            </div>
            <div className="mt-[1rem] pl-[1rem] ">
              <h4 className='text-2xl font-semibold pt-[0.5rem] text-[grey]'>Web Development</h4>
              <p className='text-2xl w-[23rem] '>We have the expertise to create your ideal website 🙃.</p>
            </div>
            {
              Togglemodal && (
                <div className="w-full fixed top-0 flex backdrop-blur-md h-full justify-center ">
                  <div className="bg-[white] shadow-2xl w-[50rem] h-[20rem] rounded-md mt-[10rem] text-2xl font-semibold pt-[3rem] text-center">
                    <p>Web Development</p>
                    <p className='pt-[2rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio reprehenderit atque nulla eum dicta aliquam cupiditate vel impedit minima. Animi illo corrupti enim, excepturi a voluptatem porro nesciunt perspiciatis accusantium.</p>

                  </div>
                </div>
              )
            }
          </div>

          <div onClick={Toggleweb2} className="">
            <div className="flex ml-[4rem] w-[34rem] bg-[wheat] cursor-pointer rounded-full h-[10rem] pl-[3rem] pt-[0.5rem]">
              <div className="bg-[grey] w-[7rem] pl-[2rem] h-[7rem] pt-[2rem] rounded-full mt-[1rem]">
                <img className='w-[3rem] ' src={App} alt="" />
              </div>
              <div className="mt-[1rem] pl-[1rem]">
                <h4 className='text-2xl font-semibold pt-[0.5rem] text-[grey]'>App Management</h4>
                <p className='text-2xl w-[23rem] '>We have experts ready to make best mobile apps 🙃.</p>
              </div>

            </div>
          </div>
          {
            Togglemodal2 && (
              <div className="fixed top-0 w-full backdrop-blur-md h-full justify-center ">
                <div className="bg-[white] shadow-2xl w-[50rem] h-[20rem] rounded-md mt-[10rem] text-2xl font-semibold pt-[3rem] text-center ml-[15rem]">
                  <p>App Management</p>
                  <p className='pt-[2rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque rem quo modi ipsam deserunt, quisquam voluptatem ipsum similique voluptatum, commodi voluptates nam voluptas possimus, natus deleniti. Consequuntur numquam beatae magni!</p>
                </div>

              </div>
            )
          }
        </div>


        <hr className='mt-[3rem] w-[75rem] ml-[5rem] h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700' />
        <div className="text-center text-3xl  font-semibold">
          <h5>A creative thinker and problem solver, ready to help your company succeed</h5>
          <p className='ml-[5rem] text-[grey] font-medium mt-[2rem] text-xl w-[75rem]'>I'm a creative thinker with a knack for solving problems. I'm passionate about helping businesses achieve their goals through innovative solutions. I'm skilled in finding new and creative ways to solve complex problems, and I love bringing ideas to life. I'm eager to work with businesses that are ready to take their company to the next level. If you're looking for someone who can help you reach your goals, I'm here to help</p>
          <div className="flex justify-center mt-[3rem]">
            <img className='w-[15rem]' src={Head} alt="" />
            <img className='w-[15rem]' src={Light} alt="" />
            <img className='w-[15rem]' src={Head3} alt="" />
            <img className='w-[15rem]' src={Think} alt="" />
            <img className='w-[15rem]' src={Head2} alt="" />
          </div>
        </div>
      </div>
      <div className="">
        <h6 className='text-center mt-[1rem] text-4xl  font-bold'>I'm a global professional with experience working across Africa</h6>
        <div className="flex">
          <p className='w-[40rem] ml-[5rem] mt-[5.8rem] text-2xl font-semibold' >I'm a professional with a home base in Africa, but my work takes me all over the continent. I love exploring different cultures and collaborating with people from all walks of life. Whether I'm working in a bustling city or a remote village, I'm always inspired by the people I meet and the ideas we create together. I'm passionate about Africa and all its potential, and I'm excited to share my experiences with you.</p>
          <img className='ml-[5rem] mt-[4rem] w-[23rem]' src={Africa} alt="" />
        </div>
      </div>
      <div className="">
        <div className="text-center text-4xl font-bold">
          <p>Together, we can achieve anything.</p>
        </div>
        <div className="ml-[8rem] mt-[5rem]">
          <img className=' ' src={Tastimonials} alt="" />
        </div>
      </div>


    </div>

  )
}

export default Home