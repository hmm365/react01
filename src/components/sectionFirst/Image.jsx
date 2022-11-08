import React from "react";

function Image(props) {
	return (
		<section id='imgType' className={`parallax img__wrap ${props.attr[0]} ${props.attr[1]}`}>
			<h2>밤 풍경</h2>
			<p>밤의 별빛들을 보면 차분해 지는 느낌이 들어요.</p>
			<div className={`image__inner ${props.attr[2]}`}>
				<article className='image img1'>
					<div className='image__box'>
						<h3 className='image__tit'>밤 하늘</h3>
						<p className='image__desc'>아름다운 밤 풍경을 보며 차분한 차 한잔을 하는것도 좋을것 같습니다. 혹은 명상을 하는게 어떠신가요?</p>
						<a className='image__btn' href='/'>
							자세히보기
						</a>
					</div>
				</article>
				<article className='image img2'>
					<div className='image__box'>
						<h3 className='image__tit'>오로라</h3>
						<p className='image__desc'>주로 지구의 북극권, 남극권 지역에서 관측할 수 있는 천문현상. 초고층 대기 중에 형형색색의 발광(發光)이 나타나며, 이 때문에 번역할 경우 '극광'이라고도 부릅니다.</p>
						<a className='image__btn brown' href='/'>
							자세히보기
						</a>
					</div>
				</article>
			</div>
		</section>
	);
}

export default Image;
