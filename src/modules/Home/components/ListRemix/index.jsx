import ListItem from "~/modules/Home/components/ListItem";



const data = [
    { title: '', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/f/c/c/8fccc2ef94b404e792b5a1c3934d3961.jpg', single: ['Đông Nhi,', ' Hoàng Thùy Linh,', ' Chi Pu '] },
    { title: '', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/b/6/3/8b633f47ce20e9e7d6f73ff577899c85.jpg', single: ['Hoàng Thùy Linh, ', ' Masew,', ' Văn Mai Hương'] },
    { title: '', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/9/e/7/29e78741b838c9db1e97aa321d9a6ca6.jpg', single: ['Masew, ', ' K-ICM,', ' SlimV'] },
    { title: '', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/c/e/9/8ce9abbbdb04cd95262082d923a0f7dd.jpg', single: ['K-ICM,', 'Touliver, ', ' Hoaprox'] },
    { title: '', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/5/3/5/65352ca1e4293416322a7aae399392a3.jpg', single: ['K-ICM,', 'Touliver, ', ' Hoaprox'] },
]

const ListRemix = () => {

    return (
        <div className="playlist-section channel-section">
            <div className="container">
                <h3 className='title'>Remix là lên luôn</h3>
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
};

export default ListRemix;