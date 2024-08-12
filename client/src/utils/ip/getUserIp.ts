import axios from 'axios'

import type { IUserIp } from './ip.interface'

export async function getUserIp() {
	const { data: userInfo } = await axios.get<IUserIp>(
		'https://api.ipregistry.co/?key=tryout'
	)

	const userCountry = userInfo.location.country.name
	const userDateTime = Date.parse(userInfo.time_zone.current_time)
	const userDevice = userInfo.user_agent.os.name

	return {
		userCountry,
		userDateTime,
		userDevice
	}
}
