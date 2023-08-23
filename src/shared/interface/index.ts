export interface IResponseObject<T> {
	isError: boolean;
	message: string;
	data: T;
}

export interface IWeatherCondition {
	condition: string;
	safetyMsg: string;
	weatherVideo: string;
}
