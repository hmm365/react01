import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderDesc = [
	{
		smallTit: "night skys",
		title: "별빛 하늘",
		desc: "밤의 별빛들을 보면 차분해 지는 느낌이 들어요.\n여러분의 밤하늘을 찍어주세요.",
		btnlink: "/",
		btnSiteLink: "/",
	},
	{
		smallTit: "night skys",
		title: "별빛 하늘",
		desc: "밤의 별빛들을 보면 차분해 지는 느낌이 들어요.\n여러분의 밤하늘을 찍어주세요.",
		btnlink: "/",
		btnSiteLink: "/",
	},
	{
		smallTit: "night skys",
		title: "별빛 하늘",
		desc: "밤의 별빛들을 보면 차분해 지는 느낌이 들어요.\n여러분의 밤하늘을 찍어주세요.",
		btnlink: "/",
		btnSiteLink: "/",
	},
];

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
							<span>{sliderDesc[0].smallTit}</span>
							<h3>{sliderDesc[0].title}</h3>
							<p>{sliderDesc[0].desc}</p>
							<div className='btn'>
								<a href={`${sliderDesc[0].btnlink}`}>자세히 보기</a>
								<a href={`${sliderDesc[0].btnSiteLink}`} className='black'>
									사이트 보기
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='desc'>
							<span>{sliderDesc[1].smallTit}</span>
							<h3>{sliderDesc[1].title}</h3>
							<p>{sliderDesc[1].desc}</p>
							<div className='btn'>
								<a href={`${sliderDesc[1].btnlink}`}>자세히 보기</a>
								<a href={`${sliderDesc[1].btnSiteLink}`} className='black'>
									사이트 보기
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='desc'>
							<span>{sliderDesc[2].smallTit}</span>
							<h3>{sliderDesc[2].title}</h3>
							<p>{sliderDesc[2].desc}</p>
							<div className='btn'>
								<a href={`${sliderDesc[2].btnlink}`}>자세히 보기</a>
								<a href={`${sliderDesc[2].btnSiteLink}`} className='black'>
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
