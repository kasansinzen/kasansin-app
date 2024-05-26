import { isMobile, isTablet, isBrowser, isDesktop } from 'react-device-detect';

export const enum DeviceModel {
	Mobile = 'Mobile',
	Tablet = 'Tablet',
	Desktop = 'Desktop',
	Browser = 'Browser',
	Unknown = 'Unknown',
}

export const getDevice = () => {
	const device = isMobile
		? DeviceModel.Mobile
		: isTablet
			? DeviceModel.Tablet
			: isDesktop
				? DeviceModel.Desktop
				: isBrowser
					? DeviceModel.Browser
					: DeviceModel.Unknown;

	return device;
};

export default getDevice;
