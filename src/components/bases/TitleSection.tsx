import React, { FC } from 'react';
import Divider from './Divider';

interface IProps {
	title: string;
	dividerClassName?: string;
}
const TitleSection: FC<IProps> = ({ title, dividerClassName }) => {
	return (
		<div className="text-center">
			<span className="text-3xl">{title}</span>
			<div className="mt-2 mb-4 w-3/4 mx-auto">
				<Divider showIcon lineClassName={dividerClassName} />
			</div>
		</div>
	);
};

export default TitleSection;
