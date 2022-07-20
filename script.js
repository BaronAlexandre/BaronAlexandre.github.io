const menuSection = document.getElementById('menu-section');

const hobbies = document.getElementById('hobbies');
const dev = document.getElementById('dev');
const music = document.getElementById('music');
const mts = document.getElementById('mts');
const socials = document.getElementById('socials');

const hobbiesSection = document.getElementById('hobbies-section');
const devSection = document.getElementById('dev-section');
const musicSection = document.getElementById('music-section');
const mtsSection = document.getElementById('mts-section');
const socialsSection = document.getElementById('socials-section');
const navigationSection = document.getElementById('navigation-section');

const hobbiesNavigation = document.getElementById('hobbies-navigation');
const devNavigation = document.getElementById('dev-navigation');
const musicNavigation = document.getElementById('music-navigation');
const mtsNavigation = document.getElementById('mts-navigation');
const socialsNavigation = document.getElementById('socials-navigation');
const navigationNavigation = document.getElementById('navigation-navigation');

hobbies.onclick = function() { showSection(hobbiesSection); }
dev.onclick = function() { showSection(devSection); }
music.onclick = function() { showSection(musicSection); }
mts.onclick = function() { showSection(mtsSection); }
socials.onclick = function() { showSection(socialsSection); }

hobbiesNavigation.onclick = function() { showSection(hobbiesSection); }
devNavigation.onclick = function() { showSection(devSection); }
musicNavigation.onclick = function() { showSection(musicSection); }
mtsNavigation.onclick = function() { showSection(mtsSection); }
socialsNavigation.onclick = function() { showSection(socialsSection); }

showSection = (element) => {
	let els = [hobbiesSection, navigationSection, menuSection, devSection, musicSection, mtsSection, socialsSection];
    for(var i = 0; i < els.length; i++)
    {
    	if (!els[i].classList.contains('hidden')) {
    		els[i].classList.add('hidden');    		
		}
		setTimeout(() => {
		  const box = document.getElementById('spotify-animation');
		  box.style.display = 'none';
		}, 3900);
    }
	
	if(els[i] != menuSection && navigationSection.classList.contains('hidden')){
		navigationSection.classList.remove('hidden');
		console.log("yes");		
	}else{
		navigationSection.classList.add('hidden');
		console.log("no");		
	}
    element.classList.remove('hidden');
 }
