import React from "react";

function Imagetext({ attr }) {
	return (
		<section id='imgTextType' className={`parallax imgText__wrap ${attr[0]} ${attr[1]}`}>
			<h2 className='blind'>보름달</h2>
			<div className={`imgText__inner ${attr[2]}`}>
				<div className='imgText__txt'>
					<span>나만 보고싶은</span>
					<h3>밝디 밝고 밝은 보름달</h3>
					<p>달이 태양빛을 완전히 받아 앞면의 모든 모습이 드러나게 되는 현상입니다.</p>
					<ul>
						<li>
							<a href='/'>초승달</a>
						</li>
						<li>
							<a href='/'>반달</a>
						</li>
						<li>
							<a href='/'>상현망</a>
						</li>
						<li>
							<a href='/'>보름달</a>
						</li>
						<li>
							<a href='/'>하현망</a>
						</li>
						<li>
							<a href='/'>그믐달</a>
						</li>
					</ul>
				</div>
				<div className='imgText__img img1'>
					<a href='/'>보름달 사이트</a>
				</div>
				<div className='imgText__img img2'>
					<a href='/' className='blue'>
						초승달 사이트
					</a>
				</div>
			</div>
		</section>
	);
}

export default Imagetext;
