import React, { useState } from "react";
import MultiRangeSlider, { type ChangeResult } from "multi-range-slider-react";

// library reference page if changes are needed in future:
// https://www.npmjs.com/package/multi-range-slider-react

function Search(): React.ReactElement {
    const [minValue, setMinValue] = useState(25);
	const [maxValue, setMaxValue] = useState(75);

    return (
        <div className="container">
            <div className="content-card search-card">
                <h2>Detailed Search</h2>
                <MultiRangeSlider
                    labels={["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]}
					min={0}
					max={1440}
					step={1}
					minValue={minValue}
					maxValue={maxValue}
                    minCaption="Start Time"
                    maxCaption="End Time"
					onInput={(e: ChangeResult) => {
						setMinValue(e.minValue);
						setMaxValue(e.maxValue);
					}}
				></MultiRangeSlider>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div style={{ margin: '10px' }}>Start Time:</div>
					<div style={{ margin: '10px' }}>{Math.floor(minValue/60) + ":" + ((minValue%60)>10 ? (minValue%60): ("0" + (minValue%60)))}</div>
                    <div style={{ margin: '10px' }}>End Time:</div>
					<div style={{ margin: '10px' }}>{Math.floor(maxValue/60) + ":" + ((maxValue%60)>10 ? (maxValue%60): ("0" + (maxValue%60)))}</div>
				</div>
            </div>
        </div>
    );
}

export default Search;
