import ListItem from '~/modules/Home/components/ListItem';


import img1 from '../../../../assets/images/home/listRecomend/img1.jpg';
import img2 from '../../../../assets/images/home/listRecomend/img2.jpg';
import img3 from '../../../../assets/images/home/listRecomend/img3.jpg';
import img4 from '../../../../assets/images/home/listRecomend/img4.jpg';
import img5 from '../../../../assets/images/home/listRecomend/img5.jpg';


const data = [
    { title: 'một chút vỡ nát một chút cô', img: img1, single: ['Bùi Anh Tuấn,', ' Trung Quân,', ' Hoài Lâm'] },
    { title: 'người thứ ba', img: img2, single: ['Văn Mai Hương,', ' Quân A.P,', ' Bảo Anh'] },
    { title: 'hoa nở không màu', img: img3, single: ['Hoài Lâm,', ' Thùy Chi,', ' Đức Phúc'] },
    { title: 'xin đừng lặng im', img: img4, single: ['Erik,', ' Quân A.P,', ' SOOBIN'] },
    { title: 'Lạnh Thôi Đừng Mưa', img: img5, single: ['Haissam,', ' Ngọt,', ' Thái Đinh'] },
]

const ListRecomend = () => {
    return (
        <div className="playlist-section channel-section">
            <div className="container">
                <h3 className='title'>Có Thể Bạn Muốn Nghe</h3>
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
    );
};



export default ListRecomend;
