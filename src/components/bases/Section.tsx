import React, { FC, ReactNode } from 'react';
import Container from './Container';
import cn from '@/utils/helpers/cn';

interface IProps {
	className?: string;
	children: ReactNode;
}
const Section: FC<IProps> = ({ children, className }) => {
	return (
		<section className={cn(['py-16', className])} data-testid="section">
			<Container>{children}</Container>
		</section>
	);
};

export default Section;
