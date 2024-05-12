'use client';

import React, { FC, Fragment, useEffect } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Section from '@/components/bases/Section';
import Image from 'next/image';
import { useProfile } from '@/providers/ProfileProvider';
import { useLoading } from '@/providers/LoadingProvider';
import { FirebaseService } from '@/utils/services/firebaseService';
import { formatString } from '@/utils/helpers/textFormat';

export const Profile: FC = () => {
	const { profile, setProfile } = useProfile();
	const { setIsLoading } = useLoading();

	const sections: FC[] = [About, Experience];
	const getBgThemeByIndex = (index: number): string => {
		return index % 2 === 0 ? 'bg-dark-3' : 'bg-dark-4';
	};

	useEffect(() => {
		const firebase = new FirebaseService();
		firebase.getProfileDb().then((val) => {
			setProfile(val);
			setIsLoading(false);
		});
	}, []);

	return (
		<Fragment>
			<div className="w-full pt-32 pb-20 sm:pb-28 bg-dark-2">
				<div className="flex flex-col items-center">
					<Image
						className="h-80 w-auto mb-10 rounded-full shadow-lg"
						src="/img/profile.jpg"
						alt="Kasansin"
						width={500}
						height={500}
					/>
					<h5 className="mb-1 text-2xl sm:text-6xl font-medium text-white uppercase">
						{formatString(`I'M ${profile?.fullname}`)}
					</h5>
					<span className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400">{formatString(profile?.career)}</span>
				</div>
			</div>

			{sections.map((Component, index) => (
				<Section key={index} className={getBgThemeByIndex(index)}>
					<Component />
				</Section>
			))}
		</Fragment>
	);
};

export default Profile;
