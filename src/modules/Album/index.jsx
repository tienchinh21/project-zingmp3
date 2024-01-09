import React, { useRef, useEffect } from 'react';
import ElWrapper from '~/shared/components/ElWrapper';
import { PlayListImg, PlayListContent } from '~/modules/Album/components';
import PlayListSection from '~/shared/components/PlayListSection';

import './index.css';
import { Grid } from '@mui/material';

import img1 from '../../assets/images/home/listRecommend/img1.jpg';
import img2 from '../../assets/images/home/listRecommend/img2.jpg';
import img3 from '../../assets/images/home/listRecommend/img3.jpg';
import img4 from '../../assets/images/home/listRecommend/img4.jpg';
import img5 from '../../assets/images/home/listRecommend/img5.jpg';


const dataListRecommend = [
    { title: 'một chút vỡ nát một chút cô', image: img1, single: ['Bùi Anh Tuấn,', ' Trung Quân,', ' Hoài Lâm'] },
    { title: 'người thứ ba', image: img2, single: ['Văn Mai Hương,', ' Quân A.P,', ' Bảo Anh'] },
    { title: 'hoa nở không màu', image: img3, single: ['Hoài Lâm,', ' Thùy Chi,', ' Đức Phúc'] },
    { title: 'xin đừng lặng im', image: img4, single: ['Erik,', ' Quân A.P,', ' SOOBIN'] },
    { title: 'Lạnh Thôi Đừng Mưa', image: img5, single: ['Haissam,', ' Ngọt,', ' Thái Đinh'] },
];

const Album = () => {

    // const playlistRef = useRef(null);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const playlistContainer = playlistRef.current;
    //         const offsetTop = playlistContainer.offsetTop;

    //         if (window.pageYOffset > offsetTop) {
    //             playlistContainer.classList.add('sticky-playlist');
    //         } else {
    //             playlistContainer.classList.remove('sticky-playlist');
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [])

    return (
        <ElWrapper>
            {/* <div className="playlist-detail-container" ref={playlistRef}>
                <PlayListImg />
                <PlayListContent />
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <PlayListImg />

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <PlayListContent />
                    </Grid>
                </Grid>
            </div> */}
            <div className="playlist-detail-container">
                <PlayListImg />
                <PlayListContent />
            </div>
            <PlayListSection titleWrapper="Có Thể Bạn Muốn Nghe" data={dataListRecommend} className="item-recommend" style={{ width: '20%' }} />
        </ElWrapper>
    )
}

export default Album;