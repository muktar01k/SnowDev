
import Tastimonials from '../assets/tastimonials.png'
import Wall from '../assets/Wallpapper.png'
import { Afcons } from '../Shared/Data'
import { Africa } from '../Shared/Global'

const Downpart = () => {

  return (
    <div>

      {
        Afcons.map((Afcon) => (<Africa {...Afcon} />))
      }

      {/* <div className="">
        <h6 className='text-center mt-[1rem] text-3xl  font-bold'>I'm a global professional with experience working across Africa</h6>
        <div className="flex sm:flex sm:flex-col">
          <p className='w-[40rem] sm:w-[24.1rem] sm:ml-[1rem] ml-[5rem] mt-[5.8rem] sm:mt-[3rem] sm:text-[grey]  text-xl font-semibold sm:font-medium' >I'm a professional with a home base in Africa, but my work takes me all over the continent. I love exploring different cultures and collaborating with people from all walks of life. Whether I'm working in a bustling city or a remote village, I'm always inspired by the people I meet and the ideas we create together.</p>
          <img className='ml-[5rem] sm:ml-[0rem] mt-[4rem] w-[23rem]' src={Africa} alt="" />
        </div>
      </div> */}
      <div className="sm:mt-[2rem] md:mt-[2rem]">
        <div className="text-center text-3xl font-bold">
          <p>Together, we can achieve anything.</p>
        </div>
        <div className="md:ml-[15rem] sm:ml-[2.5rem] mt-[5rem] w-[20rem]">
          <img className='' src={Tastimonials} alt="" />
        </div>
      </div>
      <p className='text-center text-3xl font-bold md:mt-[3rem] sm:mt-[4rem]'>Reach Out To Us</p>
      <div className=" flex justify-center md:mt-[4rem] sm:mt-[2rem]">
        <div className="bg-[blue] md:w-[39rem] md:h-[13rem] flex rounded-[3rem] sm:w-[20rem] sm:h-[30rem] sm:rounded-[28px] sm:mr-[1rem]">
          mnhg
        </div>
      </div>
    </div>
  )
}

export default Downpart
