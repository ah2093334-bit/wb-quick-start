document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const startAgainBtn = document.getElementById('startAgainBtn');
    const featuresSection = document.getElementById('features');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');

    // Smooth scrolling to sections
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Event listener for the main "Scan & Plan Your Day" button
    startBtn.addEventListener('click', () => {
        scrollToSection('features');
        // In a real app, this might trigger a modal or a more complex interaction
        // For this simple version, we'll just scroll to features.
        console.log("Scan & Plan initiated!");
    });

    // Event listener for the "Start Now" button in the contact section
    startAgainBtn.addEventListener('click', () => {
        scrollToSection('features');
        console.log("Starting Quick Start again!");
    });

    // --- Placeholder for future offline functionality ---
    // This section demonstrates how you might handle "scanning" and "ideation"
    // without external data or servers.

    const simulateScan = () => {
        console.log("Simulating environment scan...");
        // In a real offline app, this could involve:
        // - Accessing browser APIs for device orientation, battery status (if permitted)
        // - Using pre-defined states or user input
        // For now, we'll just return a generic status.
        return {
            status: "Environment scanned",
            details: "Sufficient light, moderate temperature."
        };
    };

    const generateIdeas = (scanResult) => {
        console.log("Generating ideas based on scan:", scanResult);
        // This would be the core logic for "one-click functional ideas".
        // It would use pre-defined templates or simple algorithms.
        const ideas = [
            "Review your top 3 priorities for the day.",
            "Dedicate 30 minutes to focused work on a key project.",
            "Take a short walk or do a quick stretch.",
            "Plan your meals for the day.",
            "Read a chapter of a book.",
            "Learn something new for 15 minutes.",
            "Organize your workspace.",
            "Connect with someone important.",
            "Practice mindfulness or meditation for 5 minutes."
        ];

        // Select a few random ideas
        const shuffledIdeas = ideas.sort(() => 0.5 - Math.random());
        return shuffledIdeas.slice(0, 3); // Return up to 3 ideas
    };

    const createDailyPlan = (ideas) => {
        console.log("Creating daily plan with ideas:", ideas);
        // This would allow the user to select/arrange ideas into a routine.
        // For this example, we'll just log the generated ideas as a "plan".
        console.log("Your suggested daily plan:");
        ideas.forEach((idea, index) => {
            console.log(`${index + 1}. ${idea}`);
        });
        return ideas; // Return the plan
    };

    // Example of how these functions could be triggered (e.g., by a button in a modal)
    // This is not directly tied to the current UI but shows the potential.
    // You would typically integrate this into a more interactive UI element.
    // For instance, after clicking "Scan & Plan Your Day", a modal could appear
    // with buttons to trigger these steps.

    // Example usage (commented out as it's not directly triggered by current buttons):
    /*
    const performDailyRoutineSetup = () => {
        const scanResult = simulateScan();
        const generatedIdeas = generateIdeas(scanResult);
        const dailyPlan = createDailyPlan(generatedIdeas);
        // Now, you would display these ideas/plan to the user in a UI.
        alert(`Here are some ideas for your day:\n\n${dailyPlan.join('\n')}\n\nStart planning!`);
    };
    // performDailyRoutineSetup(); // Call this when you want to simulate the process
    */

    // --- Animations and Transitions ---

    // Add a class to elements when they become visible in the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optionally unobserve after it's visible to improve performance
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements that should animate in
    document.querySelectorAll('.hero-section, .features-section h2, .features-grid, .about-section h2, .about-content, .contact-section h2, .contact-text, footer').forEach(element => {
        observer.observe(element);
    });

    // Animate individual feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        // Stagger the animation for feature items
        item.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(item);
    });

    // Initial animation for hero section elements
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');

    if (heroTitle) {
        heroTitle.classList.add('animate-in');
    }
    if (heroSubtitle) {
        heroSubtitle.style.transitionDelay = '0.2s';
        heroSubtitle.classList.add('animate-in');
    }
    if (ctaButton) {
        ctaButton.style.transitionDelay = '0.4s';
        ctaButton.classList.add('animate-in');
    }
});