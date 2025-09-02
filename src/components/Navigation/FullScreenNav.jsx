import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)





    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className="navlink flex w-full justify-between p-3 sm:p-4 lg:p-5 items-start">
                    <div className=''>
                        <div className='w-20 sm:w-24 md:w-28 lg:w-36'>
                            <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='touch-target h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 relative cursor-pointer active:scale-95 transition-transform duration-150'>
                        <div className='h-20 sm:h-28 md:h-36 lg:h-44 w-0.5 sm:w-0.5 lg:w-1 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                        <div className='h-20 sm:h-28 md:h-36 lg:h-44 w-0.5 sm:w-0.5 lg:w-1 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>

                    </div>
                </div>
                <div className='py-16 sm:py-24 md:py-32 lg:py-36 px-4'>
                    <Link to='/projects' onClick={() => setNavOpen(false)} className='link origin-top relative border-t-1 border-white block touch-target'>
                        <h1 className='font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Projets</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </Link>
                    <Link to='/agence' onClick={() => setNavOpen(false)} className='link origin-top relative border-t-1 border-white block touch-target'>
                        <h1 className='font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Agence</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </Link>
                    <div className='link origin-top relative border-t-1 border-white touch-target'>
                        <h1 className='font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Contact</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='link origin-top relative border-y-1 border-white touch-target'>
                        <h1 className='font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Blogs</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] text-center leading-tight lg:leading-[0.8] pt-4 sm:pt-6 lg:pt-10 uppercase'>Pour Tout voir</h2>
                                <img className='h-10 sm:h-14 md:h-24 lg:h-36 rounded-full shrink-0 w-20 sm:w-32 md:w-64 lg:w-96 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav