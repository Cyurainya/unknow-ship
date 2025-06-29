'use client';

import { useEffect, useState } from 'react';
import earth from '@/assets/hugeImage/back.jpg';
import rocket from '@/assets/hugeImage/rocket.png';
import Header from '@/components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import food from '@/assets/hugeImage/food.png';
import games from '@/assets/hugeImage/games.png';
import health from '@/assets/hugeImage/health.png';
import pet from '@/assets/hugeImage/pet.png';
import Sun from '@/assets/hugeImage/Sun.png';
import Mercury from '@/assets/hugeImage/Mercury.png';
import Venus from '@/assets/hugeImage/Venus.png';
import Earth from '@/assets/hugeImage/Earth.png';
import Mars from '@/assets/hugeImage/Mars.png';
import Jupiter from '@/assets/hugeImage/Jupiter.png';
import Saturn from '@/assets/hugeImage/Saturn.png';
import Uranus from '@/assets/hugeImage/Uranus.png';
import Neptune from '@/assets/hugeImage/Neptune.png';
import Pluto from '@/assets/hugeImage/Pluto.png';
import Moon from '@/assets/hugeImage/Moon.png';
import Globe from 'react-globe.gl';

export default function RocketScroll() {
  const [rocketY, setRocketY] = useState<number>(0);
  const toThirdPanel = () => {
    window.scrollTo({
      top: window.innerHeight * 3, // 300vh
      behavior: 'smooth',
    });
  }

  const planets = [
    { src: Sun, name: 'Earth' },
    { src: Mercury, name: 'Mercury' },
    { src: Venus, name: 'Venus' },
    { src: Earth, name: 'Earth' },
    { src: Mars, name: 'Mars' },
    { src: Jupiter, name: 'Jupiter' },
    { src: Saturn, name: 'Saturn' },
    { src: Uranus, name: 'Uranus' },
    { src: Neptune, name: 'Neptune' },
    { src: Pluto, name: 'Pluto' },
    { src: Moon, name: 'Moon' }
  ];
  const slides = [...planets, ...planets];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;

      const progress = Math.min(scrollY / maxScroll, 1);
      const translateY = -progress * 100;

      setRocketY(translateY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="relative w-full overflow-hidden">
      <Header />

      {/* 火箭+背景部分整体区域 */}
      <div className="h-[200dvh] relative z-0">
        {/* 背景不再fixed，而是相对区域滚动 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${earth.src})`,
          }}
        />
        <div className='text-white absolute top-[50vh] ml-10 text-4xl font-semibold font-serif'>SPACE TRAVEL FOR EVERYONE


        </div>
        <p className='text-base absolute top-[60vh] ml-10 text-white-200 w-fit p-1 border border-white'>Scroll the page to launch the rocket</p>
        <div
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 transition-transform duration-100"
          style={{
            transform: `translate(-50%, ${rocketY}vh)`,
          }}
        >
          <Image src={rocket.src} alt="Rocket" className="w-32" />
        </div>
      </div>

      {/* 下一个纯色区 */}
      <div className="w-full h-[100dvh] relative">
        <div className='text-white w-full z-1  absolute text-4xl h-[20dvh] flex justify-center items-center'>
          We pioneer sustainable propulsion systems

        </div>
        <p className='text-sm border  border-white z-1 absolute top-[80vh] left-[45vw] p-[10px] cursor-pointer' onClick={toThirdPanel}> ↓ To the next panel</p>
        <div>

          <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            backgroundColor="rgba(0,0,0,0)"
          />
        </div>
      </div>

      <section className="w-screen h-screen flex bg-black text-white">

        {/* 左侧大字 */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight neon-text text-center">
            The spaceship provides<br />comprehensive services
          </h1>
        </div>

        {/* 右侧四个box */}
        <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-6 p-6">

          <div className="bg-gradient-to-br  from-blue-700 h-[45dvh] to-purple-800 p-4 rounded-lg shadow-lg hover:scale-105 transition">
            <Image src={pet} alt="Service 1" className="w-full  object-cover rounded" />
            <p className="mt-4 text-center font-bold">pet transportation</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-indigo-700 p-4 rounded-lg shadow-lg hover:scale-105 transition">
            <Image src={food} alt="Service 2" className="w-full  object-cover rounded" />
            <p className="mt-4 text-center font-bold">meal provision</p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-teal-800 p-4 rounded-lg shadow-lg hover:scale-105 transition">
            <Image src={health} alt="Service 3" className="w-full  object-cover rounded" />
            <p className="mt-4 text-center font-bold">medical services</p>
          </div>

          <div className="bg-gradient-to-br from-purple-700 to-red-800 p-4 rounded-lg shadow-lg hover:scale-105 transition">
            <Image src={games} alt="Service 4" className="w-full  object-cover rounded" />
            <p className="mt-4 text-center font-bold">advanced games</p>
          </div>

        </div>
      </section>

 <div className="w-screen h-screen  bg-black text-white">
    <div className='text-white w-full text-4xl h-[20dvh] text-4xl font-bold flex justify-center items-center'>
         Select the planet you want to go

        </div>
         <div className="w-full max-w-6xl mx-auto py-10 overflow-hidden">


        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={10}
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={5000} // 滚动一圈所需时间，越小越快
          allowTouchMove={false} // 禁用手动滑动，纯自动走马灯
        >
          {slides.map(({ src, name }, i) => (
            <SwiperSlide
              key={i}
              className="w-40 flex flex-col items-center justify-center"
            >
              <div className="bg-black p-4 rounded-xl shadow-lg text-center">
                <Image
                  src={src}
                  alt={name}
                  width={250}
                  height={250}
                  className="mx-auto animate-spin-slow"
                />
                <p className="mt-2 text-white font-bold">{name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
</div>


    </div>
  );
}