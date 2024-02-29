


export const DivCard = ({ words1, words2 }) => {

    return (
        <div className="bg-[red] flex justfy-center ml-[5rem] sm:ml-[2.3rem] mt-[2rem] cursor-pointer w-[35rem] sm:w-[22rem]  sm:h-[20rem] rounded-xl   h-[10rem]  pt-[0.5rem] sm:shadow-lg sm:shadow-[#e9eefc] md:w-[22rem] md:ml-[2rem] md:h-[22rem]">
            {/* <div className="bg-[grey] w-[7rem] pl-[2rem] h-[7rem] pt-[2rem] rounded-full mt-[1rem] sm:hidden">
                    <img className='w-[3rem]' src={Service} alt="" />
            </div> */}
            <div className="mt-[1rem] sm:pl-[1rem] md:pl-[1rem] ">
                <h4 className='text-3xl font-semibold pl-[2rem] text-[grey] md:pl-[2rem] '>{words1}</h4>
                <p className='text-2xl w-[23rem] sm:w-[20rem] sm:pl-[2rem] sm:pt-[1rem] md:w-[17rem] md:pl-[3rem] '>{words2}</p>
                <button className="sm:mt-[2rem] md:mt-[3rem] sm:ml-[5rem] bg-[yellow] sm:w-[10rem] sm:h-[3rem] rounded-full animate-bounce md:h-[4rem] md:w-[11rem] md:ml-[5rem]">Contact us &#8594;</button>
            </div>
        </div> 


    //        <div className=" flex justfy-center ml-[5rem] sm:ml-[2.3rem] mt-[rem] cursor-pointer w-[35rem] sm:w-[22rem]  sm:h-[20rem] rounded-xl  bg-[red] h-[10rem] pl-[2rem] pt-[0.5rem]  ">
    //      <div className="bg-[grey] w-[7rem] pl-[2rem] h-[7rem] pt-[2rem] rounded-full mt-[1rem] sm:hidden">
    //              <img className='w-[3rem]' src={Service} alt="" />
    //         </div> 
    //     < div className="mt-[1rem]" >
    //             <h4 className='text-3xl font-semibold pt-[0.5rem] text-[grey] '>{words1}</h4>
    //             <p className='text-2xl w-[23rem] sm:w-[20rem] sm:mr-[3rem]'>{words2}</p>
    //         </div >
    //  </div> 

    )
}







// const Experts = ({ Service, write1, write2, secondwrite1, secondwrite2 }) => {

//     return (

//         <div onClick={ToggleWeb} className=" flex justfy-center ml-[5rem] sm:ml-[2.3rem] mt-[rem] cursor-pointer w-[35rem] sm:w-[22rem]  sm:h-[20rem] rounded-xl  bg-[red] h-[10rem] pl-[3rem] pt-[0.5rem]  ">
//             <div className="bg-[grey] w-[7rem] pl-[2rem] h-[7rem] pt-[2rem] rounded-full mt-[1rem] sm:hidden">
//                 <img className='w-[3rem]' src={Service} alt="" />
//             </div>
//             <div className="mt-[1rem]">
//                 <h4 className='text-3xl font-semibold pt-[0.5rem] text-[grey] '>{write1}</h4>
//                 <p className='text-2xl w-[23rem] sm:w-[20rem] sm:mr-[3rem]'>{write2}</p>
//             </div>
/* {
    Togglemodal && (
        <div className="fixed top-0 flex  h-full justify-center sm:wfull sm:pt-[55rem]">
            <div className="bg-[white] shadow-2xl w-[50rem] h-[20rem] rounded-md mt-[10rem] text-2xl font-semibold pt-[3rem] text-center sm:w-[20rem]">
                <p>{secondwrite1}</p>
                <p className='pt-[2rem]'>{secondwrite2}</p>

            </div>
        </div>
    )
} */
//         </div>


//     )
// }

// export default Experts