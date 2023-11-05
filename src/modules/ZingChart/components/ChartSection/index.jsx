import React from 'react';

import { IconPlay } from '~/shared/Svgs';

import './index.css';

const ChartSection = () => {
    return (
        <div className='chart-section'>
            <div className="section-header">
                <div className="chart-title">
                    <h3 className='title-color'>#zinghchart</h3>
                    <button className='btn-chart'><IconPlay /></button>
                </div>
            </div>
        </div>
    )
}

export default ChartSection;