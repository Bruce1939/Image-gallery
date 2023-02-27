// Component imports
import Card from "./Card";

const Photos = ({ photos }) => {
    const photoList = photos.map((photo) => (
        <Card key={photo.id} photo={photo} />
    ));

    return (
        <div className="flex flex-col md:grid md:grid-cols-3 md:items-start md:mx-[10%]">
            {photoList}
        </div>
    );
};

export default Photos;
