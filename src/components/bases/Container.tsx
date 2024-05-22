import React, { FC, ReactNode } from 'react';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="container mx-auto px-5 md:px-8" data-testid="container">
			{children}
		</div>
	);
};

export default Container;
