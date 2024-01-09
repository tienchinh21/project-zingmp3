import ElWrapper from '~/shared/components/ElWrapper';
import { ChartRecommend, ChartSection, ChartMusic } from '~/modules/ZingChart/components';

const ZingChart = () => {
    return (
        <ElWrapper>
            <ChartSection />
            <ChartRecommend />
            <ChartMusic />
        </ElWrapper>
    )
}

export default ZingChart;