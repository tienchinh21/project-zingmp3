
import PlayListSection from '~/shared/components/PlayListSection';

import img1 from '../../../../assets/images/home/listRecent/img1.jpg';
import img2 from '../../../../assets/images/home/listRecent/img2.jpg';
import img3 from '../../../../assets/images/home/listRecent/img3.jpg';
import img4 from '../../../../assets/images/home/listRecent/img4.jpg';
import img5 from '../../../../assets/images/home/listRecent/img5.jpg';
import img6 from '../../../../assets/images/home/listRecent/img6.png';
import img7 from '../../../../assets/images/home/listRecent/img7.jpg';

const data = [
    { title: 'Top 100 Bài Hát Hát Nhạc Trẻ Hay Nhất', image: img1, single: '' },
    { title: 'Acoustic Thư Giãn', image: img2, single: '' },
    { title: '#zingchart', image: img3, single: '' },
    { title: '#zingchart Tuần 18, 2020', image: img4, single: '' },
    { title: 'Today V - Pop Hits', image: img5, single: '' },
    { title: 'Mình yêu nhau từ kiếp', image: img6, single: '' },
    { title: 'Những Bài Hát Hay', image: img7, single: '' },
];

const ListRecent = () => {
    return (
        <PlayListSection titleWrapper="Gần Đây" data={data} single={data.single} />
    );
};



export default ListRecent;
