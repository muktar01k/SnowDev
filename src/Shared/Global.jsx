
import MapGlobal from '../assets/africa.svg'
import Address from '../assets/address.png'
import Email from '../assets/email.png'
import Call from '../assets/call.png'

export const Africa = ({ head1, head2 }) => {
  return (
    <div className="">
      <h6 className='text-center mt-[1rem] text-3xl  font-bold md:text-4xl smxx:text-2xl smxx:mt-[2rem]'>{head1}</h6>
      <div className="flex sm:flex sm:flex-col">
        <p className='w-[40rem] sm:w-[24.1rem] sm:ml-[1rem] md:ml-[2rem] mt-[5.8rem] sm:mt-[3rem] sm:text-[grey] text-xl font-semibold sm:font-medium smxx:w-[20rem] smxx:ml-[1rem] ' >{head2}</p>
        <img className='ml-[5rem] sm:ml-[0rem] mt-[4rem] w-[23rem] md:ml-[3rem]' src={MapGlobal} alt="" />
      </div>
    </div>
  )
}

export const Reachout = ({ Address1,Address2,Address3,Address4,Address5,Address6 }) => {
  return (
    <div className="bg-[orange] md:w-[39rem] md:h-[13rem] flex rounded-[3rem] sm:w-[20rem] sm:h-[30rem] sm:rounded-[28px] sm:mr-[1rem] md:pl-[2rem] md:pt-[1rem] smxx:ml-[1rem]">
      <div className='sm:flex sm:flex-col md:flex md:gap-[4rem]'>
        <div className=' sm:mt-[1rem] sm:w-[20rem] md:w-[8rem]'>
          <img className='sm:w-[4rem] sm:ml-[8rem] md:w-[5rem]' src={Address} alt="" />
          <p className='text-xl font-semibold sm:ml-[8rem]'>{Address1}</p>
          <p className='text-xl sm:mr-[5rem] sm:ml-[4rem]'>{Address2}</p>
        </div>
        <div className=' sm:mt-[1rem] md:w-[10rem]'>
          <img className='sm:w-[4rem] sm:ml-[8rem] md:w-[5rem]' src={Email} alt="" />
          <p className='text-xl font-semibold sm:ml-[8rem]'>{Address3}</p>
          <p className='text-xl sm:mr-[5rem] sm:ml-[4rem]'>{Address4}</p>
        </div>
        <div className=' sm:mt-[1rem] md:w-[10rem]'>
          <img className='sm:w-[4rem] sm:ml-[8rem] md:w-[5rem]' src={Call} alt="" />
          <p className='text-xl font-semibold sm:ml-[8rem]'>{Address5}</p>
          <p className='text-xl sm:mr-[5rem] sm:ml-[5rem]'>{Address6}</p>
        </div>
      </div>
    </div>
  )
}