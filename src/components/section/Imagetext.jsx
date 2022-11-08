import React from "react";
const imgTextTitle = {
	title: "밝디 밝고 밝은 보름달",
	desc: "달이 태양빛을 완전히 받아 앞면의 모든 모습이 드러나게 되는 현상입니다.",
	titlesmall: "나만 보고싶은",
};
const imgTextLink = [
	{
		linkName: "초승달",
		links: "/",
	},
	{
		linkName: "반달",
		links: "/",
	},
	{
		linkName: "상현망",
		links: "/",
	},
	{
		linkName: "보름달",
		links: "/",
	},
	{
		linkName: "하현망",
		links: "/",
	},
	{
		linkName: "초승달",
		links: "/",
	},
	{
		linkName: "그믐달",
		links: "/",
	},
];

const imgTextSite = [
	{ siteImg: "img1", sites: "보름달 사이트", alink: "/", btnColor: "" },
	{ siteImg: "img1", sites: "초승달 사이트", alink: "/", btnColor: "blue" },
];

const ImgTextLinks = ({ links, linkName }) => {
	return (
		<li>
			<a href={`${links}`}>{linkName}</a>
		</li>
	);
};

const ImgTextSites = ({ siteImg, sites, alink, btnColor }) => {
	return (
		<div className={`imgText__img ${siteImg}`}>
			<a className={`${btnColor}`} href={`${alink}`}>
				{sites}
			</a>
		</div>
	);
};

function Imagetext({ attr }) {
	return (
		<section id='imgTextType' className={`parallax imgText__wrap ${attr[0]} ${attr[1]}`}>
			<h2 className='blind'>{imgTextTitle.title}</h2>
			<div className={`imgText__inner ${attr[2]}`}>
				<div className='imgText__txt'>
					<span>{imgTextTitle.titlesmall}</span>
					<h3>{imgTextTitle.title}</h3>
					<p>{imgTextTitle.desc}</p>
					<ul>
						{imgTextLink.map((info, index) => (
							<ImgTextLinks key={index} linkName={info.linkName} links={info.links} />
						))}
					</ul>
				</div>
				{imgTextSite.map((info, index) => (
					<ImgTextSites key={index} siteImg={info.siteImg} sites={info.sites} alink={info.alink} btnColor={info.btnColor} />
				))}
			</div>
		</section>
	);
}

export default Imagetext;
