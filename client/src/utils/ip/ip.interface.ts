export interface IUserIp {
	ip: string
	type: string
	hostname: string | null
	carrier: {
		name: string
		mcc: string
		mnc: string
	}
	company: {
		domain: string
		name: string
		type: string
	}
	connection: {
		asn: number
		domain: string
		organization: string
		route: string
		type: string
	}
	currency: {
		code: string
		name: string
		name_native: string
		plural: string
		plural_native: string
		symbol: string
		symbol_native: string
		format: {
			decimal_separator: string
			group_separator: string
			negative: {
				prefix: string
				suffix: string
			}
			positive: {
				prefix: string
				suffix: string
			}
		}
	}
	location: {
		continent: {
			code: string
			name: string
		}
		country: {
			area: number
			borders: string[]
			calling_code: string
			capital: string
			code: string
			name: string
			population: number
			population_density: number
			flag: {
				emoji: string
				emoji_unicode: string
				emojitwo: string
				noto: string
				twemoji: string
				wikimedia: string
			}
			languages: [
				{
					code: string
					name: string
					native: string
				},
				{
					code: string
					name: string
					native: string
				},
				{
					code: string
					name: string
					native: string
				},
				{
					code: string
					name: string
					native: string
				},
				{
					code: string
					name: string
					native: string
				},
				{
					code: string
					name: string
					native: string
				},
				{
					code: string
					name: string
					native: string
				}
			]
			tld: string
		}
		region: {
			code: string
			name: string
		}
		city: string
		postal: string
		latitude: number
		longitude: number
		language: {
			code: string
			name: string
			native: string
		}
		in_eu: boolean
	}
	security: {
		is_abuser: boolean
		is_attacker: boolean
		is_bogon: boolean
		is_cloud_provider: boolean
		is_proxy: boolean
		is_relay: boolean
		is_tor: boolean
		is_tor_exit: boolean
		is_vpn: boolean
		is_anonymous: boolean
		is_threat: boolean
	}
	time_zone: {
		id: string
		abbreviation: string
		current_time: string
		name: string
		offset: number
		in_daylight_saving: boolean
	}
	user_agent: {
		header: string
		name: string
		type: string
		version: string
		version_major: string
		device: {
			brand: string
			name: string
			type: string
		}
		engine: {
			name: string
			type: string
			version: string
			version_major: string
		}
		os: {
			name: string
			type: string
			version: string
		}
	}
}
