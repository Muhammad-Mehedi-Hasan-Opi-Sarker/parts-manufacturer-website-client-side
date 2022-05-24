import React from 'react';

const Summary = () => {
    return (
        <div class="stats stats-vertical lg:stats-horizontal shadow mt-8 mb-8">

            <div class="stat">
                <div class="stat-title">Annual revenue</div>
                <div class="stat-value">700M</div>
                <div class="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div class="stat">
                <div class="stat-title">100+ customers</div>
                <div class="stat-value">250+</div>
                <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div class="stat">
                <div class="stat-title">Reviews</div>
                <div class="stat-value">100K</div>
                <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>

        </div>
    );
};

export default Summary;