export const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const PASSWORD_REGEX =
	/^(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/;
