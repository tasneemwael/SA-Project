
const carousel = document.querySelector('.carousel');
const prevArrow = document.querySelector('.arrow-left');
const nextArrow = document.querySelector('.arrow-right');
const modelsContainer = document.querySelector('.models');
const yearDropdown = document.querySelector('#year-dropdown');
const statusDropdown = document.querySelector('#status-dropdown');
const submitBtn = document.querySelector('#submit-btn');
const resultCard = document.querySelector('#result-card');
const resultTitle = document.querySelector('#result-title');
const resultMessage = document.querySelector('#result-message');


const carModels = {
    Ferrari: ['488 Spider', '812 Superfast', 'SF90 Stradale'],
    Lamborghini: ['Aventador', 'Huracán', 'Urus'],
    Porsche: ['911 Carrera', 'Panamera', 'Cayenne'],
    Mercedes: ['AMG GT', 'S-Class', 'S-Class'],
    Bugatti: ['Chiron', 'Chiron', 'Veyron'],
    Tesla: ['Model S', 'Model S', 'Cybertruck'],
    BMW: ['Model S', 'Aventador', 'Veyron'],
};

let selectedBrand = '';
let selectedModel = '';
let selectedYear = '';
let selectedStatus = '';


carousel.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        selectedBrand = e.target.alt;
        loadCarModels(selectedBrand);
    }
});

function loadCarModels(brand) {
    modelsContainer.innerHTML = ''; // Clear previous models
    const models = carModels[brand];
    if (models) {
        models.forEach((model) => {
            const modelDiv = document.createElement('div');


            const modelImg = document.createElement('img');
            modelImg.src = `images/${model.replace(/ /g, '-')}.png`;  // Assuming model images are named like '488-spider.jpg'
            modelImg.alt = model;
            modelImg.classList.add('model-img'); // Add a class for styling

            modelDiv.appendChild(modelImg);

            modelDiv.addEventListener('click', () => {

                const allModels = document.querySelectorAll('.models div');
                allModels.forEach((m) => m.classList.remove('selected'));


                modelDiv.classList.add('selected');
                selectedModel = model;
            });

            modelsContainer.appendChild(modelDiv);
        });
    }
}


submitBtn.addEventListener('click', () => {
    selectedYear = yearDropdown.value;
    selectedStatus = statusDropdown.value;

    if (selectedBrand && selectedModel && selectedYear && selectedStatus) {
        if (selectedStatus === 'new') {
            showResult(true);
        } else {
            showResult(false);
        }
    } else {
        alert('Please complete all steps!');
    }
});


function showResult(isSuccess) {
    const overlay = document.getElementById('overlay');
    resultCard.classList.remove('hidden', 'success', 'failure', 'visible');

    if (isSuccess) {
        resultCard.classList.add('success');
        resultTitle.textContent = 'Verification Successful!';
        resultMessage.textContent = 'Your car is in perfect condition for the race!';
    } else {
        resultCard.classList.add('failure');
        resultTitle.textContent = 'Verification Failed';
        resultMessage.textContent = 'Sorry, your car does not meet the requirements.';
    }

    overlay.style.display = 'block';
    resultCard.classList.add('visible');
}
function closePopup() {
    const overlay = document.getElementById('overlay');
    resultCard.classList.remove('visible');
    overlay.style.display = 'none';
}


document.getElementById('overlay').addEventListener('click', closePopup);

let scrollAmount = 0;

prevArrow.addEventListener('click', () => {
    scrollAmount -= 250;
    carousel.style.transform = `translateX(${scrollAmount}px)`;
});

nextArrow.addEventListener('click', () => {
    scrollAmount += 250;
    carousel.style.transform = `translateX(${scrollAmount}px)`;
});