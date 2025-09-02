import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const WhyUsSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Animate section title
    gsap.fromTo('.why-us-title',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.why-us-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Animate intro text
    gsap.fromTo('.intro-text',
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: '.intro-text',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Animate benefit cards with stagger
    gsap.fromTo('.benefit-card',
      {
        opacity: 0,
        y: 40,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.4
        },
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  const benefits = [
    {
      icon: '⚡',
      title: 'Creative Spark',
      description: 'We ignite the creative process with innovative thinking that transforms brands into memorable experiences.'
    },
    {
      icon: '🎯',
      title: 'Strategic Focus',
      description: 'Every decision is made with long-term brand building in mind, ensuring sustainable growth and influence.'
    },
    {
      icon: '🔥',
      title: 'Authentic Friction',
      description: 'We create the right tension that generates emotion and builds genuine connections with your audience.'
    },
    {
      icon: '💎',
      title: 'Unfiltered Honesty',
      description: 'We tell you what needs to be said and do what needs to be done, ensuring transparent partnerships.'
    }
  ]

  return (
    <section ref={sectionRef} className='min-h-screen bg-white text-black relative z-30'>
      <div className='responsive-container lg:py-24 py-12 sm:py-16'>
        {/* Section Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='why-us-title font-[font2] text-5xl sm:text-6xl md:text-7xl lg:text-[8vw] uppercase mb-6 sm:mb-8 leading-tight'>
            Why Us
          </h2>
          <p className='intro-text font-[font1] responsive-text-base sm:responsive-text-lg lg:text-xl max-w-sm sm:max-w-xl lg:max-w-3xl mx-auto leading-relaxed text-gray-700 px-4'>
            K72 est une agence qui pense chaque action pour nourrir la marque. 
            Nous cherchons la friction qui crée l'étincelle pour générer de l'émotion 
            et bâtir des marques influentes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className='benefits-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-4'>
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className='benefit-card group bg-gray-50 hover:bg-gray-100 active:bg-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 active:shadow-lg active:-translate-y-1 touch-target'
            >
              {/* Icon */}
              <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 group-hover:scale-110 group-active:scale-110 transition-transform duration-300'>
                {benefit.icon}
              </div>
              
              {/* Content */}
              <div className='space-y-3 sm:space-y-4'>
                <h3 className='font-[font2] responsive-text-xl sm:responsive-text-2xl lg:text-3xl uppercase text-black group-hover:text-[#D3FD50] group-active:text-[#D3FD50] transition-colors duration-300'>
                  {benefit.title}
                </h3>
                <p className='font-[font1] responsive-text-sm sm:responsive-text-base lg:text-lg leading-relaxed text-gray-600'>
                  {benefit.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className='w-0 group-hover:w-full group-active:w-full h-1 bg-[#D3FD50] transition-all duration-500 mt-4 sm:mt-6 rounded-full'></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12 sm:mt-16 lg:mt-20 px-4'>
          <div className='inline-flex items-center gap-4'>
            <Link to='/projects' className='touch-target border-2 lg:border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] hover:bg-[#D3FD50] hover:text-black active:border-[#D3FD50] active:text-[#D3FD50] active:bg-[#D3FD50] active:text-black h-12 sm:h-14 md:h-15 lg:h-16 flex items-center px-4 sm:px-6 lg:px-8 border-black rounded-full uppercase transition-all duration-300 cursor-pointer group active:scale-95'>
              <span className='font-[font2] responsive-text-sm sm:responsive-text-base lg:text-xl group-hover:scale-105 group-active:scale-105 transition-transform duration-300 whitespace-nowrap'>
                Découvrir nos projets
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection