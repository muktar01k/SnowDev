
import MapGlobal from '../assets/africa.svg'

export const Africa = ({ head1, head2 }) => {
  return (
    <div className="">
      <h6 className='text-center mt-[1rem] text-3xl  font-bold md:text-4xl'>{head1}</h6>
      <div className="flex sm:flex sm:flex-col">
        <p className='w-[40rem] sm:w-[24.1rem] sm:ml-[1rem] md:ml-[2rem] mt-[5.8rem] sm:mt-[3rem] sm:text-[grey]  text-xl font-semibold sm:font-medium' >{head2}</p>
        <img className='ml-[5rem] sm:ml-[0rem] mt-[4rem] w-[23rem] md:ml-[3rem]' src={MapGlobal} alt="" />
      </div>
    </div>
  )
}