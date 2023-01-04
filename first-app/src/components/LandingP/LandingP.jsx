
import './LandingP.css'
import menuTop from '../../images/menu-top-xs.png'
import iconOne from '../../images/icon1.png'
import iconTwo from '../../images/icon2.png'
import iconThree from '../../images/icon3.png'
import iconFour from '../../images/icon4.png'

import logoIH from '../../images/ironhack-logo-xs.png'


function LandingP(){
    return(
        <div className='landing-page'>
            <div className='blue-home'>
                <div className='nav-container'>
                    <img src={logoIH} alt='logo'/>
                    <img src={menuTop} alt='menu' width={15} height={15}/>
                </div>
                <div className='text-container'>
                    <h1>Say Hello to ReactJS</h1>
                    <h3>You will learn how to use the most popular frontend library and become a super Ninja developer</h3>
                    <button>Awesome!</button>
                </div>
            </div>
            <div className='page-icons'>
                <div className='icon-container'>
                   <img src={iconOne} alt='icon-one'/>
                   <h2>Declarative</h2>
                   <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div className='icon-container'>
                   <img src={iconTwo} alt='icon-two'/>
                   <h2>Components</h2>
                   <p>Build encapsulated components that manage their state.</p>
                </div>
                <div className='icon-container'>
                   <img src={iconThree} alt='icon-three'/>
                   <h2>Single-Way</h2>
                   <p>A set of immutable values are passed to the components.</p>
                </div>
                <div className='icon-container'>
                   <img src={iconFour} alt='icon-four'/>
                   <h2>JSX</h2>
                   <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </div>
            
            
        </div>
    );
}

export default LandingP;