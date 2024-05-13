'use client';

import React, { memo, type FunctionComponent, type PropsWithChildren } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import cn from '@/utils/helpers/cn';
import FontAwsome from '../bases/FontAwesome';
import { useProfileContact } from '@/providers/ProfileContactProvider';

const navigation: { name: string; href: string; current: boolean }[] = [];

export interface LayoutConfigProps {
	className?: string;
}

export const MainLayoutPage: FunctionComponent<PropsWithChildren<LayoutConfigProps>> = (props) => {
	const { children } = props;

	const { contacts } = useProfileContact();

	const layoutClassName = 'max-w-7xl px-2 sm:px-6 lg:px-8';
	return (
		<div>
			<Disclosure as="nav" className="bg-dark-1 text-dark-4 z-10 fixed top-0 w-full">
				{({ open }) => (
					<>
						<div className={cn([layoutClassName])}>
							<div className="relative flex h-16 items-center justify-between">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									{!!navigation.length && (
										<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
											<span className="absolute -inset-0.5" />
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
											) : (
												<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
											)}
										</Disclosure.Button>
									)}
								</div>
								<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
									<div className="flex flex-shrink-0 items-center">
										<a href="#" className="text-2xl font-bold tracking-tight">
											KASANSIN KHAMSAT
										</a>
									</div>
									<div className="hidden sm:ml-8 sm:block">
										<div className="flex space-x-4">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className={cn(
														item.current ? 'bg-dark-2 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
														'rounded-md px-3 py-2 text-sm font-medium',
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</a>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="space-y-1 px-2 pb-3 pt-2">
								{navigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										as="a"
										href={item.href}
										className={cn(
											item.current ? 'bg-dark-2 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'block rounded-md px-3 py-2 text-base font-medium',
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</Disclosure.Button>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>

			{children}

			<footer className="bg-dark-1">
				<div className={cn([layoutClassName])}>
					<div className="px-4 py-4 md:flex md:items-center md:justify-between">
						<span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 Kasansin Khamsat.</span>
						<div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
							{contacts.map((item, index) => (
								<a
									key={index}
									href={item.link}
									target="_blank"
									className="text-gray-400 hover:text-white text-2xl"
									rel="noreferrer"
								>
									<FontAwsome icon={item.icon} />
								</a>
							))}
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default memo(MainLayoutPage);
