'use client';

import React, { FC, Fragment, memo, useEffect, useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Section from '@/components/bases/Section';
import Image from 'next/image';
import { useProfileContact } from '@/providers/ProfileContactProvider';
import { formatString } from '@/utils/helpers/textFormat';
import useLoadDatabase from '@/hooks/useLoadDatabase';
import { StorageFirebaseService, profileImgPath } from '@/utils/services/firebase/storage.firebase';
import LoadingOverlay from '@/components/bases/LoadingOverlay';

export const Profile: FC = () => {
	const { profile } = useProfileContact();
	const [profileImage, setPathProfileImage] = useState<string>('');

	useEffect(() => {
		const storage = new StorageFirebaseService();
		storage.downloadImage(profileImgPath).then((path) => {
			setPathProfileImage(path);
		});
	}, []);

	const isDirty = useLoadDatabase();

	const sections: FC[] = [About, Experience];
	const getBgThemeByIndex = (index: number): string => {
		return index % 2 === 0 ? 'bg-dark-3' : 'bg-dark-4';
	};

	return (
		<Fragment>
			<div className="w-full pt-32 pb-20 sm:pb-28 bg-dark-2">
				<div className="flex flex-col items-center">
					{profileImage && (
						<Image
							className="h-80 w-auto mb-10 rounded-full shadow-lg"
							src={profileImage}
							alt="Kasansin"
							width={500}
							height={500}
						/>
					)}
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
			<LoadingOverlay isLoading={!isDirty} />
		</Fragment>
	);
};

export default memo(Profile);
