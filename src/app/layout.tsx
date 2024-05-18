import './globals.scss';

import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ProfileContactProvider } from '@/providers/ProfileContactProvider';
import { MainLayoutPage } from '@/components/layouts/MainLayouts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Kasansin Khamsat',
	description: 'Welcome to the personal website of Kasansin Khamsat. This website I was created to learning Firebase.',
	keywords: 'Kasansin Khamsat, Kasansin, Software Engineer Thailand, Website Profile, Nextjs with Firebase',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ProfileContactProvider>
				<body className={inter.className} suppressHydrationWarning={true}>
					<MainLayoutPage>{children}</MainLayoutPage>
				</body>
			</ProfileContactProvider>
		</html>
	);
}
