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

hobbies.onclick = function() { showSection(hobbiesSection); }
dev.onclick = function() { showSection(devSection); }
music.onclick = function() { showSection(musicSection); }
mts.onclick = function() { showSection(mtsSection); }
socials.onclick = function() { showSection(socialsSection); }

showSection = (element) => {
	let els = [hobbiesSection, menuSection, devSection, musicSection, mtsSection, socialsSection];
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
    element.classList.remove('hidden');
 }
