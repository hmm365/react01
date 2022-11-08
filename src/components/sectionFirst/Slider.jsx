import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
	return (
		<section id='sliderType' className='slider__wrap section nexon'>
			<div className='slider__inner'>
				<Swiper
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true }}
					navigation={true}
					modules={[Navigation, Pagination, Autoplay]}
					className='mySwiper'>
					<SwiperSlide>
						<div className='desc'>
							<span>night skys</span>
							<h3>별빛 하늘</h3>
							<p>
								밤의 별빛들을 보면 차분해 지는 느낌이 들어요.
								<br />
								여러분의 밤하늘을 찍어주세요.
							</p>
							<div className='btn'>
								<a href='/'>자세히 보기</a>
								<a href='/' className='black'>
									사이트 보기
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='desc'>
							<span>night skys</span>
							<h3>별빛 하늘</h3>
							<p>
								밤의 별빛들을 보면 차분해 지는 느낌이 들어요.
								<br />
								여러분의 밤하늘을 찍어주세요.
							</p>
							<div className='btn'>
								<a href='/'>자세히 보기</a>
								<a href='/' className='black'>
									사이트 보기
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='desc'>
							<span>night skys</span>
							<h3>별빛 하늘</h3>
							<p>
								밤의 별빛들을 보면 차분해 지는 느낌이 들어요.
								<br />
								여러분의 밤하늘을 찍어주세요.
							</p>
							<div className='btn'>
								<a href='/'>자세히 보기</a>
								<a href='/' className='black'>
									사이트 보기
								</a>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}

export default Slider;
