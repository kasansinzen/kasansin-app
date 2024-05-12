import React from 'react';
import MainLayoutPage from '@/components/layouts/MainLayouts';
import Profile from '@/modules/profile/Profile';
import { LoadingProvider } from '@/providers/LoadingProvider';

export default function Home() {
	return (
		<MainLayoutPage>
			<LoadingProvider>
				<Profile />
			</LoadingProvider>
		</MainLayoutPage>
	);
}
