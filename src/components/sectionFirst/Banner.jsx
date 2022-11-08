import React from "react";

function Banner({ attr }) {
	return (
		<section id='bannerType' className={`parallax banner__wrap ${attr[0]}`}>
			<h2 className='blind'>은하수</h2>
			<div className='banner__inner'>
				<h3 className='title'>은하수</h3>
				<p className='desc'>
					지구(태양계)에서 관측하는 우리 은하의 단면의 모습이다.
					<a href='syumay.tistory.com' title='새로운페이지열림' target='_blank'>
						syumay.tistory.com
					</a>
				</p>
				<span className='small'>밤 하늘의 별</span>
			</div>
		</section>
	);
}

export default Banner;
