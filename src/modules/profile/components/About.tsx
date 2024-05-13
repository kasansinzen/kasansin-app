import TitleSection from '@/components/bases/TitleSection';
import { useProfileContact } from '@/providers/ProfileContactProvider';
import React, { FC, memo } from 'react';

const About: FC = () => {
	const { profile } = useProfileContact();
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
