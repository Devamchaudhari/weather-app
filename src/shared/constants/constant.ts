import { CSSProperties } from 'react';
import Thunderstorm from 'assets/weatherVideo/Thunderstorm.mp4';
import Rain from 'assets/weatherVideo/Rain.mp4';
import snow from 'assets/weatherVideo/snow.mp4';
import Fog from 'assets/weatherVideo/Fog.mp4';
import hazeWeather from 'assets/weatherVideo/hazeWeather.mp4';
import dust from 'assets/weatherVideo/dust.mp4';
import Tornado from 'assets/weatherVideo/Tornado.mp4';
import skyClear from 'assets/weatherVideo/skyClear.mp4';
import cloud from 'assets/weatherVideo/cloud.mp4';
import moment from 'moment';
import { IWeatherCondition } from 'shared/interface';

export const metersToKilometers = (meters: number) => {
	return meters / 1000;
};

export const formatTime = (time: number) => {
	return moment(new Date(time * 1000), 'hh:mm:ss A').format('hh : mm A');
};

export const weatherConditionMapper: { [key: string]: IWeatherCondition } = {
	Thunderstorm: {
		condition: 'Expect thunderstorms today.',
		safetyMsg: 'Stay indoors and avoid open areas during thunderstorms.',
		weatherVideo: Thunderstorm
	},
	Drizzle: {
		condition: 'Expect light rain or drizzle today.',
		safetyMsg: 'Carry an umbrella or raincoat for light rain or drizzle.',
		weatherVideo: Rain
	},
	Rain: {
		condition: 'Expect rain showers today.',
		safetyMsg: 'Use an umbrella or raincoat to stay dry during rain showers.',
		weatherVideo: Rain
	},
	Snow: {
		condition: 'Expect snowfall today.',
		safetyMsg: 'Wear warm clothing and be cautious of slippery surfaces due to snowfall.',
		weatherVideo: snow
	},
	Mist: {
		condition: 'Expect misty conditions today.',
		safetyMsg: 'Drive with caution and use low-beam headlights in misty conditions.',
		weatherVideo: Fog
	},
	Smoke: {
		condition: 'Expect smoky conditions today.',
		safetyMsg: 'Avoid outdoor activities and stay indoors if there is smoke in the air.',
		weatherVideo: Fog
	},
	Haze: {
		condition: 'Expect hazy conditions today.',
		safetyMsg: 'Reduce outdoor activities and wear a mask in hazy conditions.',
		weatherVideo: hazeWeather
	},
	Dust: {
		condition: 'Expect dusty conditions today.',
		safetyMsg: 'Protect your eyes and respiratory system from dusty conditions.',
		weatherVideo: dust
	},
	Fog: {
		condition: 'Expect foggy conditions today.',
		safetyMsg: 'Drive with caution and use low-beam headlights in foggy conditions.',
		weatherVideo: Fog
	},
	Sand: {
		condition: 'Expect sandy conditions today.',
		safetyMsg: 'Cover your face and protect your eyes in sandy conditions.',
		weatherVideo: dust
	},
	Ash: {
		condition: 'Expect ash in the air today.',
		safetyMsg: 'Stay indoors and wear a mask if there is ash in the air.',
		weatherVideo: dust
	},
	Squall: {
		condition: 'Expect squally weather today.',
		safetyMsg: 'Take shelter and secure loose objects during squally weather.',
		weatherVideo: Thunderstorm
	},
	Tornado: {
		condition: 'Expect tornado-like conditions today.',
		safetyMsg: 'Seek shelter immediately and follow tornado safety protocols.',
		weatherVideo: Tornado
	},
	Clear: {
		condition: 'Expect clear skies today.',
		safetyMsg: 'Enjoy the clear skies and pleasant weather.',
		weatherVideo: skyClear
	},
	Clouds: {
		condition: 'Expect cloudy conditions today.',
		safetyMsg: 'Expect cloudy conditions but no specific safety measures required.',
		weatherVideo: cloud
	}
};
export const reactSelectStyles = {
	option: (base: CSSProperties, state: any) => ({
		...base,
		color: 'black',
		backgroundColor: state.isSelected ? '#297CC0' : state.isFocused ? '#297CC0' : '',
		':active': {
			backgroundColor: '#297CC0',
			color: 'white'
		},
		cursor: 'pointer'
	}),
	valueContainer: (base: CSSProperties) => {
		return {
			...base,
			marginLeft: 25
		};
	},
	menu: (base: CSSProperties) => ({
		...base,
		zIndex: 3,
		marginTop: 4,
		width: '150px'
	}),
	menuList: (base: CSSProperties) => ({
		...base,
		padding: 0,
		backgroundColor: '#ffffff !important',
		borderRadius: '8px',
		width: '300px'
	}),
	clearIndicator: (base: CSSProperties) => ({
		...base,
		cursor: 'pointer'
	}),
	dropdownIndicator: (base: CSSProperties, state: any) => ({
		...base,
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
		color: '#081D34'
	}),
	indicatorSeparator: () => ({
		width: '0'
	}),
	control: () => ({
		// none of react-selects styles are passed to <View />
		display: 'flex',
		width: '300px',
		minHeight: '34px !important',
		padding: '0px !important',
		borderRadius: '8px',
		color: 'white',
		border: '1px solid #D4D6D9',
		backgroundColor: '#ffffff !important'
	}),
	singleValue: (base: CSSProperties, state: any) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = 'opacity 300ms';
		return { ...base, opacity: opacity, transition: transition };
	},
	noOptionsMessage: (base: CSSProperties) => {
		return { ...base };
	}
};

export const CITY_NAME_LIST = [
	{
		label: 'Abidjan',
		value: 'Abidjan'
	},
	{
		label: 'Abu Dhabi',
		value: 'Abu Dhabi'
	},
	{
		label: 'Abuja',
		value: 'Abuja'
	},
	{
		label: 'Accra',
		value: 'Accra'
	},
	{
		label: 'Addis Ababa',
		value: 'Addis Ababa'
	},
	{
		label: 'Ahmedabad',
		value: 'Ahmedabad'
	},
	{
		label: 'Aleppo',
		value: 'Aleppo'
	},
	{
		label: 'Alexandria',
		value: 'Alexandria'
	},
	{
		label: 'Algiers',
		value: 'Algiers'
	},
	{
		label: 'Almaty',
		value: 'Almaty'
	},
	{
		label: 'Amman',
		value: 'Amman'
	},
	{
		label: 'Amsterdam',
		value: 'Amsterdam'
	},
	{
		label: 'Anchorage',
		value: 'Anchorage'
	},
	{
		label: 'Andorra la Vella',
		value: 'Andorra la Vella'
	},
	{
		label: 'Ankara',
		value: 'Ankara'
	},
	{
		label: 'Antananarivo',
		value: 'Antananarivo'
	},
	{
		label: 'Apia',
		value: 'Apia'
	},
	{
		label: 'Arnold',
		value: 'Arnold'
	},
	{
		label: 'Ashgabat',
		value: 'Ashgabat'
	},
	{
		label: 'Asmara',
		value: 'Asmara'
	},
	{
		label: 'Asuncion',
		value: 'Asuncion'
	},
	{
		label: 'Athens',
		value: 'Athens'
	},
	{
		label: 'Auckland',
		value: 'Auckland'
	},
	{
		label: 'Avarua',
		value: 'Avarua'
	},
	{
		label: 'Baghdad',
		value: 'Baghdad'
	},
	{
		label: 'Baku',
		value: 'Baku'
	},
	{
		label: 'Bamako',
		value: 'Bamako'
	},
	{
		label: 'Banda Aceh',
		value: 'Banda Aceh'
	},
	{
		label: 'Bandar Seri Begawan',
		value: 'Bandar Seri Begawan'
	},
	{
		label: 'Bandung',
		value: 'Bandung'
	},
	{
		label: 'Bangkok',
		value: 'Bangkok'
	},
	{
		label: 'Bangui',
		value: 'Bangui'
	},
	{
		label: 'Banjul',
		value: 'Banjul'
	},
	{
		label: 'Barcelona',
		value: 'Barcelona'
	},
	{
		label: 'Barranquilla',
		value: 'Barranquilla'
	},
	{
		label: 'Basrah',
		value: 'Basrah'
	},
	{
		label: 'Basse-Terre',
		value: 'Basse-Terre'
	},
	{
		label: 'Basseterre',
		value: 'Basseterre'
	},
	{
		label: 'Beijing',
		value: 'Beijing'
	},
	{
		label: 'Beirut',
		value: 'Beirut'
	},
	{
		label: 'Bekasi',
		value: 'Bekasi'
	},
	{
		label: 'Belem',
		value: 'Belem'
	},
	{
		label: 'Belgrade',
		value: 'Belgrade'
	},
	{
		label: 'Belmopan',
		value: 'Belmopan'
	},
	{
		label: 'Belo Horizonte',
		value: 'Belo Horizonte'
	},
	{
		label: 'Bengaluru',
		value: 'Bengaluru'
	},
	{
		label: 'Berlin',
		value: 'Berlin'
	},
	{
		label: 'Bern',
		value: 'Bern'
	},
	{
		label: 'Bishkek',
		value: 'Bishkek'
	},
	{
		label: 'Bissau',
		value: 'Bissau'
	},
	{
		label: 'Bogota',
		value: 'Bogota'
	},
	{
		label: 'Brasilia',
		value: 'Brasilia'
	},
	{
		label: 'Bratislava',
		value: 'Bratislava'
	},
	{
		label: 'Brazzaville',
		value: 'Brazzaville'
	},
	{
		label: 'Bridgetown',
		value: 'Bridgetown'
	},
	{
		label: 'Brisbane',
		value: 'Brisbane'
	},
	{
		label: 'Brussels',
		value: 'Brussels'
	},
	{
		label: 'Bucharest',
		value: 'Bucharest'
	},
	{
		label: 'Budapest',
		value: 'Budapest'
	},
	{
		label: 'Buenos Aires',
		value: 'Buenos Aires'
	},
	{
		label: 'Bujumbura',
		value: 'Bujumbura'
	},
	{
		label: 'Bursa',
		value: 'Bursa'
	},
	{
		label: 'Busan',
		value: 'Busan'
	},
	{
		label: 'Cairo',
		value: 'Cairo'
	},
	{
		label: 'Cali',
		value: 'Cali'
	},
	{
		label: 'Caloocan',
		value: 'Caloocan'
	},
	{
		label: 'Camayenne',
		value: 'Camayenne'
	},
	{
		label: 'Canberra',
		value: 'Canberra'
	},
	{
		label: 'Cape Town',
		value: 'Cape Town'
	},
	{
		label: 'Caracas',
		value: 'Caracas'
	},
	{
		label: 'Casablanca',
		value: 'Casablanca'
	},
	{
		label: 'Castries',
		value: 'Castries'
	},
	{
		label: 'Cayenne',
		value: 'Cayenne'
	},
	{
		label: 'Charlotte Amalie',
		value: 'Charlotte Amalie'
	},
	{
		label: 'Chengdu',
		value: 'Chengdu'
	},
	{
		label: 'Chennai',
		value: 'Chennai'
	},
	{
		label: 'Chicago',
		value: 'Chicago'
	},
	{
		label: 'Chisinau',
		value: 'Chisinau'
	},
	{
		label: 'Chittagong',
		value: 'Chittagong'
	},
	{
		label: 'Chongqing',
		value: 'Chongqing'
	},
	{
		label: 'Colombo',
		value: 'Colombo'
	},
	{
		label: 'Conakry',
		value: 'Conakry'
	},
	{
		label: 'Copenhagen',
		value: 'Copenhagen'
	},
	{
		label: 'Cordoba',
		value: 'Cordoba'
	},
	{
		label: 'Curitiba',
		value: 'Curitiba'
	},
	{
		label: 'Daegu',
		value: 'Daegu'
	},
	{
		label: 'Daejeon',
		value: 'Daejeon'
	},
	{
		label: 'Dakar',
		value: 'Dakar'
	},
	{
		label: 'Dallas',
		value: 'Dallas'
	},
	{
		label: 'Damascus',
		value: 'Damascus'
	},
	{
		label: 'Dar es Salaam',
		value: 'Dar es Salaam'
	},
	{
		label: 'Delhi',
		value: 'Delhi'
	},
	{
		label: 'Denver',
		value: 'Denver'
	},
	{
		label: 'Dhaka',
		value: 'Dhaka'
	},
	{
		label: 'Dili',
		value: 'Dili'
	},
	{
		label: 'Djibouti',
		value: 'Djibouti'
	},
	{
		label: 'Dodoma',
		value: 'Dodoma'
	},
	{
		label: 'Doha',
		value: 'Doha'
	},
	{
		label: 'Dongguan',
		value: 'Dongguan'
	},
	{
		label: 'Douala',
		value: 'Douala'
	},
	{
		label: 'Douglas',
		value: 'Douglas'
	},
	{
		label: 'Dubai',
		value: 'Dubai'
	},
	{
		label: 'Dublin',
		value: 'Dublin'
	},
	{
		label: 'Durban',
		value: 'Durban'
	},
	{
		label: 'Dushanbe',
		value: 'Dushanbe'
	},
	{
		label: 'Faisalabad',
		value: 'Faisalabad'
	},
	{
		label: 'Fort-de-France',
		value: 'Fort-de-France'
	},
	{
		label: 'Fortaleza',
		value: 'Fortaleza'
	},
	{
		label: 'Freetown',
		value: 'Freetown'
	},
	{
		label: 'Fukuoka',
		value: 'Fukuoka'
	},
	{
		label: 'Funafuti',
		value: 'Funafuti'
	},
	{
		label: 'Gaborone',
		value: 'Gaborone'
	},
	{
		label: 'George Town',
		value: 'George Town'
	},
	{
		label: 'Georgetown',
		value: 'Georgetown'
	},
	{
		label: 'Gibraltar',
		value: 'Gibraltar'
	},
	{
		label: 'Gitega',
		value: 'Gitega'
	},
	{
		label: 'Giza',
		value: 'Giza'
	},
	{
		label: 'Guadalajara',
		value: 'Guadalajara'
	},
	{
		label: 'Guangzhou',
		value: 'Guangzhou'
	},
	{
		label: 'Guatemala City',
		value: 'Guatemala City'
	},
	{
		label: 'Guayaquil',
		value: 'Guayaquil'
	},
	{
		label: 'Gujranwala',
		value: 'Gujranwala'
	},
	{
		label: 'Gustavia',
		value: 'Gustavia'
	},
	{
		label: 'Gwangju',
		value: 'Gwangju'
	},
	{
		label: 'Hamburg',
		value: 'Hamburg'
	},
	{
		label: 'Hanoi',
		value: 'Hanoi'
	},
	{
		label: 'Harare',
		value: 'Harare'
	},
	{
		label: 'Havana',
		value: 'Havana'
	},
	{
		label: 'Helsinki',
		value: 'Helsinki'
	},
	{
		label: 'Ho Chi Minh City',
		value: 'Ho Chi Minh City'
	},
	{
		label: 'Hong Kong',
		value: 'Hong Kong'
	},
	{
		label: 'Honiara',
		value: 'Honiara'
	},
	{
		label: 'Honolulu',
		value: 'Honolulu'
	},
	{
		label: 'Houston',
		value: 'Houston'
	},
	{
		label: 'Hyderabad',
		value: 'Hyderabad'
	},
	{
		label: 'Hyderabad',
		value: 'Hyderabad'
	},
	{
		label: 'Ibadan',
		value: 'Ibadan'
	},
	{
		label: 'Incheon',
		value: 'Incheon'
	},
	{
		label: 'Isfahan',
		value: 'Isfahan'
	},
	{
		label: 'Islamabad',
		value: 'Islamabad'
	},
	{
		label: 'Istanbul',
		value: 'Istanbul'
	},
	{
		label: 'Izmir',
		value: 'Izmir'
	},
	{
		label: 'Jaipur',
		value: 'Jaipur'
	},
	{
		label: 'Jakarta',
		value: 'Jakarta'
	},
	{
		label: 'Jeddah',
		value: 'Jeddah'
	},
	{
		label: 'Jerusalem',
		value: 'Jerusalem'
	},
	{
		label: 'Johannesburg',
		value: 'Johannesburg'
	},
	{
		label: 'Juarez',
		value: 'Juarez'
	},
	{
		label: 'Juba',
		value: 'Juba'
	},
	{
		label: 'Kabul',
		value: 'Kabul'
	},
	{
		label: 'Kaduna',
		value: 'Kaduna'
	},
	{
		label: 'Kampala',
		value: 'Kampala'
	},
	{
		label: 'Kano',
		value: 'Kano'
	},
	{
		label: 'Kanpur',
		value: 'Kanpur'
	},
	{
		label: 'Kaohsiung',
		value: 'Kaohsiung'
	},
	{
		label: 'Karachi',
		value: 'Karachi'
	},
	{
		label: 'Karaj',
		value: 'Karaj'
	},
	{
		label: 'Kathmandu',
		value: 'Kathmandu'
	},
	{
		label: 'Kawasaki',
		value: 'Kawasaki'
	},
	{
		label: 'Kharkiv',
		value: 'Kharkiv'
	},
	{
		label: 'Khartoum',
		value: 'Khartoum'
	},
	{
		label: 'Khulna',
		value: 'Khulna'
	},
	{
		label: 'Kigali',
		value: 'Kigali'
	},
	{
		label: 'Kingsburg',
		value: 'Kingsburg'
	},
	{
		label: 'Kingston',
		value: 'Kingston'
	},
	{
		label: 'Kingstown',
		value: 'Kingstown'
	},
	{
		label: 'Kinshasa',
		value: 'Kinshasa'
	},
	{
		label: 'Kobe',
		value: 'Kobe'
	},
	{
		label: 'Kolkata',
		value: 'Kolkata'
	},
	{
		label: 'Kota Bharu',
		value: 'Kota Bharu'
	},
	{
		label: 'Kowloon',
		value: 'Kowloon'
	},
	{
		label: 'Kuala Lumpur',
		value: 'Kuala Lumpur'
	},
	{
		label: 'Kumasi',
		value: 'Kumasi'
	},
	{
		label: 'Kuwait',
		value: 'Kuwait'
	},
	{
		label: 'Kyiv',
		value: 'Kyiv'
	},
	{
		label: 'Kyoto',
		value: 'Kyoto'
	},
	{
		label: 'La Paz',
		value: 'La Paz'
	},
	{
		label: 'Lagos',
		value: 'Lagos'
	},
	{
		label: 'Lahore',
		value: 'Lahore'
	},
	{
		label: 'Libreville',
		value: 'Libreville'
	},
	{
		label: 'Lilongwe',
		value: 'Lilongwe'
	},
	{
		label: 'Lima',
		value: 'Lima'
	},
	{
		label: 'Lisbon',
		value: 'Lisbon'
	},
	{
		label: 'Ljubljana',
		value: 'Ljubljana'
	},
	{
		label: 'Lome',
		value: 'Lome'
	},
	{
		label: 'London',
		value: 'London'
	},
	{
		label: 'Los Angeles',
		value: 'Los Angeles'
	},
	{
		label: 'Luanda',
		value: 'Luanda'
	},
	{
		label: 'Lubumbashi',
		value: 'Lubumbashi'
	},
	{
		label: 'Lusaka',
		value: 'Lusaka'
	},
	{
		label: 'Luxembourg',
		value: 'Luxembourg'
	},
	{
		label: 'Macau',
		value: 'Macau'
	},
	{
		label: 'Madrid',
		value: 'Madrid'
	},
	{
		label: 'Majuro',
		value: 'Majuro'
	},
	{
		label: 'Makassar',
		value: 'Makassar'
	},
	{
		label: 'Malabo',
		value: 'Malabo'
	},
	{
		label: 'Male',
		value: 'Male'
	},
	{
		label: 'Mamoudzou',
		value: 'Mamoudzou'
	},
	{
		label: 'Managua',
		value: 'Managua'
	},
	{
		label: 'Manama',
		value: 'Manama'
	},
	{
		label: 'Manaus',
		value: 'Manaus'
	},
	{
		label: 'Manila',
		value: 'Manila'
	},
	{
		label: 'Maputo',
		value: 'Maputo'
	},
	{
		label: 'Maracaibo',
		value: 'Maracaibo'
	},
	{
		label: 'Maracay',
		value: 'Maracay'
	},
	{
		label: 'Mariehamn',
		value: 'Mariehamn'
	},
	{
		label: 'Marigot',
		value: 'Marigot'
	},
	{
		label: 'Maseru',
		value: 'Maseru'
	},
	{
		label: 'Mashhad',
		value: 'Mashhad'
	},
	{
		label: 'Mbabane',
		value: 'Mbabane'
	},
	{
		label: 'Mecca',
		value: 'Mecca'
	},
	{
		label: 'Medan',
		value: 'Medan'
	},
	{
		label: 'Medellin',
		value: 'Medellin'
	},
	{
		label: 'Medina',
		value: 'Medina'
	},
	{
		label: 'Melbourne',
		value: 'Melbourne'
	},
	{
		label: 'Mexico City',
		value: 'Mexico City'
	},
	{
		label: 'Miami',
		value: 'Miami'
	},
	{
		label: 'Minsk',
		value: 'Minsk'
	},
	{
		label: 'Mogadishu',
		value: 'Mogadishu'
	},
	{
		label: 'Monaco',
		value: 'Monaco'
	},
	{
		label: 'Monrovia',
		value: 'Monrovia'
	},
	{
		label: 'Montevideo',
		value: 'Montevideo'
	},
	{
		label: 'Montreal',
		value: 'Montreal'
	},
	{
		label: 'Moroni',
		value: 'Moroni'
	},
	{
		label: 'Moscow',
		value: 'Moscow'
	},
	{
		label: 'Mosul',
		value: 'Mosul'
	},
	{
		label: 'Multan',
		value: 'Multan'
	},
	{
		label: 'Mumbai',
		value: 'Mumbai'
	},
	{
		label: 'Muscat',
		value: 'Muscat'
	},
	{
		label: "N'Djamena",
		value: "N'Djamena"
	},
	{
		label: 'Nagoya',
		value: 'Nagoya'
	},
	{
		label: 'Nairobi',
		value: 'Nairobi'
	},
	{
		label: 'Nanchong',
		value: 'Nanchong'
	},
	{
		label: 'Nanjing',
		value: 'Nanjing'
	},
	{
		label: 'Nassau',
		value: 'Nassau'
	},
	{
		label: 'Nay Pyi Taw',
		value: 'Nay Pyi Taw'
	},
	{
		label: 'New York',
		value: 'New York'
	},
	{
		label: 'Niamey',
		value: 'Niamey'
	},
	{
		label: 'Nicosia',
		value: 'Nicosia'
	},
	{
		label: 'Nouakchott',
		value: 'Nouakchott'
	},
	{
		label: 'Noumea',
		value: 'Noumea'
	},
	{
		label: 'Novosibirsk',
		value: 'Novosibirsk'
	},
	{
		label: "Nuku'alofa",
		value: "Nuku'alofa"
	},
	{
		label: 'Nur-Sultan',
		value: 'Nur-Sultan'
	},
	{
		label: 'Nuuk',
		value: 'Nuuk'
	},
	{
		label: 'Oranjestad',
		value: 'Oranjestad'
	},
	{
		label: 'Osaka',
		value: 'Osaka'
	},
	{
		label: 'Oslo',
		value: 'Oslo'
	},
	{
		label: 'Ottawa',
		value: 'Ottawa'
	},
	{
		label: 'Ouagadougou',
		value: 'Ouagadougou'
	},
	{
		label: 'Pago Pago',
		value: 'Pago Pago'
	},
	{
		label: 'Palembang',
		value: 'Palembang'
	},
	{
		label: 'Palo Alto',
		value: 'Palo Alto'
	},
	{
		label: 'Panama',
		value: 'Panama'
	},
	{
		label: 'Papeete',
		value: 'Papeete'
	},
	{
		label: 'Paramaribo',
		value: 'Paramaribo'
	},
	{
		label: 'Paris',
		value: 'Paris'
	},
	{
		label: 'Perth',
		value: 'Perth'
	},
	{
		label: 'Philadelphia',
		value: 'Philadelphia'
	},
	{
		label: 'Phnom Penh',
		value: 'Phnom Penh'
	},
	{
		label: 'Phoenix',
		value: 'Phoenix'
	},
	{
		label: 'Podgorica',
		value: 'Podgorica'
	},
	{
		label: 'Port Louis',
		value: 'Port Louis'
	},
	{
		label: 'Port Moresby',
		value: 'Port Moresby'
	},
	{
		label: 'Port of Spain',
		value: 'Port of Spain'
	},
	{
		label: 'Port-Vila',
		value: 'Port-Vila'
	},
	{
		label: 'Port-au-Prince',
		value: 'Port-au-Prince'
	},
	{
		label: 'Porto Alegre',
		value: 'Porto Alegre'
	},
	{
		label: 'Porto-Novo',
		value: 'Porto-Novo'
	},
	{
		label: 'Prague',
		value: 'Prague'
	},
	{
		label: 'Praia',
		value: 'Praia'
	},
	{
		label: 'Pretoria',
		value: 'Pretoria'
	},
	{
		label: 'Pristina',
		value: 'Pristina'
	},
	{
		label: 'Puebla',
		value: 'Puebla'
	},
	{
		label: 'Pune',
		value: 'Pune'
	},
	{
		label: 'Pyongyang',
		value: 'Pyongyang'
	},
	{
		label: 'Quezon City',
		value: 'Quezon City'
	},
	{
		label: 'Quito',
		value: 'Quito'
	},
	{
		label: 'Rabat',
		value: 'Rabat'
	},
	{
		label: 'Rawalpindi',
		value: 'Rawalpindi'
	},
	{
		label: 'Recife',
		value: 'Recife'
	},
	{
		label: 'Reykjavik',
		value: 'Reykjavik'
	},
	{
		label: 'Riga',
		value: 'Riga'
	},
	{
		label: 'Rio de Janeiro',
		value: 'Rio de Janeiro'
	},
	{
		label: 'Riyadh',
		value: 'Riyadh'
	},
	{
		label: 'Road Town',
		value: 'Road Town'
	},
	{
		label: 'Rome',
		value: 'Rome'
	},
	{
		label: 'Roseau',
		value: 'Roseau'
	},
	{
		label: "Saint George's",
		value: "Saint George's"
	},
	{
		label: 'Saint Helier',
		value: 'Saint Helier'
	},
	{
		label: "Saint John's",
		value: "Saint John's"
	},
	{
		label: 'Saint Peter Port',
		value: 'Saint Peter Port'
	},
	{
		label: 'Saint Petersburg',
		value: 'Saint Petersburg'
	},
	{
		label: 'Saint-Denis',
		value: 'Saint-Denis'
	},
	{
		label: 'Saint-Pierre',
		value: 'Saint-Pierre'
	},
	{
		label: 'Saipan',
		value: 'Saipan'
	},
	{
		label: 'Salvador',
		value: 'Salvador'
	},
	{
		label: 'San Antonio',
		value: 'San Antonio'
	},
	{
		label: 'San Diego',
		value: 'San Diego'
	},
	{
		label: 'San Francisco',
		value: 'San Francisco'
	},
	{
		label: 'San Jose',
		value: 'San Jose'
	},
	{
		label: 'San Juan',
		value: 'San Juan'
	},
	{
		label: 'San Marino',
		value: 'San Marino'
	},
	{
		label: 'San Salvador',
		value: 'San Salvador'
	},
	{
		label: 'Sanaa',
		value: 'Sanaa'
	},
	{
		label: 'Santa Cruz de la Sierra',
		value: 'Santa Cruz de la Sierra'
	},
	{
		label: 'Santiago',
		value: 'Santiago'
	},
	{
		label: 'Santo Domingo',
		value: 'Santo Domingo'
	},
	{
		label: 'Sao Paulo',
		value: 'Sao Paulo'
	},
	{
		label: 'Sao Tome',
		value: 'Sao Tome'
	},
	{
		label: 'Sapporo',
		value: 'Sapporo'
	},
	{
		label: 'Sarajevo',
		value: 'Sarajevo'
	},
	{
		label: 'Seattle',
		value: 'Seattle'
	},
	{
		label: 'Semarang',
		value: 'Semarang'
	},
	{
		label: 'Seoul',
		value: 'Seoul'
	},
	{
		label: 'Shanghai',
		value: 'Shanghai'
	},
	{
		label: 'Sharjah',
		value: 'Sharjah'
	},
	{
		label: 'Shenzhen',
		value: 'Shenzhen'
	},
	{
		label: 'Singapore',
		value: 'Singapore'
	},
	{
		label: 'Skopje',
		value: 'Skopje'
	},
	{
		label: 'Sofia',
		value: 'Sofia'
	},
	{
		label: 'South Tangerang',
		value: 'South Tangerang'
	},
	{
		label: 'Soweto',
		value: 'Soweto'
	},
	{
		label: 'Stockholm',
		value: 'Stockholm'
	},
	{
		label: 'Sucre',
		value: 'Sucre'
	},
	{
		label: 'Surabaya',
		value: 'Surabaya'
	},
	{
		label: 'Surat',
		value: 'Surat'
	},
	{
		label: 'Suva',
		value: 'Suva'
	},
	{
		label: 'Sydney',
		value: 'Sydney'
	},
	{
		label: 'Tabriz',
		value: 'Tabriz'
	},
	{
		label: 'Taipei',
		value: 'Taipei'
	},
	{
		label: 'Tallinn',
		value: 'Tallinn'
	},
	{
		label: 'Tangerang',
		value: 'Tangerang'
	},
	{
		label: 'Tarawa',
		value: 'Tarawa'
	},
	{
		label: 'Tashkent',
		value: 'Tashkent'
	},
	{
		label: 'Tbilisi',
		value: 'Tbilisi'
	},
	{
		label: 'Tegucigalpa',
		value: 'Tegucigalpa'
	},
	{
		label: 'Tehran',
		value: 'Tehran'
	},
	{
		label: 'Tel Aviv',
		value: 'Tel Aviv'
	},
	{
		label: 'Thimphu',
		value: 'Thimphu'
	},
	{
		label: 'Tianjin',
		value: 'Tianjin'
	},
	{
		label: 'Tijuana',
		value: 'Tijuana'
	},
	{
		label: 'Tirana',
		value: 'Tirana'
	},
	{
		label: 'Tokyo',
		value: 'Tokyo'
	},
	{
		label: 'Toronto',
		value: 'Toronto'
	},
	{
		label: 'Torshavn',
		value: 'Torshavn'
	},
	{
		label: 'Tripoli',
		value: 'Tripoli'
	},
	{
		label: 'Tunis',
		value: 'Tunis'
	},
	{
		label: 'Ulan Bator',
		value: 'Ulan Bator'
	},
	{
		label: 'Vaduz',
		value: 'Vaduz'
	},
	{
		label: 'Valencia',
		value: 'Valencia'
	},
	{
		label: 'Valletta',
		value: 'Valletta'
	},
	{
		label: 'Vancouver',
		value: 'Vancouver'
	},
	{
		label: 'Victoria',
		value: 'Victoria'
	},
	{
		label: 'Vienna',
		value: 'Vienna'
	},
	{
		label: 'Vientiane',
		value: 'Vientiane'
	},
	{
		label: 'Vilnius',
		value: 'Vilnius'
	},
	{
		label: 'Warsaw',
		value: 'Warsaw'
	},
	{
		label: 'Washington',
		value: 'Washington'
	},
	{
		label: 'Wellington',
		value: 'Wellington'
	},
	{
		label: 'Willemstad',
		value: 'Willemstad'
	},
	{
		label: 'Windhoek',
		value: 'Windhoek'
	},
	{
		label: 'Wuhan',
		value: 'Wuhan'
	},
	{
		label: "Xi'an",
		value: "Xi'an"
	},
	{
		label: 'Yamoussoukro',
		value: 'Yamoussoukro'
	},
	{
		label: 'Yangon',
		value: 'Yangon'
	},
	{
		label: 'Yaounde',
		value: 'Yaounde'
	},
	{
		label: 'Yekaterinburg',
		value: 'Yekaterinburg'
	},
	{
		label: 'Yerevan',
		value: 'Yerevan'
	},
	{
		label: 'Yokohama',
		value: 'Yokohama'
	},
	{
		label: 'Zagreb',
		value: 'Zagreb'
	}
];
