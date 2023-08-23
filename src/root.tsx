import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from 'shared/components/errorBoundary/errorBoundary';
import App from './app';
import 'assets/styles/index.scss';

const Root: React.FC = (props) => {
	return (
		<ErrorBoundary>
			<BrowserRouter>
				<App {...props} />
			</BrowserRouter>
		</ErrorBoundary>
	);
};

export default Root;
