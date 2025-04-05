const nav = document.getElementById('nav');
const login = document.getElementById('login');
const signup = document.getElementById('signup');
const signupFooter = document.getElementById('signupFooter');
const addDate = document.getElementById('addDate');

let date = new Date();

addDate.innerHTML = date.getFullYear();

let toggleNavbar = true;
let loginDropdown = true;
let signupDropdown = true;
let signupFooterDropdown = true;

function toggleNav() {
	toggleNavbar ? nav.classList.add('active') : nav.classList.remove('active');
	toggleNavbar = !toggleNavbar;
}
function openLogindropdown() {
	loginDropdown
		? login.classList.add('open')
		: login.classList.remove('open');
	loginDropdown = !loginDropdown;
}
function openSignupdropdown() {
	signupDropdown
		? signup.classList.add('open')
		: signup.classList.remove('open');
	signupDropdown = !signupDropdown;
}
function openSignupFooterdropdown() {
	signupFooterDropdown
		? signupFooter.classList.add('open')
		: signupFooter.classList.remove('open');
	signupFooterDropdown = !signupFooterDropdown;
}
