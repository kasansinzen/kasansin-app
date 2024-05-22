import React, { FC } from 'react';

export interface LoadingOverlayProps {
	isLoading: boolean;
}
const LoadingOverlay: FC<LoadingOverlayProps> = ({ isLoading }) => {
	return (
		<div className="LoadingOverlayProps" data-testid="loading-overlay">
			{isLoading && (
				<div className="w-full h-full fixed top-0 left-0 bg-black opacity-75 z-50">
					<div className="flex justify-center items-center mt-[50vh]">Loading...</div>
				</div>
			)}
		</div>
	);
};

export default LoadingOverlay;
