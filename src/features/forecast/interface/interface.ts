import { ReactNode } from 'react';

export interface IWeatherIcon {
	[key: string]: ReactNode;
}
export interface IForecastChartData {
	dt_txt: string;
	main: {
		temp: number;
	};
}
export interface IForecast {
	weatherData: Record<string, any>;
	forecastData?: IForecastChartData[];
	getWeatherData?: (cityName: string) => void;
	getWeeklyData?: (cityName: string) => void;
	isLoading?: boolean;
}

export interface IDropDownOptions {
	label: string;
	value: string;
}
