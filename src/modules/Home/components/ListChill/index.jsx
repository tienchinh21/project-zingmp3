import ListItem from "~/modules/Home/components/ListItem";



const data = [
    { title: 'Alo alo đây là tổng đài nhạc chill, chúc bạn có một buổi chill vui vẻ', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/d/8/a/ad8aded71985e32997c8d09b9078dfbe.jpg' },
    { title: 'Thả mình cùng những giai điệu V-Pop nhẹ nhàng', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/e/3/2/de320c7f69ddf70a91f62aec66085422.jpg' },
    { title: 'Không ồn ã, không vội vàng, cùng thư giãn với âm nhạc Acoustic', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg' },
    { title: 'Nhạc Việt "lâu phai" và gây nghiện hoài hoài', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg' },
    { title: 'Khi những bản nhạc cũ được làm  mới một cách đầy thi vị', img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/2/4/88247ce8f0f1aadb7062a7c9fda9292f.jpg' }
]

const ListChill = () => {
    return (
        <div className="playlist-section channel-section">
            <div className="container">
                <h3 className='title'>Chill</h3>
                <div className="carousel-wrapper">
                    <div className="carousel">
                        <div className="carousel__container">
                            {data.map((item, index) => (
                                <ListItem key={index} item={item} className='item-love' style={{ width: '20%' }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListChill;