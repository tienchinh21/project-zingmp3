import SongItem from "~/shared/components/PlayListSection/SongItem";

const PlayListSection = (props) => {
    return (
        <div className="playlist-section channel-section">
            <div className="container">
                <h3 className='title'>{props.titleWrapper}</h3>
                <div className="carousel-wrapper">
                    <div className="carousel">
                        <div className="carousel__container">
                            {props.data.map((item, index) => (
                                <SongItem key={index} item={item} className={props.className} style={props.style} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default PlayListSection;