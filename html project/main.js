document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    const surveyContainer = document.querySelector('.survey-container');
    const thankYouMessage = document.querySelector('.thank-you');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        const surveyData = {
            favoriteLanguage: formData.get('q1'),
            codingSkill: formData.get('q2'),
            enjoyment: formData.get('q3')
        };

        // Display the thank-you message and hide the survey container
        surveyContainer.style.display = 'none';
        thankYouMessage.style.display = 'block';

        console.log(surveyData);

        // You can send the survey data to a server or perform any other action here
    });
});