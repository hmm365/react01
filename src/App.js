import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import Imagetext from "./components/section/Imagetext";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";

export default function App() {
	return (
		<>
			<Header fonts='nexon' />
			<Main>
				<Slider />
				<Image attr={["section", "nexon", "container"]} />
				<Imagetext attr={["section", "nexon", "container", "gray"]} />
				<Card attr={["section", "nexon", "container"]} />
				<Banner attr={["gmaket"]} />
				<Text attr={["nexon", "section", "container"]} />
			</Main>
			<Footer attr={["gmaket", "section", "container"]} />
		</>
	);
}
