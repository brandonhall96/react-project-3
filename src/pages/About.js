import React from 'react';

const About = () => {


    return (

        <div className='about'>
            <div className="row mt-4">
                <div className="col-md-8 offset-md-3">
                    <div className="card card-body">
                        <div class="text-center">
                            <h1>About FakeX</h1>
                            <hr />
                            <h3>FakeX was formed by entrepreneurs
                                <a href='https://github.com/brandonhall96'> Brandon Hall</a>,
                                <a href='https://github.com/jakeschultz89'> Jake Schultz</a>,

                            <a href='https://github.com/behemoth0132'> Jordan Wright</a> and <a href='https://github.com/vinnyvilasboa'>Vinny Vilasboa</a> in the hopes of revolutionizing the aerospace
                                industry and making affordable spaceflight a reality. The company entered the arena with the Falcon 1 rocket,
                                a two-stage liquid-fueled craft designed to send small satellites into orbit.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;