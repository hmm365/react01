import React from "react";

const imageTitle = {
	title: "밤 풍경",
	desc: "밤의 별빛들을 보면 차분해 지는 느낌이 들어요.",
};

const imageText = [
	{
		imgTit: "밤 하늘",
		imgDesc: "아름다운 밤 풍경을 보며 차분한 차 한잔을 하는것도 좋을것 같습니다. 혹은 명상을 하는게 어떠신가요?",
		imgClass: "img1",
		btnClass: "basic",
		btnLink: "/",
	},
	{
		imgTit: "오로라",
		imgDesc:
			"주로 지구의 북극권, 남극권 지역에서 관측할 수 있는 천문현상. 초고층 대기 중에 형형색색의 발광(發光)이 나타나며, 이 때문에번역할 경우 극광이라고도 부릅니다.",
		imgClass: "img2",
		btnClass: "brown",
		btnLink: "/",
	},
];

const ImageCont = ({ imgTit, imgDesc, imgClass, btnClass, btnLink }) => {
	return (
		<article className={`image ${imgClass}`}>
			<div className='image__box'>
				<h3 className='image__tit'>{imgTit}</h3>
				<p className='image__desc'>{imgDesc}</p>
				<a className={`image__btn ${btnClass}`} href={`${btnLink}`}>
					자세히보기
				</a>
			</div>
		</article>
	);
};

function Image(props) {
	return (
		<section id='imgType' className={`parallax img__wrap ${props.attr[0]} ${props.attr[1]}`}>
			<h2>{imageTitle.title}</h2>
			<p>{imageTitle.desc}</p>
			<div className={`image__inner ${props.attr[2]}`}>
				{imageText.map((info, index) => (
					<ImageCont
						key={index}
						imgTit={info.imgTit}
						imgDesc={info.imgDesc}
						imgClass={info.imgClass}
						btnClass={info.btnClass}
						btnLink={info.btnLink}
					/>
				))}
			</div>
		</section>
	);
}

export default Image;
