import { DeviceModel, getDevice } from '../detectDevice';

describe('[utils][helpers] detectDevice', () => {
	it('should return correct device', () => {
		expect(getDevice()).toBe(DeviceModel.Desktop);
	});
});
