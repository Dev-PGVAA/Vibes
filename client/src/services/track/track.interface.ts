export interface ITrack {
	name: string
	author: string
	duration: number
	cover: string
	audio: string
	albom?: string
	isHaveAgeLimit: boolean
}

export interface ITrackResponse {
	GetTracksByName: ITrack[]
}
