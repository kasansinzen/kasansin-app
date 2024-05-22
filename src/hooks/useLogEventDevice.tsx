import getDevice from '@/utils/helpers/detectDevice';
import { AnalyticFirebaseService } from '@/utils/services/firebase/analytic.firebase';
import { useEffect } from 'react';

const useLogEventDevice = () => {
	useEffect(() => {
		const analyticService = new AnalyticFirebaseService();
		analyticService.logEvent('[device-used]', { device: getDevice() });
		return () => {};
	}, []);
};

export default useLogEventDevice;
