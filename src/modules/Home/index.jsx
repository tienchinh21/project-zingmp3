import ElWrapper from '~/shared/components/ElWrapper';
import { MediaForFan, NewRelease, ChartHome, ChartWeek, ListLiveStream, Collapsed, NewSongMobile, AlbumHotMobile, Top100Mobile, MvMobile, TestMobile } from '~/modules/Home/components';
import PlayListSection from '~/shared/components/PlayListSection';

import img1R from '../../../src/assets/images/home/listRecent/img1.jpg';
import img2R from '../../../src/assets/images/home/listRecent/img2.jpg';
import img3R from '../../../src/assets/images/home/listRecent/img3.jpg';
import img4R from '../../../src/assets/images/home/listRecent/img4.jpg';
import img5R from '../../../src/assets/images/home/listRecent/img5.jpg';
import img6R from '../../../src/assets/images/home/listRecent/img6.png';
import img7R from '../../../src/assets/images/home/listRecent/img7.jpg';

import img1 from '../../assets/images/home/listRecommend/img1.jpg';
import img2 from '../../assets/images/home/listRecommend/img2.jpg';
import img3 from '../../assets/images/home/listRecommend/img3.jpg';
import img4 from '../../assets/images/home/listRecommend/img4.jpg';
import img5 from '../../assets/images/home/listRecommend/img5.jpg';

import './index.css';


const dataListRecent = [
    { title: 'Top 100 Bài Hát Hát Nhạc Trẻ Hay Nhất', image: img1R, single: '' },
    { title: 'Acoustic Thư Giãn', image: img2R, single: '' },
    { title: '#zingchart', image: img3R, single: '' },
    { title: '#zingchart Tuần 18, 2020', image: img4R, single: '' },
    { title: 'Today V - Pop Hits', image: img5R, single: '' },
    { title: 'Mình yêu nhau từ kiếp', image: img6R, single: '' },
    { title: 'Những Bài Hát Hay', image: img7R, single: '' },
];

const dataListRecommend = [
    { title: 'một chút vỡ nát một chút cô', image: img1, single: ['Bùi Anh Tuấn,', ' Trung Quân,', ' Hoài Lâm'] },
    { title: 'người thứ ba', image: img2, single: ['Văn Mai Hương,', ' Quân A.P,', ' Bảo Anh'] },
    { title: 'hoa nở không màu', image: img3, single: ['Hoài Lâm,', ' Thùy Chi,', ' Đức Phúc'] },
    { title: 'xin đừng lặng im', image: img4, single: ['Erik,', ' Quân A.P,', ' SOOBIN'] },
    { title: 'Lạnh Thôi Đừng Mưa', image: img5, single: ['Haissam,', ' Ngọt,', ' Thái Đinh'] },
];

const dataListChill = [
    { title: 'Alo alo đây là tổng đài nhạc chill, chúc bạn có một buổi chill vui vẻ', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/d/8/a/ad8aded71985e32997c8d09b9078dfbe.jpg' },
    { title: 'Thả mình cùng những giai điệu V-Pop nhẹ nhàng', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/e/3/2/de320c7f69ddf70a91f62aec66085422.jpg' },
    { title: 'Không ồn ã, không vội vàng, cùng thư giãn với âm nhạc Acoustic', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg' },
    { title: 'Nhạc Việt "lâu phai" và gây nghiện hoài hoài', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg' },
    { title: 'Khi những bản nhạc cũ được làm  mới một cách đầy thi vị', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/2/4/88247ce8f0f1aadb7062a7c9fda9292f.jpg' }
];

const dataListRemix = [
    { title: '', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/f/c/c/8fccc2ef94b404e792b5a1c3934d3961.jpg', single: ['Đông Nhi,', ' Hoàng Thùy Linh,', ' Chi Pu '] },
    { title: '', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/b/6/3/8b633f47ce20e9e7d6f73ff577899c85.jpg', single: ['Hoàng Thùy Linh, ', ' Masew,', ' Văn Mai Hương'] },
    { title: '', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/9/e/7/29e78741b838c9db1e97aa321d9a6ca6.jpg', single: ['Masew, ', ' K-ICM,', ' SlimV'] },
    { title: '', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/c/e/9/8ce9abbbdb04cd95262082d923a0f7dd.jpg', single: ['K-ICM,', 'Touliver, ', ' Hoaprox'] },
    { title: '', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/5/3/5/65352ca1e4293416322a7aae399392a3.jpg', single: ['K-ICM,', 'Touliver, ', ' Hoaprox'] },
];

const dataListLove = [
    { title: 'Bật tình yêu lên với giai điệu V-Pop làm bạn vui tươi cả ngày', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/0/e/9/00e936d9ebff9dafbd1c76da49ac7f9e.jpg' },
    { title: 'Nhớ nạp vitamin tích cực đều đặn mỗi ngày nhé', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/b/6/5/bb65218db438da6d265771d567ae355a.jpg' },
    { title: 'Cứ vui lên vì những âu lo rồi cũng sẽ qua thôi', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/e/8/83e83c4a068f0b994a99735e440b76df.jpg' },
    { title: 'Yêu đời hẳn ra cùng V-Pop Speed Up cực cuốn', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/6/f/1/06f1c6d7785e65704b6fc82d99a505ce.jpg' },
    { title: 'Nhạc quẩy quốc dân, lâng lâng tới bến', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/f/3/1/8f31a4ab282b3293da2604ba7374c25c.jpg' }
];

const dataListSingle = [
    { title: 'Nghe Hà Nhi tri ân người yêu cũ qua các bản Hit', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/0/c/a/f0ca3df4efc4bd6ed88312947d75b53d.jpg' },
    { title: 'Những câu hỏi khi say cùng Trung Quân và những Hit nổi', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/d/3/b/fd3be755d3e1b7d7c866e7c7bc852c75.jpg' },
    { title: 'Cô đơn đã quá bình thường và bộ Hit nổi bật của Miu Lê', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/6/6/e/a66ebc6090590b9303b963a6dc186988.jpg' },
    { title: 'Bộ sưu tập Hit đỉnh của Đại minh tinh Văn Mai Hương', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/d/3/5/0d35ef7adc0a2a604892c1029b991b39.jpg' },
    { title: 'Muốn hết bối rối thì nghe ngay Hit của Wren Evans', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/2/3/d/523d21ba9e557a047c1ffa8287cb0071.jpg' }
];

const dataForFan = [
    { title: '', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/1/8/8/71885ed637f8bfe634b4d370ae692cb8.jpg', single: ['Juky San,', ' Hà Anh Tuấn,', ' Hoàng Yến Chibi'] },
    { title: '', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/c/a/3/5ca3ac19d15d046ffc0cbc0b71390a74.jpg', single: ['Juky San,', ' Hà Anh Tuấn,', ' Hoàng Yến Chibi'] },
    { title: '', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/d/b/0/ddb03e5f43f72162e19d253b13049322.jpg', single: ['Juky San,', ' Hà Anh Tuấn,', ' Hoàng Yến Chibi'] },
    { title: '', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/8/7/0/b87093d7201c164981d6132ca0673745.jpg', single: ['Juky San,', ' Hà Anh Tuấn,', ' Hoàng Yến Chibi'] },
    { title: '', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/9/9/b/199ba9863a19c91c9d3d4ef78e31ae01.jpg', single: ['Juky San,', ' Hà Anh Tuấn,', ' Hoàng Yến Chibi'] }
];

const Home = () => {
    return (
        <>
            <ElWrapper>
                <PlayListSection titleWrapper="Gần Đây" data={dataListRecent} single={dataListRecent.single} />
                <PlayListSection titleWrapper="Có Thể Bạn Muốn Nghe" data={dataListRecommend} className="item-recommend" style={{ width: '20%' }} />
                <NewRelease />
                <PlayListSection titleWrapper="Chill" data={dataListChill} className="item-love" style={{ width: '20%' }} />
                <PlayListSection titleWrapper="Remix là lên luôn" data={dataListRemix} className="item-recommend" style={{ width: '20%' }} />
                <PlayListSection titleWrapper="Nghệ sĩ yêu thích" data={dataListLove} className="item-love" style={{ width: '20%' }} />
                <PlayListSection titleWrapper="Nghệ sĩ thịnh hành" data={dataListSingle} className="item-love" style={{ width: '20%' }} />
                <PlayListSection data={dataForFan} className="item-recommend" style={{ width: '20%' }}>
                    <MediaForFan
                        imageUrl="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg"
                        subtitle="Vì bạn đã nghe"
                        title="Acoustic Thư Giãn"
                    />
                </PlayListSection>
                <ChartHome />
                <ChartWeek />
                <ListLiveStream />
                <Collapsed />
            </ElWrapper>
            <div className="main-mobile">
                <TestMobile />
            </div>
        </>
    )
}

export default Home;