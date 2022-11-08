import React from "react";

function card({ attr }) {
	return (
		<section id='cardType' className={`parallax card__wrap ${attr[0]} ${attr[1]}`}>
			<h2>밤하늘 과 관련된 시</h2>
			<p>밤하늘 또는 야천(夜天)은 밤에 보이는 하늘을 이르는 말입니다.</p>
			<div className={`card__inner ${attr[2]}`}>
				<article className='card'>
					<figure className='card__header'>
						<img src='assets/img/card_bg01.jpg' alt='고양이 사진1' />
					</figure>
					<div className='card__body'>
						<h3 className='tit'>저녁 에</h3>
						<p className='desc'>
							저렇게 많은 별 중에서
							<br />
							별 하나가 나를 내려다본다
							<br />
							이렇게 많은 사람 중에서
							<br />그 별 하나를 쳐다본다
						</p>
						<a className='btn' href='/'>
							더 자세히 보기
							<span aria-hidden='true'>
								<svg width='81' height='8' viewBox='0 0 81 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M80.3536 4.35355C80.5488 4.15829 80.5488 3.84171 80.3536 3.64645L77.1716 0.464466C76.9763 0.269204 76.6597 0.269204 76.4645 0.464466C76.2692 0.659728 76.2692 0.976311 76.4645 1.17157L79.2929 4L76.4645 6.82843C76.2692 7.02369 76.2692 7.34027 76.4645 7.53553C76.6597 7.7308 76.9763 7.7308 77.1716 7.53553L80.3536 4.35355ZM0 4.5H80V3.5H0V4.5Z'
										fill='#B5B5B5'
									/>
								</svg>
							</span>
						</a>
					</div>
				</article>
				<article className='card'>
					<figure className='card__header'>
						<img src='assets/img/card_bg02.jpg' alt='고양이 사진2' />
					</figure>
					<div className='card__body'>
						<h3 className='tit'>어떤 마을</h3>
						<p className='desc'>
							​​저렇게 많은 중에서
							<br />
							별 하나가 나를 내려다본다.
							<br />
							이렇게 많은 사람 중에서
							<br />
							그 별 하나를 쳐다본다.
							<br />
							​​밤이 깊을수록 별은
							<br />
							밝음 속에 사라지고
							<br />
							나는 어둠 속에 사라진다.
							<br />
							​​이렇게 정다운
							<br />
							너 하나 나 하나는
							<br />
							어디서 무엇이 되어 다시 만나랴.
						</p>
						<a className='btn' href='/'>
							더 자세히 보기
							<span aria-hidden='true'>
								<svg width='81' height='8' viewBox='0 0 81 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M80.3536 4.35355C80.5488 4.15829 80.5488 3.84171 80.3536 3.64645L77.1716 0.464466C76.9763 0.269204 76.6597 0.269204 76.4645 0.464466C76.2692 0.659728 76.2692 0.976311 76.4645 1.17157L79.2929 4L76.4645 6.82843C76.2692 7.02369 76.2692 7.34027 76.4645 7.53553C76.6597 7.7308 76.9763 7.7308 77.1716 7.53553L80.3536 4.35355ZM0 4.5H80V3.5H0V4.5Z'
										fill='#B5B5B5'
									/>
								</svg>
							</span>
						</a>
					</div>
				</article>
				<article className='card'>
					<figure className='card__header'>
						<img src='assets/img/card_bg03.jpg' alt='고양이 사진3' />
					</figure>
					<div className='card__body'>
						<h3 className='tit'>별</h3>
						<p className='desc'>
							어느날 거리엘 나갔다 비를 만나 지나치던 한 처마 아래 들어섰으려니 내 곁에도 역시 나와 한 가지로 멀구러미 하늘을 쳐다보고 비를 긋고 섰는 사나이가 있어, 그의 모습을 보아하니 문득 그 별이 생각났다. 밤마다 뜨락에 내려 우러러 보노라면 만천의 별들 가운데서도 가장 나의 별 가차이
							나도 모를, 항상 그늘 많은 별 하나-. 영원히 건널 수 없는 심연에 나누어져 말없이 서로 바라보고 지낼 수 밖에 없는 먼 먼 그 별, 그리고 나의 별!
						</p>
						<a className='btn' href='/'>
							더 자세히 보기
							<span>
								<svg width='81' height='8' viewBox='0 0 81 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M80.3536 4.35355C80.5488 4.15829 80.5488 3.84171 80.3536 3.64645L77.1716 0.464466C76.9763 0.269204 76.6597 0.269204 76.4645 0.464466C76.2692 0.659728 76.2692 0.976311 76.4645 1.17157L79.2929 4L76.4645 6.82843C76.2692 7.02369 76.2692 7.34027 76.4645 7.53553C76.6597 7.7308 76.9763 7.7308 77.1716 7.53553L80.3536 4.35355ZM0 4.5H80V3.5H0V4.5Z'
										fill='B5B5B5'
									/>
								</svg>
							</span>
						</a>
					</div>
				</article>
			</div>
		</section>
	);
}

export default card;
