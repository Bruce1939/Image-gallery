// Library imports
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";

// Component imports
import Modal from "./Modal";

const Card = ({ photo }) => {
    const [openModal, setOpenModal] = useState(false);

    if (openModal) {
        document.body.classList.add("overflow-y-hidden");
    } else {
        document.body.classList.remove("overflow-y-hidden");
    }

    return (
        <>
            <a
                onClick={() => setOpenModal(true)}
                href="#body"
                className="border border-[#141414] rounded bg-[#141414]  mx-auto my-8 w-[90%]"
            >
                <img
                    src={photo.urls.thumb}
                    alt={photo.alt_description}
                    className="w-full object-contain border rounded-t border-[#141414]"
                />
                <div className="flex p-4 text-xs bg-[#141414]">
                    <div className="flex w-[70%] items-center">
                        <img
                            src={photo.user.profile_image.small}
                            alt=""
                            className="border-0 rounded-full border-[#141414]"
                        />
                        <div className="mx-4 font-semibold text-slate-50 ">
                            <h1>{photo.user.name}</h1>
                            <h1>@{photo.user.username}</h1>
                        </div>
                    </div>
                    <div className="w-[30%] font-semibold text-slate-50 flex items-center justify-end mx-5">
                        <AiOutlineLike color="white" />
                        <h1 className="ml-2">{photo.likes} Likes</h1>
                    </div>
                </div>
            </a>

            {openModal && <Modal photo={photo} closeModal={setOpenModal} />}
        </>
    );
};

export default Card;
