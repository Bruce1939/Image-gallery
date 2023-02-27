// Library imports
import { IoMdClose } from "react-icons/io";
import {
    AiOutlineInstagram,
    AiOutlineLike,
    AiOutlineShareAlt,
    AiOutlineInfoCircle,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Modal = ({ photo, closeModal }) => {
    return (
        <div className="h-screen w-screen absolute inset-0 z-[1000000] bg-[#232323] overscroll-contain flex items-center justify-center">
            <div
                onClick={() => closeModal(false)}
                className="flex items-center justify-center border rounded-full bg-slate-50 absolute top-5 right-5 p-2 cursor-pointer z-30"
            >
                <button>
                    <IoMdClose />
                </button>
            </div>
            <div className="border rounded-md border-[#141414] bg-[#141414] md:w-[50%] w-full text-slate-50 font-semibold">
                <div className="relative">
                    <img
                        src={photo.urls.thumb}
                        alt=""
                        className="max-h-96 w-full "
                    />
                    <button className="flex items-center bg-transparent absolute bottom-5 left-5 text-sm font-normal px-4 py-2 rounded border">
                        <AiOutlineShareAlt />{" "}
                        <span className="ml-2">Share</span>
                    </button>

                    <button className="flex items-center bg-transparent absolute bottom-5 left-32 text-sm font-normal px-4 py-2 rounded border">
                        <AiOutlineInfoCircle />{" "}
                        <span className="ml-2">Info</span>
                    </button>
                    <button className="bg-green-500 absolute bottom-5 right-5 text-sm font-normal px-4 py-2 rounded border border-green-500">
                        Download
                    </button>
                </div>

                <div className="md:flex items-center my-5 text-xs">
                    <div className="flex w-[30%] items-center ml-2">
                        <img
                            src={photo.user.profile_image.small}
                            alt=""
                            className="border-0 rounded-full border-[#141414]"
                        />
                        <div className="mx-2 font-semibold text-slate-50">
                            <h1>{photo.user.name}</h1>
                            <h1>@{photo.user.username}</h1>
                        </div>
                    </div>
                    <div className="flex items-start justify-start ml-5 my-5">
                        {photo.user.social.instagram_username && (
                            <p className="flex items-center">
                                <AiOutlineInstagram />/
                                {photo.user.social.instagram_username}
                            </p>
                        )}
                        {photo.user.social.instagram_username && (
                            <p className="flex items-center ml-8">
                                <FiTwitter />/
                                {photo.user.social.instagram_username}
                            </p>
                        )}
                    </div>
                    <div className="w-[30%] font-semibold text-slate-50 flex items-center md:justify-end mx-5">
                        <AiOutlineLike color="white" />
                        <h1 className="ml-2">{photo.likes} Likes</h1>
                    </div>
                </div>
                <div className="mx-5">
                    <h1 className="text-sm border rounded border-slate-800 px-2 py-1 inline-block bg-slate-500">
                        Photo description
                    </h1>
                    <p className="text-xs mt-1 ml-2">{photo.alt_description}</p>
                    <h1 className="text-sm border rounded border-slate-800 px-2 mt-4 py-1 inline-block bg-slate-500">
                        User Bio
                    </h1>
                    <p className="text-xs mt-1 ml-2 mb-2">{photo.user.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
