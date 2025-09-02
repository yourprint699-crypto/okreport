import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] mt-32 sm:mt-48 md:mt-64 lg:mt-0 pt-5 text-center relative z-20 px-4'>
            <div className='text-[14vw] sm:text-[12vw] md:text-[11vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[12vw] sm:leading-[10vw] lg:leading-[8vw]'>
                L'étincelle
            </div>
            <div className='text-[14vw] sm:text-[12vw] md:text-[11vw] lg:text-[9.5vw] justify-center flex flex-col sm:flex-row items-center sm:items-start uppercase leading-[12vw] sm:leading-[10vw] lg:leading-[8vw]'>
                <span className='sm:hidden'>qui génère</span>
                <span className='hidden sm:inline'>qui</span>
                <div className='h-[20vw] w-[35vw] sm:h-[10vw] sm:w-[20vw] md:h-[8vw] md:w-[18vw] lg:h-[7vw] lg:w-[16vw] rounded-full -mt-1 sm:-mt-3 overflow-hidden mx-1 sm:mx-2 my-2 sm:my-0'>
                    <Video />
                </div>
                <span className='hidden sm:inline'>génère</span>
            </div>
            <div className='text-[14vw] sm:text-[12vw] md:text-[11vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[12vw] sm:leading-[10vw] lg:leading-[8vw]'>
                <span className='hidden sm:inline'>la créativité</span>
                <span className='sm:hidden'>créativité</span>
            </div>
        </div>
    )
}

export default HomeHeroText
                qui
                <div className='h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden mx-2'>
                    <Video />
                </div>
                génère
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText