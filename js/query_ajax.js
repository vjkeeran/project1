$(document).ready(function() {
    console.log("jquery_ajax.js loaded.");

    const testimonialsButton = $('#loadTestimonialsBtn');

    if (testimonialsButton.length) {
        console.log("Testimonials load button found. Attaching click listener.");

        testimonialsButton.on('click', function() {
            $(this).text('Loading Testimonials...').prop('disabled', true);

            setTimeout(() => {
                const simulatedData = {
                    testimonials: [
                        {
                            quote: "My child absolutely loved the Splashes program! The instructors are patient and made learning to swim incredibly fun.",
                            author: "Sarah L., Proud Parent"
                        },
                        {
                            quote: "We've tried other swim schools, but Splashes truly stands out. Their approach to water safety and skill-building is exceptional.",
                            author: "David P., Happy Customer"
                        },
                        {
                            quote: "The progress my kids made in just a few weeks was astonishing. Splashes has given them confidence they'll carry for life.",
                            author: "Emily R., Grateful Mother"
                        },
                        {
                            quote: "Friendly staff, clean facilities, and effective lessons. Highly recommend Splashes to any parent looking for quality swim instruction.",
                            author: "Michael T., Satisfied Client"
                        }
                    ]
                };

                const testimonialsContainer = $('#testimonialsContainer');
                testimonialsContainer.empty();

                if (simulatedData && simulatedData.testimonials && simulatedData.testimonials.length > 0) {
                    console.log("Simulated testimonials data loaded successfully.");
                    simulatedData.testimonials.forEach(function(testimonial) {
                        testimonialsContainer.append(
                            `<div class="col-md-6 mb-4">
                                <div class="card p-3 shadow-sm rounded-lg">
                                    <p class="mb-2 text-dark font-italic">"${testimonial.quote}"</p>
                                    <footer class="blockquote-footer text-muted">${testimonial.author}</footer>
                                </div>
                            </div>`
                        );
                    });
                    testimonialsButton.text('Testimonials Loaded!').prop('disabled', true);
                } else {
                    console.warn("No simulated testimonials data found.");
                    testimonialsContainer.append('<p class="text-center text-info">No testimonials found at this time. Check back later!</p>');
                    testimonialsButton.text('Load Testimonials').prop('disabled', false);
                }
            }, 1500);
        });
    } else {
        console.log("No #loadTestimonialsBtn found on this page. jQuery AJAX feature not initialized.");
    }
});
