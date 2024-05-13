import TitleSection from '@/components/bases/TitleSection';
import { useProfileContact } from '@/providers/ProfileContactProvider';
import { formatShortDate } from '@/utils/helpers/dateFormat';
import React, { FC, memo } from 'react';

const Experience: FC = () => {
	const { profile } = useProfileContact();
	const items = profile?.experiences || [];
	return (
		<div className="text-dark-1">
			<TitleSection title="Experience" dividerClassName="border-dark-1" />

			<ol className="relative border-s border-gray-700 mx-auto">
				{items.map((item, index) => (
					<li key={index} className="mb-10 ms-4">
						<div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white bg-gray-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-gray-500">
							{formatShortDate(item.perios.date_start) + ' - ' + formatShortDate(item.perios.date_stop)}
						</time>
						<h3 className="text-lg font-semibold text-dark-1">{item.company}</h3>
						<h3 className="text-lg font-semibold text-dark-1 italic">{item.position}</h3>
						<p className="mb-4 text-base font-normal text-gray-500">{item.short_description}</p>
					</li>
				))}
			</ol>
		</div>
	);
};

export default memo(Experience);
