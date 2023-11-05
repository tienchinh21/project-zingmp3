import ListItem from '~/modules/Home/components/ListItem';



import img1 from '../../../../assets/images/home/listRecent/img1.jpg';
import img2 from '../../../../assets/images/home/listRecent/img2.jpg';
import img3 from '../../../../assets/images/home/listRecent/img3.jpg';
import img4 from '../../../../assets/images/home/listRecent/img4.jpg';
import img5 from '../../../../assets/images/home/listRecent/img5.jpg';
import img6 from '../../../../assets/images/home/listRecent/img6.png';
import img7 from '../../../../assets/images/home/listRecent/img7.jpg';



const data = [
    { title: 'Top 100 Bài Hát Hát Nhạc Trẻ Hay Nhất', img: img1 },
    { title: 'Acoustic Thư Giãn', img: img2 },
    { title: '#zingchart', img: img3 },
    { title: '#zingchart Tuần 18, 2020', img: img4 },
    { title: 'Today V - Pop Hits', img: img5 },
    { title: 'Mình yêu nhau từ kiếp', img: img6 },
    { title: 'Những Bài Hát Hay', img: img7 },
]



const ListRecent = () => {
    return (
        <div className="playlist-section">
            <div className="container">
                <h3 className='title'>Gần Đây</h3>
                <div className="carousel-wrapper">
                    <div className="carousel">
                        <div className="carousel__container">
                            {data.map((item, index) => (
                                <ListItem key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default ListRecent;
