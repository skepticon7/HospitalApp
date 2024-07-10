import React from 'react';
import {Link} from "react-router-dom"
import star from "../../assets/star.png";
import {useSelector} from "react-redux";
import {UseAuthContext} from "../../Context/AuthContext.jsx";
function Staff({isLoading}) {
   //my context
    const {AuthUser} = UseAuthContext();

   //myb redux state
   const HighestDocs = useSelector(state=>state.HighestReducer.HighestRatedDoctors);

  return (
    <section id='staff' className='py-32 flex flex-col gap-16 justify-center items-center'>
      <h1 className='poppins-bold text-4xl'>Our staff</h1>
        {isLoading ? <p>Loading...</p> :
            HighestDocs ?
                <div className="flex gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="color-mediumblue rounded-xl flex justify-center items-center ">
                            <img className="w-8/12" src={HighestDocs[0].photo} alt="doc1" />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="poppins-bold ">Dr. {HighestDocs[0].username}</p>
                                <p className="poppins-medium color-speciality opacity-70 text-sm">
                                    {HighestDocs[0].speciality}
                                </p>
                            </div>
                            <div className="flex gap-3 justify-center items-center self-start">
                                <img className="w-6 h-6" src={star} alt="star" />
                                <div className="flex items-center justify-between gap-1">
                                    <p className="poppins-semibold ">
                                        {HighestDocs[0].averageRating}
                                    </p>
                                    {HighestDocs[0].reviewsNumber !== 0 &&
                                        <p className="poppins-semibold  opacity-70">
                                            ({HighestDocs[0].reviewsNumber})
                                        </p>}

                                </div>

                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="poppins-medium opacity-70">Brain and Nerve Specialist</p>
                            <button
                                className="color-lightgreen secondary-button py-1 px-5 rounded-md poppins-semibold text-white text-md">
                                <Link to={"Doctor/"+HighestDocs[0].username}>{AuthUser && AuthUser.type === "Patient" ? "Book" : "Look"}</Link>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="color-green rounded-xl flex justify-center items-center ">
                            <img className="w-8/12 " src={HighestDocs[1].photo} alt="doc2" />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="poppins-bold ">Dr. {HighestDocs[1].username}</p>
                                <p className="poppins-medium color-speciality text-sm opacity-70">
                                    {HighestDocs[1].speciality}
                                </p>
                            </div>
                            <div className="flex gap-3 justify-center items-center self-start">
                                <img className="w-6 h-6" src={star} alt="star"/>
                                <div className="flex items-center justify-between gap-1">
                                    <p className="poppins-semibold ">
                                        {HighestDocs[1].averageRating}
                                    </p>
                                    {HighestDocs[1].reviewsNumber !== 0 &&
                                        <p className="poppins-semibold  opacity-70">
                                            ({HighestDocs[1].reviewsNumber})
                                        </p>}

                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="poppins-medium opacity-70">Women’s Health Expert</p>
                            <button
                                className="color-lightgreen secondary-button py-1 px-5 rounded-md poppins-semibold text-white text-md">
                                <Link
                                    to={"Doctor/" + HighestDocs[1].username}>{AuthUser && AuthUser.type === "Patient" ? "Book" : "Look"}</Link>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="color-green rounded-xl flex justify-center items-center ">
                            <img className="w-8/12 " src={HighestDocs[2].photo} alt="doc2"/>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="poppins-bold ">Dr. {HighestDocs[2].username}</p>
                                <p className="poppins-medium color-speciality opacity-70 text-sm">
                                    {HighestDocs[2].speciality}
                                </p>
                            </div>
                            <div className="flex gap-3 justify-center items-center self-start">
                                <img className="w-6 h-6" src={star} alt="star"/>
                                <div className="flex items-center justify-between gap-1">
                                    <p className="poppins-semibold ">
                                        {HighestDocs[2].averageRating}
                                    </p>
                                    {HighestDocs[2].reviewsNumber !== 0 &&
                                        <p className="poppins-semibold  opacity-70">
                                            ({HighestDocs[2].reviewsNumber})
                                        </p>}

                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="poppins-medium opacity-70">Women’s Health Expert</p>
                            <button
                                className="color-lightgreen secondary-button py-1 px-5 rounded-md poppins-semibold text-white text-md">
                                <Link
                                    to={"Doctor/" + HighestDocs[2].username}>{AuthUser && AuthUser.type === "Patient" ? "Book" : "Look"}</Link>
                            </button>
                        </div>
                    </div>
                </div>


                : null

        }

    </section>
  );
}

export default Staff;
