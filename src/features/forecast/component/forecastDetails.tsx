import React from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart,
	ChartOptions,
	CategoryScale,
	LinearScale,
	Title,
	LineElement,
	PointElement,
	Filler,
	Tooltip
} from 'chart.js';
import isEmpty from 'lodash/isEmpty';
import Spinner from 'shared/components/spinner/spinner';
import {
	ThunderStormIcon,
	DrizzleIcon,
	RainIcon,
	SnowIcon,
	MistIcon,
	SmokeIcon,
	HazeIcon,
	DustIcon,
	FogIcon,
	AshIcon,
	SquallIcon,
	TornadoIcon,
	ClearSkyIcon,
	CloudIcon,
	CompassIcon,
	PressureIcon
} from 'shared/components/icons/icons';

import { formatTime, metersToKilometers } from 'shared/constants/constant';
import { IForecast, IForecastChartData, IWeatherIcon } from '../interface/interface';
import 'assets/styles/module/forecast.scss';

Chart.register(CategoryScale, LinearScale, Title, LineElement, PointElement, Filler, Tooltip);

const ForecastDetails: React.FC<IForecast> = (props) => {
	const { weatherData, isLoading, forecastData } = props;

	const visibilityInKm = metersToKilometers(weatherData.visibility);

	const weatherConditionIconMapper: IWeatherIcon = {
		ThunderStormIcon: <ThunderStormIcon />,
		Drizzle: <DrizzleIcon />,
		Rain: <RainIcon />,
		Snow: <SnowIcon />,
		Mist: <MistIcon />,
		Smoke: <SmokeIcon />,
		Haze: <HazeIcon />,
		Dust: <DustIcon />,
		Fog: <FogIcon />,
		Sand: <DustIcon />,
		Ash: <AshIcon />,
		Squall: <SquallIcon />,
		Tornado: <TornadoIcon />,
		Clear: <ClearSkyIcon />,
		Clouds: <CloudIcon />
	};

	const transformData = () => {
		if (!forecastData) {
			return null;
		}
		const chartData = {
			labels: [] as string[],
			datasets: [
				{
					label: 'Temperature',
					data: [] as number[],
					fill: true, // Fill the area under the line
					backgroundColor: 'rgba(255,255,255,0.3)',
					borderColor: 'white', // Border color of the line,
					borderWidth: 3,
					borderDash: [],
					borderDashOffset: 0.0
				}
			]
		};

		forecastData.forEach((item: IForecastChartData) => {
			const dateObj = new Date(item.dt_txt);
			const formattedDate = dateObj.toLocaleDateString('en-US', {
				month: 'long',
				day: 'numeric'
			});
			chartData.labels.push(formattedDate);
			chartData.datasets[0].data.push(Math.trunc(item.main.temp));
		});

		return chartData;
	};
	const chartData = transformData();
	const options: ChartOptions<'line'> = {
		plugins: {
			tooltip: {
				mode: 'index',
				intersect: true
			}
		},
		elements: {
			line: {
				tension: 0.4 // smooth lines
			}
		},
		scales: {
			x: {
				type: 'category',
				labels: chartData?.labels,
				ticks: {
					display: false
				},
				grid: {
					display: false
				}
			},
			y: {
				type: 'linear',
				beginAtZero: true,
				ticks: {
					color: 'white',
					font: {
						weight: 'bold',
						size: 15
					}
				},
				grid: {
					display: false
				}
			}
		}
	};

	return (
		<div className='forecast__widget width--30 height--full-viewport overflow--auto'>
			{!isLoading && (
				<div className='forecast__wrapper'>
					<div className='flex justify-content--between align-items--center city_details__wrapper'>
						<p className='m--25 font--semi-bold font-size--28 flex flex--column '>
							{weatherData?.name}
							<span className='font-size--md'>{weatherData.sys?.country}</span>
						</p>
						<div>{!isEmpty(weatherData) && weatherConditionIconMapper[weatherData.weather[0]?.main]}</div>
					</div>

					<div className='break__line' />
					<p className='m--25 pt--15 font--semi-bold font-size--24'>Weather Details</p>

					<p className='m--25 flex justify-content--between align-items--center'>
						<span className='font--semi-bold mr--10'>Temperature</span>
						<span className='font--semi-bold'>{Math.trunc(weatherData.main?.temp)}&deg; C</span>
					</p>
					<p className='m--25 flex justify-content--between align-items--center'>
						<span className='font--semi-bold mr--10'>Feels like</span>
						<span className='font--semi-bold'>{Math.trunc(weatherData.main?.feels_like)}&deg; C</span>
					</p>

					<p className='m--25 flex justify-content--between align-items--center'>
						<span className='font--semi-bold mr--10'>Sunrise</span>
						<span className='font--semi-bold'>{formatTime(weatherData.sys?.sunrise)}</span>
					</p>

					<p className='m--25 flex justify-content--between align-items--center'>
						<span className='font--semi-bold mr--10'>Sunset</span>
						<span className='font--semi-bold'>{formatTime(weatherData.sys?.sunset)}</span>
					</p>

					<p className='m--25 flex justify-content--between align-items--center'>
						<span className='font--semi-bold mr--10'>Humidity</span>
						<span className='font--semi-bold'>{weatherData.main?.humidity} %</span>
					</p>

					<p className='m--25 flex justify-content--between'>
						<span className='font--semi-bold mr--10'>Visibility</span>
						<span className='font--semi-bold'>{visibilityInKm} km</span>
					</p>

					<div className='break__line' />
					<div className='flex justify-content--around m--10 wind_wrapper'>
						<div className='m--25 flex  flex--column'>
							<p className='font--semi-bold mr--10 font-size--22 flex align-items--center'>
								Wind
								<CompassIcon width='50' height='50' />
							</p>

							<h1 className='mt--30'>
								{weatherData.wind?.speed}
								<span className='ml--10 font--medium'>kph</span>
							</h1>
						</div>
						<div className='horizontal_break__line mt--20' />
						<div className='m--25 flex  flex--column'>
							<p className='font--semi-bold mr--10 font-size--22 flex align-items--center'>
								Pressure
								<PressureIcon width='50' height='50' />
							</p>
							<h1 className='mt--30'>
								{weatherData.main?.pressure}
								<span className='ml--10 font--medium'>hpa</span>
							</h1>
						</div>
					</div>
					<div className='break__line mt--25' />
					<div className='m--25 flex flex--column chart__container'>
						<p className='pt--15 font--semi-bold font-size--24 pb--15'>Weekly Chart</p>
						{chartData ? <Line data={chartData} options={options} /> : <Spinner />}
					</div>
				</div>
			)}
			{isLoading && <Spinner />}
		</div>
	);
};

export default ForecastDetails;
