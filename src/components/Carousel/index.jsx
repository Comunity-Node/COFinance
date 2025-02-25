import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard, Pagination } from 'swiper/modules';
import Button from '../Button/index';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const CustomCarousel = () => {
  const slidesData = [
    {
      url: 'https://CoFinance/Pool',
      btn: 'Pool',
      description:
        'Provide Pool where can be ioncentived',
      imagePath: './carousel/delta-logo.svg',
    },
    {
      url: 'https://Cofinance/Stake',
      btn: 'Stake',
      description:
        'Stake your pool liquidity to earn more reward yield',
      imagePath: './carousel/castrum.svg',
    },
    {
      url: 'https://Cofinance/Lend',
      btn: 'Lend',
      description: 'Deposit collateral and get rewards point from incentived pool',
      imagePath: './carousel/blockscout_logo.svg',
    },
  ];

  return (
    <Swiper
      className="bg-transparent swiper"
      effect={'coverflow'}
      grabCursor={true}
      spaceBetween={30}
      centeredSlides={true}
      onDragStart={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
        type: 'bullets',
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      initialSlide={1} // Set initial slide index to 1
      modules={[Keyboard, Pagination, EffectCoverflow]}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index} className="px-0 bg-transparent lg:px-0">
          <Link to={slide.url} target="_blank">
            <div className="card w-full bg-[#020121] dark:bg-primary shadow-xs md:shadow-sm lg:shadow-xl shadow-blue-950 dark:shadow-primary h-80">
              <div className="justify-center pt-5 card-actions">
                <Button other="btn-sm bg-transparent border-2 border-blue-500 dark:border-accent">
                  <span className="text-sm font-medium text-blue-500 dark:text-accent">
                    {slide.btn}
                  </span>
                </Button>
              </div>
              <figure className="px-10 pt-10">
                <img src={slide.imagePath} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="items-center text-center card-body">
                <p className="text-white dark:text-neutral">
                  {slide.description}
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomCarousel;
