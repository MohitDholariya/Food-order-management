import React, { useState, useEffect } from 'react';
import '../../src/Assets/css/counter.css'

function Counter() {
    const [counterState1, setCounter1] = useState(0);
    const [counterState2, setCounter2] = useState(0);
    const [counterState3, setCounter3] = useState(0);
    const [counterState4, setCounter4] = useState(0);

    useEffect(() => {
        let timer1 = setInterval(() => {
            if (counterState1 < 100) {
                setCounter1(prev => prev + 1);
            }
        }, 15);

        let timer2 = setInterval(() => {
            if (counterState2 < 85) {
                setCounter2(prev => prev + 1);
            }
        }, 15);

        let timer3 = setInterval(() => {
            if (counterState3 < 10678) {
                setCounter3(prev => prev + 1);
            }
        }, 10);

        let timer4 = setInterval(() => {
            if (counterState4 < 900) {
                setCounter4(prev => prev + 1);
            }
        }, 15);

        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
            clearInterval(timer3);
            clearInterval(timer4);
        };
    }, [counterState1, counterState2, counterState3, counterState4]);

    return (
        <div className='p-0'>
          <div className='counter-img'>
            <div className='overlay'>
              <div className='container'>
                <div className='row justify-content-center '>
                  <div className='col-sm-3 col-6 counter-div1'>
                    <div className='text-center'>
                      <div className='justify-content-center mb-5'>
                        <span className='flaticon-pizza-1 display-2'></span>
                      </div>
                      <div>
                        <strong className='number'>{counterState1}</strong>
                      </div>
                      <span className='counter-span'>Pizza Branches</span>
                    </div>
                  </div>
                  <div className='col-sm-3 col-6 counter-div1'>
                    <div className='text-center'>
                      <div className='justify-content-center mb-5'>
                        <span className='flaticon-medal display-2'></span>
                      </div>
                      <div>
                        <strong className='number'>{counterState2}</strong>
                      </div>
                      <span className='counter-span'>Number of Awards</span>
                    </div>
                  </div>
                  <div className='col-sm-3 col-6 counter-div2'>
                    <div className='text-center'>
                      <div className='justify-content-center mb-5'>
                        <span className='flaticon-laugh display-2'></span>
                      </div>
                      <div>
                        <strong className='number'>{counterState3}</strong>
                      </div>
                      <span className='counter-span'>Happy Customer</span>
                    </div>
                  </div>
                  <div className='col-sm-3 col-6 counter-div2'>
                    <div className='text-center'>
                      <div className='justify-content-center mb-5'>
                        <span className='flaticon-chef display-2'></span>
                      </div>
                      <div>
                        <strong className='number'>{counterState4}</strong>
                      </div>
                      <span className='counter-span'>Staff</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Counter;
