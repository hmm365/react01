import React from "react";

const textTitle = {
	small: "한편의 시",
	title: "밤하늘과 별과 밤에 관한 시",
};
const textDesc = [
	{
		textClassName: "t1",
		title: "새벽 지친 별",
		desc: "밤이면 고총 아래 고개 숙이고\n낮이면 하늘 보고 웃음 좀 웃고\n너른들 쓸쓸하여 외론 할미꽃\n아무도 몰래 지는 새벽 지친 별",
		link: "/",
	},
	{
		textClassName: "t2",
		title: "유리창1",
		desc: "유리에 차고 슬픈 것이 어린거린다.\n열없이 붙어 서서 입김을 흐리우니\n길들은 양 언 날개를 파다거린다.",
		link: "/",
	},
	{
		textClassName: "t3",
		title: "별",
		desc: "즐거운 날 밤에는 한 개도 없더니\n한 개도 없더니 마음 슬픈 밤에는 하늘 가득 별이다.\n수만 개일까 수십만 갤까 울고 싶은 밤에는 가슴에도 별이다. 온 세상이 별이다.",
		link: "/",
	},
	{
		textClassName: "t4",
		title: "별 하나",
		desc: "별을 보았다.\n깊은밤 혼자 바라보는 별 하나.\n저 별은 하늘아이들이 사는집의 쬐그만 초인종. 문득 가득히 누르고 싶다.",
		link: "/",
	},
	{
		textClassName: "t5",
		title: "서시",
		desc: "죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를,\n잎새에 이는 바람에도 나는 괴로워했다.\n별을 노래하는 마음으로 모든 죽어가는 것을 사랑해야지 그리고 나한테 주어진 길을 걸어가야겠다.\n오늘 밤에도 별이 바람에 스치운다.",
		link: "/",
	},
	{
		textClassName: "t6",
		title: "별 헤는 밤",
		desc: "별 하나에 추억과\n별 하나에 사랑과\n별 하나에 쓸쓸함과\n별 하나에 동경과\n별 하나에 시와\n별 하나에 어머니, 어머니.",
		link: "/",
	},
];

const TextInfo = ({ textClassName, title, desc, link }) => {
	return (
		<div className={`text ${textClassName}`}>
			<h3 className='text__title'>{title}</h3>
			<p className='text__desc'>{desc}</p>
			<a href={`${link}`} className='text__btn'>
				더보기
			</a>
		</div>
	);
};

function Text({ attr }) {
	return (
		<section id='textType' className={`parallax text__wrap ${attr[0]} ${attr[1]}`}>
			<span>{textTitle.small}</span>
			<h2 className='mb70'>{textTitle.title}</h2>
			<div className={`text__inner ${attr[2]}`}>
				{textDesc.map((desc, inx) => (
					<TextInfo key={inx} textClassName={desc.textClassName} title={desc.title} desc={desc.desc} link={desc.link} />
				))}
			</div>
		</section>
	);
}

export default Text;
