import React , {useState} from 'react'
import Staff from '../staff/staff'
import Footer from '../Footer/footer'
import Navbar from '../navbar/navbar'
import findicon from "../../assets/magnifier.png";
import searchHook from "../../Hooks/SearchHook.js";
import {UseAuthContext} from "../../Context/AuthContext.jsx";
import {useSelector} from "react-redux";
import star from "../../assets/star.png";
import {Link} from "react-router-dom";
function findoc() {

  // my hook
  const {loadingSearchDoc , searchDoc} = searchHook();

  //my context
   const {AuthUser}= UseAuthContext();

  // my states
  const [keyword , setKeyword] = useState("")

  // my handles
  const HandleSearch = async ()=>{
        const data = await searchDoc(keyword , AuthUser.type);
        console.log(data);
  }

  //my redux state
  const SearchedDocs = useSelector(state=>state.SearchReducer.SearchedDoctors);

  return (
    <div  className='color-main'>
        <div className='mx-36 h-full  flex flex-col gap-10'>
            <Navbar/>
            <div className='flex flex-col gap-7 pt-20 items-center justify-center'>
                <p className='text-xl poppins-bold'>Find a doctor</p>
                <div className='flex  rounded-lg'>
                    <input  className='border-class focus:outline-none rounded-l-lg w-80 py-2 px-3 text-sm' type="text" onChange={e=>setKeyword(e.target.value)}/>
                    <button className='px-5 rounded-r-lg secondary-button flex items-center justify-center' onClick={HandleSearch}>
                        <img className='w-5'  src={findicon} alt="" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-x-12">
                {loadingSearchDoc ?
                    <span className="loading loading-spinner loading-lg color-bookbutton absolute top-[50%] right-[50%]"></span>
                    :

                    SearchedDocs && SearchedDocs.length > 0 ?
                        SearchedDocs.map(doc=> (
                            <div className="flex flex-col gap-6">
                                <div className="color-mediumblue rounded-xl flex justify-center items-center ">
                                    <img className="w-8/12" src={doc.photo} alt="doc1"/>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-1">
                                        <p className="poppins-bold ">Dr. {doc.username}</p>
                                        <p className="poppins-medium color-speciality opacity-70 text-sm">
                                            {doc.speciality}
                                        </p>
                                    </div>
                                    <div className="flex gap-3 justify-center items-center self-start">
                                        <img className="w-6 h-6" src={star} alt="star"/>
                                        <div className="flex items-center justify-between gap-1">
                                            <p className="poppins-semibold ">
                                                {doc.averageRating}
                                            </p>
                                            {doc.reviewsNumber !== 0 &&
                                                <p className="poppins-semibold  opacity-70">
                                                    ({doc.reviewsNumber})
                                                </p>}

                                        </div>

                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="poppins-medium opacity-70">Brain and Nerve Specialist</p>
                                    <button
                                        className="color-lightgreen secondary-button py-1 px-5 rounded-md poppins-semibold text-white text-md">
                                        <Link
                                            to={"/Doctor/" + doc.username}>{AuthUser && AuthUser.type === "Patient" ? "Book" : "Look"}</Link>
                                    </button>
                                </div>
                            </div>
                        ))

                        : null

                }

            </div>
            <Footer/>
        </div>

    </div>
  )
}

export default findoc