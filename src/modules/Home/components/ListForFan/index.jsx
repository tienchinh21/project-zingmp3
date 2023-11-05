import ListItem from "~/modules/Home/components/ListItem";

import './index.css';

const data = [
    { title: '', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/1/8/8/71885ed637f8bfe634b4d370ae692cb8.jpg', single: ['Juky San,', ' Hà Anh Tuấn,', ' Hoàng Yến Chibi'] },
    { title: '', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/c/a/3/5ca3ac19d15d046ffc0cbc0b71390a74.jpg', single: ['Juky San,', ' Hà Anh Tuấn,', ' Hoàng Yến Chibi'] },
    { title: '', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/d/b/0/ddb03e5f43f72162e19d253b13049322.jpg', single: ['Juky San,', ' Hà Anh Tuấn,', ' Hoàng Yến Chibi'] },
    { title: '', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/8/7/0/b87093d7201c164981d6132ca0673745.jpg', single: ['Juky San,', ' Hà Anh Tuấn,', ' Hoàng Yến Chibi'] },
    { title: '', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/9/9/b/199ba9863a19c91c9d3d4ef78e31ae01.jpg', single: ['Juky San,', ' Hà Anh Tuấn,', ' Hoàng Yến Chibi'] }
]

const ListForFan = () => {

    return (
        <div className="playlist-section channel-section">
            <div className="container">
                <div className="media-fan">
                    <div className="media-left">
                        <a href="">
                            <img src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg" alt="" />
                        </a>
                    </div>
                    <div className="media-content">
                        <h3 className="subtitle">Vì bạn đã nghe</h3>
                        <h3 className="title">
                            <a href="">Acoustic Thư Giãn</a>
                        </h3>
                    </div>
                </div>
                <div className="carousel-wrapper">
                    <div className="carousel">
                        <div className="carousel__container">
                            {data.map((item, index) => (
                                <ListItem key={index} item={item} className='item-recommend' style={{ width: '20%' }} single={item.single} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListForFan;