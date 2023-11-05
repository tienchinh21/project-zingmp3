import ListItem from "~/modules/Home/components/ListItem";

const data = [
    { title: 'Bật tình yêu lên với giai điệu V-Pop làm bạn vui tươi cả ngày', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/0/e/9/00e936d9ebff9dafbd1c76da49ac7f9e.jpg' },
    { title: 'Nhớ nạp vitamin tích cực đều đặn mỗi ngày nhé', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/b/6/5/bb65218db438da6d265771d567ae355a.jpg' },
    { title: 'Cứ vui lên vì những âu lo rồi cũng sẽ qua thôi', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/e/8/83e83c4a068f0b994a99735e440b76df.jpg' },
    { title: 'Yêu đời hẳn ra cùng V-Pop Speed Up cực cuốn', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/6/f/1/06f1c6d7785e65704b6fc82d99a505ce.jpg' },
    { title: 'Nhạc quẩy quốc dân, lâng lâng tới bến', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/f/3/1/8f31a4ab282b3293da2604ba7374c25c.jpg' }
]
const ListLove = () => {

    return (
        <div className="playlist-section channel-section">
            <div className="container">
                <h3 className='title'>Một chút yêu đời</h3>
                <div className="carousel-wrapper">
                    <div className="carousel">
                        <div className="carousel__container">
                            {data.map((item, index) => (
                                <ListItem key={index} item={item} className="item-love" style={{ width: '20%' }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ListLove;