import TitleSection from '@/components/bases/TitleSection';
import React, { FC } from 'react';

const Experience: FC = () => {
	const items = [
		{ company: 'LSEG', perios: 'MAY 2022- CURRENT', position: 'Senior Software Engineer' },
		{ company: 'SCG DIGITAL OFFICE', perios: 'JUL 2021 - MAY 2022', position: 'Fullstack Developer' },
		{ company: 'TRUE CORPORATION', perios: 'AUG 2017 - JUL 2021', position: 'Programmer' },
		{ company: 'TRUE PLOOKPANYA', perios: 'MAY 2017 – JUL 2017', position: 'Internship' },
		{ company: 'Mahasarakham University', perios: '2013 - 2017', position: 'Information of Technology' },
	];
	return (
		<div className="text-dark-1">
			<TitleSection title="Experience" dividerClassName="border-dark-1" />

			<ol className="relative border-s border-gray-200 dark:border-gray-700 mx-auto">
				{items.map((item, index) => (
					<li key={index} className="mb-10 ms-4">
						<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							{item.perios}
						</time>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.company}</h3>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white italic">{item.position}</h3>
						<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-500">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m
						</p>
					</li>
				))}
			</ol>
		</div>
	);
};

export default Experience;
