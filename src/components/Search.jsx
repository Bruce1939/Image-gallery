// Assets imports
import mountains from "./../images/mountains.jpg";

const Search = ({ hide }) => {
    return (
        !hide && (
            <div className="w-full relative text-center">
                <div className="w-[80%] absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%]">
                    {" "}
                    <h1 className="text-slate-50 text-2xl font-bold text-outline">
                        Download High Quality Images by creators
                    </h1>
                    <p className="text-slate-50 mt-5 text-outline">
                        over 2.4 million+ stock Images by our talented community
                    </p>
                    <input
                        type="text"
                        placeholder="Search high resolution Images, categories, wallpapers"
                        className="w-[80%] outline-none p-1 mt-5 border border-gray-300 rounded px-4 py-3 text-sm"
                    />
                </div>
                <img src={mountains} alt="" className="w-full max-h-96" />
            </div>
        )
    );
};

export default Search;
