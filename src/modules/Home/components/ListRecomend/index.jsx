import PlayListSection from '~/shared/components/PlayListSection';

import img1 from '../../../../assets/images/home/listRecomend/img1.jpg';
import img2 from '../../../../assets/images/home/listRecomend/img2.jpg';
import img3 from '../../../../assets/images/home/listRecomend/img3.jpg';
import img4 from '../../../../assets/images/home/listRecomend/img4.jpg';
import img5 from '../../../../assets/images/home/listRecomend/img5.jpg';

const data = [
    { title: 'một chút vỡ nát một chút cô', image: img1, single: ['Bùi Anh Tuấn,', ' Trung Quân,', ' Hoài Lâm'] },
    { title: 'người thứ ba', image: img2, single: ['Văn Mai Hương,', ' Quân A.P,', ' Bảo Anh'] },
    { title: 'hoa nở không màu', image: img3, single: ['Hoài Lâm,', ' Thùy Chi,', ' Đức Phúc'] },
    { title: 'xin đừng lặng im', image: img4, single: ['Erik,', ' Quân A.P,', ' SOOBIN'] },
    { title: 'Lạnh Thôi Đừng Mưa', image: img5, single: ['Haissam,', ' Ngọt,', ' Thái Đinh'] },
];

const ListRecomend = () => {
    return (
        <PlayListSection titleWrapper="Có Thể Bạn Muốn Nghe" data={data} className="item-recommend" style={{ width: '20%' }} />
    );
};

export default ListRecomend;
