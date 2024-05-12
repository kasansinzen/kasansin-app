import TitleSection from '@/components/bases/TitleSection';
import { useProfile } from '@/providers/ProfileProvider';
import React, { FC, memo } from 'react';

const About: FC = () => {
	const { profile } = useProfile();
	return (
		<div>
			<TitleSection title="About" />
			{(profile?.about.descriptions || []).map((item, index) => (
				<p key={index} className="indent-8 mb-4">
					{item}
				</p>
			))}
		</div>
	);
};

export default memo(About);
