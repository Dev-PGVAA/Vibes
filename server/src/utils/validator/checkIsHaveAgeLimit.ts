export function checkIsHaveAgeLimit(birthday: Date): boolean {
	const isHaveAgeLimit = new Date().getFullYear() - birthday.getFullYear() <= 18

	return isHaveAgeLimit
}
