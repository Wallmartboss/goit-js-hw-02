let check;
function checkPassword(password) {
	const correctPassword = "jqueryismyjam";
	check =
		password === correctPassword
			? `Access granted`
			: `Access denied, wrong password!`;
	console.log(check);
}
checkPassword("jqueryismyjam");
checkPassword("angul4r1sl1f3");
checkPassword("r3actsux");
