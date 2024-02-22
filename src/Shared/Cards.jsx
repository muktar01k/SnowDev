import Programmer from '../assets/programmer.jpg'
import Codeset from '../assets/codeset.jpg'
import Macset from '../assets/macset.jpg'

export const Details = ({text}) => {
    return (
        <div>
            <a href="">{text}</a>
        </div>
    )
}

export const WelcomeText = ({ text2, text3, text4}) => {
    return (
        <div className="justify-center text-center mt-[5rem] h-[40rem] sm:static">
            <div className=" ">
                <h2 className='text-8xl font-Josefin Sans font-semibold sm:text-3xl sm:pr-[2rem]'>{text2} </h2>
                <h1 className='text-8xl font-bold mt-[1rem] sm:text-6xl sm:pr-[2rem]'>{text3}</h1>
            </div>
            <p className='w-[70rem] ml-[9rem] text-[grey] font-medium mt-[2rem] text-xl sm:w-[25rem] sm:ml-[0.5rem] '>{text4}</p>
            <div className="flex justify-center gap-[8rem] mt-[1rem] sm:flex sm:flex-col">
                <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:w-[20rem] sm:h-[13rem] sm:ml-[3rem] sm:mt-[1rem]  ' src={Programmer} alt="ImagePcture1" />
                <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden' src={Codeset} alt="ImagePcture1" />
                <img className='w-[20rem] rounded-r-3xl rounded-b-3xl rounded-t-3xl border-[0.5rem] border-indigo-500 sm:hidden' src={Macset} alt="ImagePcture1" />
            </div>
        </div>
    )
}

