const timeStamp = document.querySelector('#timestamp');
const dateFortoday =  new Date().toISOString();
timeStamp.value = dateFortoday;

const openNp = document.querySelector('#open-np');
const closeNp = document.querySelector('#close-np');
const modalNp = document.querySelector('#modal-np')

openNp.addEventListener('click', () => {modalNp.showModal();});
closeNp.addEventListener('click', () => {modalNp.close();})

const openBronze = document.querySelector('#open-bronze');
const closeBronze = document.querySelector('#close-bronze');
const modalBronze = document.querySelector('#modal-bronze')

openBronze.addEventListener('click', () => {modalBronze.showModal();});
closeBronze.addEventListener('click', () => {modalBronze.close();})

const openSilver = document.querySelector('#open-silver');
const closeSilver = document.querySelector('#close-silver');
const modalSilver = document.querySelector('#modal-silver')

openSilver.addEventListener('click', () => {modalSilver.showModal();});
closeSilver.addEventListener('click', () => {modalSilver.close();})

const openGold = document.querySelector('#open-gold');
const closeGold = document.querySelector('#close-gold');
const modalGold = document.querySelector('#modal-gold')

openGold.addEventListener('click', () => {modalGold.showModal();});
closeGold.addEventListener('click', () => {modalGold.close();})