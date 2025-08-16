// Template configuration
const templates = {
    generic: {
        name: 'Generic AI Assistant',
        description: 'All-purpose AI assistant for general inquiries',
        color: '#9333ea',
        features: ['24/7 Support', 'Multi-language', 'Custom training']
    },
    hvac: {
        name: 'HVAC Expert',
        description: 'Heating & cooling specialist for HVAC businesses',
        color: '#dc2626',
        features: ['Service scheduling', 'Quote generation', 'Maintenance tips']
    },
    'lawn-care': {
        name: 'Lawn Care Pro',
        description: 'Landscaping and lawn care specialist',
        color: '#16a34a',
        features: ['Seasonal advice', 'Service recommendations', 'Plant identification']
    },
    'pool-services': {
        name: 'Pool Services',
        description: 'Pool maintenance and service expert',
        color: '#0ea5e9',
        features: ['Chemical balance', 'Maintenance schedules', 'Equipment advice']
    },
    'gutter-guards': {
        name: 'Gutter Guards',
        description: 'Home protection and gutter services',
        color: '#4b5563',
        features: ['Installation quotes', 'Maintenance tips', 'Product recommendations']
    }
};
// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to template cards
    const templateCards = document.querySelectorAll('.template-card');
    
    templateCards.forEach(card => {
        card.addEventListener('click', function() {
            const templateType = this.classList[1]; // Get the template type class
            handleTemplateClick(templateType);
        });
    });
    
    // Add click handler for Open All Templates button
    const openAllBtn = document.querySelector('.btn-primary');
    openAllBtn.addEventListener('click', function() {
        showAllTemplates();
    });
    
    // Add click handler for Test Preview System button
    const testPreviewBtn = document.querySelector('.btn-secondary');
    testPreviewBtn.addEventListener('click', function() {
        testPreviewSystem();
    });
});

// Handle template card click
function handleTemplateClick(templateType) {
    const template = templates[templateType];
    if (template) {
        showTemplatePreview(template);
    }
}
// Show preview of selected template
function showTemplatePreview(template) {
    const businessName = prompt(`Enter business name for ${template.name}:`, 'Your Business Name');
    
    if (businessName) {
        // Create preview window content
        const previewContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${template.name} - ${businessName}</title>
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        margin: 0;
                        padding: 20px;
                        background: linear-gradient(135deg, ${template.color}22, ${template.color}11);
                    }
                    .chat-widget {
                        max-width: 400px;
                        margin: 50px auto;
                        background: white;
                        border-radius: 12px;
                        box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                        overflow: hidden;
                    }
                    .chat-header {
                        background: ${template.color};
                        color: white;
                        padding: 20px;
                    }
                    .chat-body {
                        padding: 20px;
                    }
                </style>
            </head>            <body>
                <div class="chat-widget">
                    <div class="chat-header">
                        <h2>${businessName}</h2>
                        <p>${template.description}</p>
                    </div>
                    <div class="chat-body">
                        <h3>Features:</h3>
                        <ul>
                            ${template.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                        <p style="margin-top: 20px; padding: 15px; background: #f3f4f6; border-radius: 8px;">
                            Welcome! How can I help you today?
                        </p>
                    </div>
                </div>
            </body>
            </html>
        `;
        
        // Open preview in new window
        const previewWindow = window.open('', '_blank', 'width=500,height=600');
        previewWindow.document.write(previewContent);
        previewWindow.document.close();
    }
}

// Show all templates
function showAllTemplates() {
    alert('Opening all templates gallery...\n\nThis would display an expanded view with all available templates and customization options.');
}
// Test preview system
function testPreviewSystem() {
    console.log('Testing preview system...');
    
    // Create test window
    const testContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Preview System Test</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    padding: 40px;
                    background: #f9fafb;
                    text-align: center;
                }
                .status {
                    background: #10b981;
                    color: white;
                    padding: 20px;
                    border-radius: 8px;
                    font-size: 20px;
                }
            </style>
        </head>
        <body>
            <div class="status">
                ✅ Preview System Working!
                <p style="font-size: 14px; margin-top: 10px;">
                    The preview system is functioning correctly.
                </p>
            </div>
        </body>
        </html>
    `;
    
    const testWindow = window.open('', '_blank', 'width=400,height=300');
    testWindow.document.write(testContent);
    testWindow.document.close();
}