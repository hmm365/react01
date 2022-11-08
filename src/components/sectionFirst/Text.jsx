import React from "react";

function Text({ attr }) {
	return (
		<section id='textType' className={`parallax text__wrap ${attr[0]} ${attr[1]}`}>
			<span>한편의 시 </span>
			<h2 className='mb70'>밤하늘과 별과 밤에 관한 시</h2>
			<div className={`text__inner ${attr[2]}`}>
				<div className='text t1'>
					<h3 className='text__title'>새벽 지친 별</h3>
					<p className='text__desc'>
						밤이면 고총 아래 고개 숙이고
						<br />
						낮이면 하늘 보고 웃음 좀 웃고
						<br />
						너른들 쓸쓸하여 외론 할미꽃
						<br />
						아무도 몰래 지는 새벽 지친 별
					</p>
					<a href='/' className='text__btn'>
						더보기
					</a>
				</div>
				<div className='text t2'>
					<h3 className='text__title'>유리창1</h3>
					<p className='text__desc'>
						유리에 차고 슬픈 것이 어린거린다.
						<br />
						열없이 붙어 서서 입김을 흐리우니
						<br />
						길들은 양 언 날개를 파다거린다.
					</p>
					<a href='/' className='text__btn'>
						더보기
					</a>
				</div>
				<div className='text t3'>
					<h3 className='text__title'>별</h3>
					<p className='text__desc'>
						즐거운 날 밤에는 한 개도 없더니
						<br />
						한 개도 없더니 마음 슬픈 밤에는 하늘 가득 별이다.
						<br />
						수만 개일까 수십만 갤까 울고 싶은 밤에는 가슴에도 별이다. 온 세상이 별이다.
					</p>
					<a href='/' className='text__btn'>
						더보기
					</a>
				</div>
				<div className='text t4'>
					<h3 className='text__title'>별 하나</h3>
					<p className='text__desc'>
						별을 보았다.
						<br />
						깊은밤 혼자 바라보는 별 하나.
						<br />저 별은 하늘아이들이 사는집의 쬐그만 초인종. 문득 가득히 누르고 싶다.
					</p>
					<a href='/' className='text__btn'>
						더보기
					</a>
				</div>
				<div className='text t5'>
					<h3 className='text__title'>서시</h3>
					<p className='text__desc'>
						죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를,
						<br />
						잎새에 이는 바람에도 나는 괴로워했다.
						<br />
						별을 노래하는 마음으로 모든 죽어가는 것을 사랑해야지 그리고 나한테 주어진 길을 걸어가야겠다.
						<br />
						오늘 밤에도 별이 바람에 스치운다.
					</p>
					<a href='/' className='text__btn'>
						더보기
					</a>
				</div>
				<div className='text t6'>
					<h3 className='text__title'>별 헤는 밤</h3>
					<p className='text__desc'>
						별 하나에 추억과
						<br />
						별 하나에 사랑과
						<br />
						별 하나에 쓸쓸함과
						<br />
						별 하나에 동경과
						<br />
						별 하나에 시와
						<br />별 하나에 어머니, 어머니.
					</p>
					<a href='/' className='text__btn'>
						더보기
					</a>
				</div>
			</div>
		</section>
	);
}

export default Text;
