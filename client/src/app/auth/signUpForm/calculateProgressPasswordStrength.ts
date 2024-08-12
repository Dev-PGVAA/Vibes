export const calculateProgressPasswordStrength = (password: string) => {
	var regex = new Array()
	regex.push('[A-Z]')
	regex.push('[a-z]')
	regex.push('[0-9]')
	regex.push('[$@$!%*#?&]')

	var passed = 0

	for (var i = 0; i < regex.length; i++) {
		if (new RegExp(regex[i]).test(password)) {
			passed++
		}
	}

	if (password.length < 8) {
		return 'bg-red-600'
	} else {
		switch (passed) {
			case 1:
				return 'bg-red-600'
			case 2:
				return 'bg-yellow-600'
			case 3:
				return 'bg-green-600'
			case 4:
				return 'bg-blue-600'
		}
	}
}
