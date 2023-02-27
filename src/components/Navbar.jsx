// Library imports
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

// Hook imports
import useDebounce from "../hooks/useDebounce";

// Api call Instance
import api from "../api/axios";

// Constants
import id from "../constants/index.js";

const Navbar = ({ setPhotos, navOpen, setNavOpen, setIsLoading, setError }) => {
    const [search, setSearch] = useState("");

    const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
        const fetchPhotos = async () => {
            setIsLoading(true);
            try {
                const response = await api.get(
                    `/search/photos?query=${debouncedSearch}&client_id=${id}`
                );
                if (response.data && response.status === 200) {
                    setPhotos(response.data.results);
                }
            } catch (error) {
                console.log(error);
                setError("Something went wrong!!!");
            } finally {
                setIsLoading(false);
            }
        };

        if (debouncedSearch) fetchPhotos();
    }, [debouncedSearch]);

    return (
        <nav className="bg-neutral-900 opacity-05 text-white">
            <div className="md:flex items-center justify-between p-2 px-6 w-[90%] mx-auto">
                <div className="flex justify-between items-center">
                    <p className="italic mx-4 font-extrabold text-lg">
                        Image Gallery
                    </p>
                    <button
                        className="z-50 md:hidden"
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        {!navOpen ? (
                            <RxHamburgerMenu />
                        ) : (
                            <IoMdClose color="white" />
                        )}
                    </button>
                </div>

                <input
                    type="text"
                    className="border  outline-none rounded w-full p-2 bg-zinc-500 text-white border-white transition-all duration-75 delay-75 mx-auto md:w-[50%] m-5 "
                    placeholder="Search Images here"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <ul className="md:flex hidden items-center justify-around font-bold text-sm w-[30%]">
                    <li>Explore</li>
                    <li>Collection</li>
                    <li>Community</li>
                </ul>
            </div>

            {/* Mobile Nav */}
            <ul
                className={`md:hidden fixed w-full top-0 overflow-y-auto bottom-0 bg-neutral-900 duration-500 font-bold text-sm ${
                    navOpen ? "left-0" : "left-[-100%]"
                } text-center pt-5`}
            >
                <li className="my-5">Explore</li>
                <li className="my-5">Collection</li>
                <li className="my-5">Community</li>
            </ul>
        </nav>
    );
};

export default Navbar;
