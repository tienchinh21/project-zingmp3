import { ListRecent, ListRecommend, NewRelease, ListChill, ListRemix, ListLove, ListSingle, ListForFan, ChartHome, ChartWeek, ListLiveStream, Collapsed } from '~/modules/Home/components';

import './index.css';

const Home = () => {
    return (
        <div className='main-page'>
            <div className='test'>
                <main className='main'>
                    <div className='home-page-content'>
                        <ListRecent />
                        <ListRecommend />
                        <NewRelease />
                        <ListChill />
                        <ListRemix />
                        <ListLove />
                        <ListSingle />
                        <ListForFan />
                        <ChartHome />
                        <ChartWeek />
                        <ListLiveStream />
                        <Collapsed />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home;