import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Photos from "./components/Photos";
import api from "./api/axios";
import id from "./constants/index";

function App() {
    const [photos, setPhotos] = useState([]);
    const [navOpen, setNavOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPhotos = async () => {
            setIsLoading(true);
            try {
                const response = await api.get(`/photos?client_id=${id}`);
                if (response.data && response.status === 200) {
                    setPhotos(response.data);
                }
            } catch (error) {
                console.log(error);
                setError("Something went wrong!!!");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    if (error)
        return (
            <p className="text-center text-xl font-bold text-red-600">
                {error}
            </p>
        );

    return (
        <div className="bg-[#232323]">
            <Navbar
                setPhotos={setPhotos}
                navOpen={navOpen}
                setNavOpen={setNavOpen}
                setIsLoading={setIsLoading}
                setError={setError}
            />
            <Search hide={navOpen} />

            {isLoading && (
                <p className="text-center text-xl font-bold text-gray-300">
                    Loading
                </p>
            )}

            <Photos photos={photos} />
        </div>
    );
}

export default App;
