document.addEventListener('DOMContentLoaded', () => {

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.style.display === 'block';

            document.querySelectorAll('.faq-answer').forEach(a => {
                a.style.display = 'none';
            });

            if (!isOpen) {
                answer.style.display = 'block';
            }
        });

    });

    
