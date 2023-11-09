import PlayListSection from '~/shared/components/PlayListSection';

const data = [
    { title: 'Nghe Hà Nhi tri ân người yêu cũ qua các bản Hit', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/0/c/a/f0ca3df4efc4bd6ed88312947d75b53d.jpg' },
    { title: 'Những câu hỏi khi say cùng Trung Quân và những Hit nổi', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/d/3/b/fd3be755d3e1b7d7c866e7c7bc852c75.jpg' },
    { title: 'Cô đơn đã quá bình thường và bộ Hit nổi bật của Miu Lê', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/6/6/e/a66ebc6090590b9303b963a6dc186988.jpg' },
    { title: 'Bộ sưu tập Hit đỉnh của Đại minh tinh Văn Mai Hương', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/d/3/5/0d35ef7adc0a2a604892c1029b991b39.jpg' },
    { title: 'Muốn hết bối rối thì nghe ngay Hit của Wren Evans', image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/2/3/d/523d21ba9e557a047c1ffa8287cb0071.jpg' }
]

const ListSingle = () => {

    return (
        <PlayListSection titleWrapper="Nghệ sĩ thịnh hành" data={data} className="item-love" style={{ width: '20%' }} />
    )
};

export default ListSingle;