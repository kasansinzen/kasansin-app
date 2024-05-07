import React, { FC, memo } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import cn from '@/utils/cn';
import FontAwesome from './FontAwesome';

interface IProps {
	showIcon?: boolean;
	title?: string;
	lineClassName?: string;
}
const Divider: FC<IProps> = ({ showIcon, title, lineClassName }) => {
	const isMiddle = !!showIcon || !!title;
	return (
		<div className="flex items-center">
			<div className={cn(['w-full border-t border-gray-300', lineClassName])}></div>
			{isMiddle && (
				<div className="mx-4">
					{showIcon && (
						<i className="mx-3">
							<FontAwesome icon={faAngleDown} />
						</i>
					)}
					{title && <span className="text-3xl">{title}</span>}
				</div>
			)}
			<div className={cn(['w-full border-t border-gray-300', lineClassName])}></div>
		</div>
	);
};

export default memo(Divider);
