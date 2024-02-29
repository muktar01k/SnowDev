import Programmer from '../assets/programmer.jpg'
import Codeset from '../assets/codeset.jpg'
import Macset from '../assets/macset.jpg'

export const Details = ({ text }) => {
    return (
        <div>
            <a href="">{text}</a>
        </div>
    )
}

export const WelcomeText = ({ text2, text3, text4 }) => {
    return (
        <div className=" justify-center text-center mt-[5rem] h-[40rem] static md:h-[37rem] smxx:h-[44rem]">
            <div className="smxx:ml-[1rem] ">
                <h2 className='text-8xl font-Josefin Sans font-semibold sm:text-3xl pr-[2rem] md:text-5xl md:pl-[4rem]'>{text2} </h2>
                <h1 className='lg:text-8xl font-bold mt-[1rem] sm:text-6xl pr-[2rem] md:text-5xl md:pl-[4rem] smxx:pl-[1rem]'>{text3}</h1>
            </div>

            <p className=' ml-[9rem] text-[grey] font-medium sm:mt-[2rem] sm:text-xl sm:w-[25rem] sm:ml-[1rem] md:w-[45rem] md:text-2xl md:ml-[2.5rem] smxx:w-[23rem] smxx:w-[21rem]'>{text4}</p>

            <div className="justify-center gap-[8rem] mt-[1rem] smxx:mt-[2rem] flex  md:flex md:gap-[4rem] md:justify-center">
                <img className=' rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 w-[20rem] h-[13rem] ml-[0.5rem] mt-[1rem]' src={Programmer} alt="ImagePcture1" />
                <img className=' md:rounded-r-3xl rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden md:w-[20rem] md:h-[13rem] md:ml:-[3rem] md:mt-[1rem] md:border-indigo-500 md:border-[0.5rem] md:rounded-t-3xl md:rounded-b-3xl' src={Codeset} alt="ImagePcture1" />
                <img className=' w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 hidden' src={Macset} alt="ImagePcture1" />
            </div>
        </div>
    )
}

