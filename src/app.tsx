import Homepage from 'features/homePage/homePage';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='*' element={<Navigate replace to='/forecast' />} />
			<Route path='/forecast' element={<Homepage />} />
		</Routes>
	);
};

export default App;
