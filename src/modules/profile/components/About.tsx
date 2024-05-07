import TitleSection from '@/components/bases/TitleSection';
import React, { FC } from 'react';

const About: FC = () => {
	const message: string =
		"So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.";
	return (
		<div>
			<TitleSection title="About" />
			<p className="indent-8">{message}</p>
		</div>
	);
};

export default About;
