import React, { useState, useEffect, useRef, useMemo } from 'react';
import { heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6 } from '../utils';

const Hero = () => {
	const [active, setActive] = useState(0);
	const listRef = useRef(null);
	const dotsRef = useRef([]);
	const items = useMemo(() => [
		heroImg1,
		heroImg2,
		heroImg3,
		heroImg4,
		heroImg5,
		heroImg6,
	], []);

	useEffect(() => {
		const lengthItems = items.length - 1;

		const reloadSlider = () => {
			if (listRef.current) {
				const checkLeft = listRef.current.children[active].offsetLeft;
				listRef.current.style.left = -checkLeft + 'px';
			}

			if (dotsRef.current.length > 0) {
				dotsRef.current.forEach((dot, index) => {
					if (dot) {
						if (index === active) {
							dot.classList.add('active');
						} else {
							dot.classList.remove('active');
						}
					}
				});
			}
		};

		const nextClick = () => {
			setActive((prevActive) => {
				if (prevActive + 1 > lengthItems) {
					return 0;
				} else {
					return prevActive + 1;
				}
			});
		};

		const prevClick = () => {
			setActive((prevActive) => {
				if (prevActive - 1 < 0) {
					return lengthItems;
				} else {
					return prevActive - 1;
				}
			});
		};

		const next = document.getElementById('next');
		const prev = document.getElementById('prev');

		next.onclick = nextClick;
		prev.onclick = prevClick;

		reloadSlider(); // Initial reload
	}, [active, items]);

	return (
		<div className="slider">
			<div
				className="list"
				ref={listRef}
			>
				{items.map((item, index) => (
					<div
						className="item"
						key={index}
					>
						<img
							src={item}
							alt=""
						/>
					</div>
				))}
			</div>

			<div className="buttons">
				<button id="prev">{'<'}</button>
				<button id="next">{'>'}</button>
			</div>

			<ul className="dots">
				{items.map((_, index) => (
					<li
						key={index}
						ref={(el) => (dotsRef.current[index] = el)}
						onClick={() => setActive(index)}
					></li>
				))}
			</ul>
		</div>
	);
};

export default Hero;
