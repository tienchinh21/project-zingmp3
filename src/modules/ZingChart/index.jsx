import { ChartRecommend, ChartSection, ChartMusic } from '~/modules/ZingChart/components';

const ZingChart = () => {
    return (

        <div className='main-page'>
            <div className='test'>
                <main className='main'>
                    <div className='home-page-content'>
                        <ChartSection />
                        <ChartRecommend />
                        <ChartMusic />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ZingChart;