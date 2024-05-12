'use client';

import React, { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react';

interface LoadingProps {
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingProps | undefined>(undefined);

export const useLoading = () => {
	const context = useContext(LoadingContext);
	if (!context) throw new Error('Context must use in a Provider');

	return context;
};

export const LoadingProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const value: LoadingProps = { isLoading, setIsLoading };
	return (
		<LoadingContext.Provider value={value}>
			{children}
			{isLoading && (
				<div className="w-full h-full fixed top-0 left-0 bg-black opacity-75 z-50">
					<div className="flex justify-center items-center mt-[50vh]">Loading...</div>
				</div>
			)}
		</LoadingContext.Provider>
	);
};
