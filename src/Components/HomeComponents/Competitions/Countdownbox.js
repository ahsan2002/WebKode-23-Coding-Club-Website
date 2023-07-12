import React from 'react';
import Countdown from 'react-countdown';
import './Competions.css'

const Countdownbox = () => {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return (
                <>
                    <div className="row count-down-row">
                        <div className="col-3  count-down-col p-0">
                            <div className='countdownbox '>
                                <h1 className='text-light fs-1 fw-bold'>07</h1>
                                <p className='countdown-p'>Day</p>
                            </div>
                        </div>
                        <div className="col-3 count-down-col p-0">
                            <div className='countdownbox '>
                                <h1 className='text-light fs-1 fw-bold'>03</h1>
                                <p className='countdown-p'>Hour</p>
                            </div>
                        </div>
                        <div className="col-3 count-down-col p-0">
                            <div className='countdownbox '>
                                <h1 className='text-light fs-1 fw-bold'>54</h1>
                                <p className='countdown-p'>Min</p>
                            </div>
                        </div>
                        <div className="col-3 count-down-col p-0">
                            <div className='countdownbox aligncenter'>
                                <h1 className='text-light fs-1 fw-bold'>21</h1>
                                <p className='countdown-p'>Sec</p>
                            </div>
                        </div>
                    </div>
                </>
            )
         }
         else {
            // Render a countdown
            return (
                <>
                    <div className="row count-down-row">
                        <div className="col-3  count-down-col p-0">
                            <div className='countdownbox '>
                                <h1 className='text-light fs-1 fw-bold'>{days}</h1>
                                <p className='countdown-p'>Day</p>
                            </div>
                        </div>
                        <div className="col-3 count-down-col p-0">
                            <div className='countdownbox '>
                                <h1 className='text-light fs-1 fw-bold'>{hours}</h1>
                                <p className='countdown-p'>Hour</p>
                            </div>
                        </div>
                        <div className="col-3 count-down-col p-0">
                            <div className='countdownbox '>
                                <h1 className='text-light fs-1 fw-bold'>{minutes}</h1>
                                <p className='countdown-p'>Min</p>
                            </div>
                        </div>
                        <div className="col-3 count-down-col p-0">
                            <div className='countdownbox aligncenter'>
                                <h1 className='text-light fs-1 fw-bold'>{seconds}</h1>
                                <p className='countdown-p'>Sec</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        }

        return (
            <Countdown
                date={new Date('14 july 2023')}
                renderer={renderer}
            />
        );

}

export default Countdownbox