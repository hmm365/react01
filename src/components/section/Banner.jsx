import React from "react";
const bannerText = {
	title: "은하수",
	desc: "지구(태양계)에서 관측하는 우리 은하의 단면의 모습이다",
	link: "syumay.tistory.com",
	smallDesc: "밤 하늘의 별",
};

function Banner({ attr }) {
	return (
		<section id='bannerType' className={`parallax banner__wrap ${attr[0]}`}>
			<h2 className='blind'>{bannerText.title}</h2>
			<div className='banner__inner'>
				<h3 className='title'>{bannerText.title}</h3>
				<p className='desc'>
					{bannerText.desc}
					<a href={`${bannerText.link}`} title='새로운페이지열림' target='_blank' rel='noreferrer'>
						{bannerText.link}
					</a>
				</p>
				<span className='small'>{bannerText.smallDesc}</span>
			</div>
		</section>
	);
}

export default Banner;
