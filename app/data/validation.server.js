const isValidTitle = (value) => {
	return value && value.trim().length > 0 && value.trim().length <= 30;
};

const isValidAmount = (value) => {
	const amount = parseFloat(value);
	return !isNaN(amount) && amount > 0;
};

const isValidDate = (value) => {
	return value && new Date(value).getTime() < new Date().getTime();
};

export const validateExpenseInput = (input) => {
	let validationErrors = {};

	if (!isValidTitle(input.title)) {
		validationErrors.title =
			"Invalid expense title. Must be at most 30 characters long.";
	}

	if (!isValidAmount(input.amount)) {
		validationErrors.amount =
			"Invalid amount. Must be a number greater than zero.";
	}

	if (!isValidDate(input.date)) {
		validationErrors.date = "Invalid date. Must be a date before today.";
	}

	if (Object.keys(validationErrors).length > 0) {
		throw validationErrors;
	}
};

const isValidEmail = (value) => {
	return value && value.includes("@");
};

const isValidPassword = (value) => {
	return value && value.trim().length >= 7;
};

export const validateCredentials = (input) => {
	let validationErrors = {};

	if (!isValidEmail(input.email)) {
		validationErrors.email = "Invalid email address.";
	}

	if (!isValidPassword(input.password)) {
		validationErrors.password =
			"Invalid password. Must be at least 7 characters long.";
	}

	if (Object.keys(validationErrors).length > 0) {
		throw validationErrors;
	}
};
