import ListItem from "~/modules/Home/components/ListItem";

const data = [
    { title: 'Nghe Hà Nhi tri ân người yêu cũ qua các bản Hit', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/0/c/a/f0ca3df4efc4bd6ed88312947d75b53d.jpg' },
    { title: 'Những câu hỏi khi say cùng Trung Quân và những Hit nổi', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/d/3/b/fd3be755d3e1b7d7c866e7c7bc852c75.jpg' },
    { title: 'Cô đơn đã quá bình thường và bộ Hit nổi bật của Miu Lê', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/6/6/e/a66ebc6090590b9303b963a6dc186988.jpg' },
    { title: 'Bộ sưu tập Hit đỉnh của Đại minh tinh Văn Mai Hương', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/d/3/5/0d35ef7adc0a2a604892c1029b991b39.jpg' },
    { title: 'Muốn hết bối rối thì nghe ngay Hit của Wren Evans', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/2/3/d/523d21ba9e557a047c1ffa8287cb0071.jpg' }
]

const ListSingle = () => {

    return (
        <div className="playlist-section channel-section">
            <div className="container">
                <h3 className='title'>Nghệ sĩ thịnh hành</h3>
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

export default ListSingle;