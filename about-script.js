document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
    });

    const timelineData = [
        { year: 2005, event: "Ph.D. in Clinical Psychology", description: "Graduated from Stanford University with a doctorate in Clinical Psychology", icon: "fa-graduation-cap" },
        { year: 2006, event: "Private Practice", description: "Started private practice in San Francisco, focusing on individual therapy", icon: "fa-briefcase" },
        { year: 2010, event: "Research Publication", description: "Published groundbreaking research on anxiety disorders in the Journal of Clinical Psychology", icon: "fa-book" },
        { year: 2015, event: "CBT Certification", description: "Became certified in Cognitive Behavioral Therapy, expanding treatment options for clients", icon: "fa-certificate" },
        { year: 2018, event: "Expansion", description: "Opened a second office location to serve a broader community", icon: "fa-building" },
        { year: 2022, event: "Online Services", description: "Launched online therapy services, making mental health support more accessible", icon: "fa-laptop" }
    ];

    const timelineContainer = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');
        timelineItem.setAttribute('data-aos', index % 2 === 0 ? 'fade-right' : 'fade-left');

        const content = document.createElement('div');
        content.classList.add('timeline-content');

        const icon = document.createElement('i');
        icon.classList.add('fas', item.icon, 'timeline-icon');

        const year = document.createElement('div');
        year.classList.add('timeline-year');
        year.textContent = item.year;

        const textContainer = document.createElement('div');
        textContainer.classList.add('timeline-text');

        const title = document.createElement('h3');
        title.textContent = item.event;

        const description = document.createElement('p');
        description.textContent = item.description;

        textContainer.appendChild(title);
        textContainer.appendChild(description);
        content.appendChild(icon);
        content.appendChild(year);
        content.appendChild(textContainer);
        timelineItem.appendChild(content);
        timelineContainer.appendChild(timelineItem);
    });
});