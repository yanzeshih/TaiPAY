// Tab Navigation
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetPage = btn.dataset.page;
    pages.forEach(p => p.classList.add('hidden'));
    document.getElementById(targetPage).classList.remove('hidden');
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Notification dropdown
const bell = document.getElementById('notificationBell');
const dropdown = document.getElementById('notificationDropdown');
bell.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Profile Page toggle
const profileIcon = document.getElementById('profileIcon');
const profilePage = document.getElementById('profilePage');
const homePage = document.getElementById('homePage');
const backToHome = document.getElementById('backToHome');

profileIcon.addEventListener('click', () => {
  homePage.classList.add('hidden');
  profilePage.classList.remove('hidden');
});

backToHome.addEventListener('click', () => {
  profilePage.classList.add('hidden');
  homePage.classList.remove('hidden');
});

// Button actions
document.getElementById('toTransfer').addEventListener('click', () => {
  document.querySelector('[data-page="transferPage"]').click();
});

document.getElementById('sendMoney').addEventListener('click', () => {
  alert('✅ Transfer Sent!');
});

// Payment method selection
const methodButtons = document.querySelectorAll('.payment-methods .method-btn');
let selectedMethod = null;

methodButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    methodButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedMethod = btn.dataset.method;
  });
});

// Settings interactions
document.querySelector('.link-bank').addEventListener('click', () => alert('Linked successfully ✅'));
document.querySelectorAll('.link-options .method-btn').forEach(btn => {
  btn.addEventListener('click', () => alert('Linked successfully ✅'));
});

document.querySelector('.change-pass').addEventListener('click', () => alert('Changed successfully ✅'));
document.querySelector('.feedback-btn').addEventListener('click', () => alert('Submitted successfully ✅'));
document.querySelector('.logout-btn').addEventListener('click', () => alert('Logged out successfully 👋'));

// ===== Login & Signup System =====

// Elements
const loginPage = document.getElementById('loginPage');
const signupPage = document.getElementById('signupPage');
const homePageSection = document.getElementById('homePage');

// Initially show login only
document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
loginPage.classList.remove('hidden');

// Go to signup
document.getElementById('goToSignup').addEventListener('click', () => {
  loginPage.classList.add('hidden');
  signupPage.classList.remove('hidden');
});

// Back to login
document.getElementById('backToLogin').addEventListener('click', () => {
  signupPage.classList.add('hidden');
  loginPage.classList.remove('hidden');
});

// Signup button
document.getElementById('signupBtn').addEventListener('click', () => {
  const name = document.getElementById('signupName').value.trim();
  const id = document.getElementById('signupID').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pass = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirm').value;
    // Save user info (demo purpose only)
  const user = { name, id, email, pass };
  localStorage.setItem('user', JSON.stringify(user));


  if (!name || !id || !email || !pass || !confirm) {
    alert('⚠️ Please fill in all fields.');
    return;
  }
  if (pass !== confirm) {
    alert('⚠️ Passwords do not match.');
    return;
  }

  // Save simple user data (for demo only)
 
  alert('✅ Sign-up successful!');
  signupPage.classList.add('hidden');
  loginPage.classList.remove('hidden');
});


document.getElementById('loginBtn').addEventListener('click', () => {
  const id = document.getElementById('loginID').value.trim();
  const pass = document.getElementById('loginPassword').value;

  const userData = JSON.parse(localStorage.getItem('user'));

  if (userData && id === userData.id && pass === userData.pass) {
    alert('✅ Login successful!');
    loginPage.classList.add('hidden');
    homePageSection.classList.remove('hidden');
    document.querySelector('.bottom-nav').style.display = 'flex';

    
    document.querySelector('#profilePage h2').textContent = userData.name;
    document.querySelector('#profilePage p').textContent = `Student ID: ${userData.id}`;
  } else {
    alert('❌ Invalid ID or password.');
  }
});



document.querySelector('.bottom-nav').style.display = 'none';

const appHeader = document.querySelector('.app-header');


function updateHeaderVisibility() {
  if (!loginPage.classList.contains('hidden') || !signupPage.classList.contains('hidden')) {
    appHeader.style.display = 'none';
  } else {
    appHeader.style.display = 'flex'; 
  }
}

updateHeaderVisibility();

document.addEventListener('click', updateHeaderVisibility);

