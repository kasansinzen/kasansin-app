import React, { FC, memo } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import cn from '@/utils/helpers/cn';
import FontAwesome from './FontAwesome';

export interface DividerProps {
	showIcon?: boolean;
	title?: string;
	lineClassName?: string;
}
const Divider: FC<DividerProps> = ({ showIcon, title, lineClassName }) => {
	const isMiddle = !!showIcon || !!title;
	return (
		<div className="flex items-center">
			<div className={cn(['w-full border-t border-gray-300', lineClassName])} data-testid="divider-line"></div>
			{isMiddle && (
				<div className="mx-4">
					{showIcon && (
						<i className="mx-3" data-testid="divider-icon">
							<FontAwesome icon={faAngleDown} />
						</i>
					)}
					{!showIcon && title && (
						<span className="text-3xl" data-testid="divider-title">
							{title}
						</span>
					)}
				</div>
			)}
			<div className={cn(['w-full border-t border-gray-300', lineClassName])} data-testid="divider-line"></div>
		</div>
	);
};

export default memo(Divider);
