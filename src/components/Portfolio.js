import React from 'react'
import emp1 from '../assets/emp1.jpg'
import emp2 from '../assets/emp2.jpg'
import emp3 from '../assets/emp3.jpg'

function Portfolio() {
  return (
    <div className='portfolio '>
        <div className='container'>
            <div className='portfolio__section'>
                <div className='row'>
                <div className='col-4'>
                    <div className='portfolio__content'>
                      <h6 className='portfolio__content-h6'>Employees</h6>
                      <h3  className='portfolio__content-h3'>Our Team.</h3>
                      </div>
                    </div>
                    <div className='col-8'>
                      <div className='row'>
                        <div className='col-4 pl-15'>
                          <div className='portfolio__card'>
                            <div className='portfolio__card-img'>
                            <img src={emp1}></img>
                            </div>
                            <h5 className='portfolio__card-name'>Jhon </h5>
                            <p className='portfolio__card-expert'>Wordpress</p>
                          </div>
                        </div>
                        <div className='col-4 pl-15'>
                          <div className='portfolio__card'>
                            <div className='portfolio__card-img'>
                            <img src={emp2}></img>
                            </div>
                            <h5 className='portfolio__card-name'>Albert</h5>
                            <p className='portfolio__card-expert'>React</p>
                          </div>
                        </div>
                        <div className='col-4 pl-15'>
                          <div className='portfolio__card'>
                            <div className='portfolio__card-img'>
                            <img src={emp3}></img>
                            </div>
                            <h5 className='portfolio__card-name'>Smith</h5>
                            <p className='portfolio__card-expert'>Flutter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
    </div>  
  )
}

export default Portfolio
