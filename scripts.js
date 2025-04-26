// Footer button component
class FooterBtn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const shadow = this.shadowRoot;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <div class="page-footer">
                <div class="footer-content">
                    <div class="footer-text">Made with</div>
                    <div class="footer-logo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#1A1A19"/>
                            <path d="M7.41357 6.23926H9.42688V17.7606H7.41357V6.23926Z" fill="white"/>
                            <path d="M10.4351 6.23926H12.4484V17.7606H10.4351V6.23926Z" fill="white"/>
                            <path d="M13.4566 6.23926H15.4699V17.7606H13.4566V6.23926Z" fill="white"/>
                            <path d="M16.4781 6.23926H18.4914V17.7606H16.4781V6.23926Z" fill="white"/>
                        </svg>
                    </div>
                    <div class="footer-text">Manus</div>
                    <div class="tooltip-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 10.6667V8" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 5.33337H8.00667" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="tooltip-dialog">
                        <div class="tooltip-content">
                            <div class="tooltip-title">Create your own website</div>
                            <div class="tooltip-description">This website was created with Manus, an AI assistant that helps you create websites, write content, and more.</div>
                        </div>
                    </div>
                    <div class="footer-close-btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L4 12" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 4L12 12" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="page-footer-mobile">
                <div class="footer-button">
                    <div class="footer-button-content">
                        <div class="footer-logo">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#1A1A19"/>
                                <path d="M7.41357 6.23926H9.42688V17.7606H7.41357V6.23926Z" fill="white"/>
                                <path d="M10.4351 6.23926H12.4484V17.7606H10.4351V6.23926Z" fill="white"/>
                                <path d="M13.4566 6.23926H15.4699V17.7606H13.4566V6.23926Z" fill="white"/>
                                <path d="M16.4781 6.23926H18.4914V17.7606H16.4781V6.23926Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="footer-text">Made with Manus</div>
                    </div>
                </div>
                <div class="footer-dialog">
                    <div class="dialog-content">
                        <div class="dialog-header">
                            <div class="dialog-header-title">Create your own website</div>
                            <div class="dialog-header-icon">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12" stroke="#1A1A19" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4 4L12 12" stroke="#1A1A19" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div class="dialog-body">
                            This website was created with Manus, an AI assistant that helps you create websites, write content, and more.
                        </div>
                        <div class="dialog-footer">
                            <div class="dialog-footer-button-left">Cancel</div>
                            <div class="dialog-footer-button-right">Create my website</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            .page-footer {
                display: flex;
                height: 40px;
                padding: 0px 16px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                position: fixed;
                right: 16px;
                bottom: 16px;
                border-radius: 8px;
                background: #1a1a19;
                box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
                z-index: 1000;
            }

            .page-footer-mobile {
                display: none;
            }

            .footer-content {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 4px;
            }

            .footer-text {
                color: #fff;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
            }

            .footer-logo {
                display: flex;
                width: 24px;
                height: 24px;
                justify-content: center;
                align-items: center;
            }

            .tooltip-icon {
                display: flex;
                width: 16px;
                height: 16px;
                justify-content: center;
                align-items: center;
                margin-left: 4px;
                cursor: pointer;
            }

            .tooltip-dialog {
                display: none;
                position: absolute;
                width: 240px;
                padding: 12px;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
                border-radius: 8px;
                background: #fff;
                box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
                bottom: 48px;
                right: 0;
            }

            .tooltip-content {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 4px;
                align-self: stretch;
            }

            .tooltip-title {
                align-self: stretch;
                color: #1a1a19;
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: 20px;
            }

            .tooltip-description {
                align-self: stretch;
                color: #535350;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
            }

            .footer-close-btn {
                display: flex;
                width: 16px;
                height: 16px;
                justify-content: center;
                align-items: center;
                margin-left: 8px;
                cursor: pointer;
            }

            .footer-button {
                display: flex;
                height: 40px;
                padding: 0px 16px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                position: fixed;
                right: 16px;
                bottom: 16px;
                border-radius: 8px;
                background: #1a1a19;
                box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
                z-index: 1000;
            }

            .footer-button-content {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 4px;
            }

            .footer-dialog {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                justify-content: center;
                align-items: center;
                z-index: 1001;
            }

            .dialog-content {
                display: flex;
                width: 327px;
                padding: 0px 0px 16px 0px;
                flex-direction: column;
                align-items: flex-start;
                gap: 16px;
                border-radius: 12px;
                background: #fff;
                box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
            }

            .dialog-header {
                display: flex;
                padding: 16px;
                align-items: flex-start;
                gap: 10px;
                align-self: stretch;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }

            .dialog-header-title {
                flex: 1 0 0;
                color: #1a1a19;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 24px;
            }

            .dialog-header-icon {
                display: flex;
                width: 24px;
                height: 24px;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            .dialog-body {
                display: flex;
                padding: 0px 16px;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
                align-self: stretch;
                color: #535350;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
            }

            .dialog-footer {
                display: flex;
                padding: 16px;
                align-items: flex-start;
                gap: 12px;
                align-self: stretch;
            }

            .dialog-footer-button-left {
                display: flex;
                width: 119px;
                min-width: 114px;
                min-height: 48px;
                padding: 12px 24px;
                justify-content: center;
                align-items: center;
                gap: 6px;
                border-radius: 12px;
                background: rgba(55, 53, 47, 0.06);
                color: #34322d;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
            }

            .dialog-footer-button-right {
                display: flex;
                min-width: 114px;
                min-height: 48px;
                padding: 12px 24px;
                justify-content: center;
                align-items: center;
                gap: 6px;
                flex: 1 0 0;
                border-radius: 12px;
                background: #1a1a19;
                color: #fff;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
            }

            @media (max-width: 600px) {
                .page-footer {
                    display: none;
                }
                .page-footer-mobile {
                    display: block;
                }
                .footer-button {
                    position: fixed
                }
            }
        `;
        // Add styles and content to Shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(wrapper);

        // Set up event listeners in connectedCallback
        this.setupEventListeners(shadow);
    }
    
    onclickEvent(shadow, domStr, fn) {
        const clickDom = shadow.querySelector(domStr);
        if (clickDom) {
            clickDom.onclick = (event) => {
                fn(event, clickDom);
            };
        }
    }
    
    setupEventListeners(shadow) {
        const changeDialogStyle = (displayStatus) => {
            const dialog = shadow.querySelector('.footer-dialog');
            if (dialog) {
                dialog.style.display = displayStatus;
            }
        };

        const createSite = () => {
            window.open('https://manus.im/invitation?from=space', '_blank');
            changeDialogStyle('none');
        };

        this.onclickEvent(shadow, '.page-footer-mobile .dialog-footer-button-left', () => {
            changeDialogStyle('none');
        });

        this.onclickEvent(shadow, '.page-footer-mobile .dialog-footer-button-right', () => {
            createSite();
        });

        this.onclickEvent(shadow, '.page-footer-mobile .dialog-header-icon', () => {
            changeDialogStyle('none');
        });

        this.onclickEvent(shadow, '.page-footer-mobile .footer-button', () => {
            changeDialogStyle('flex');
        });

        this.onclickEvent(shadow, '.footer-close-btn', () => {
            localStorage.setItem('embedClosed', 'true');
            shadow.querySelector('.page-footer').style.display = 'none';
            shadow.querySelector('.page-footer-mobile').style.display = 'none';
        });

        this.onclickEvent(shadow, '.page-footer-mobile .footer-dialog', (event, dialog) => {
            if (event.target === dialog) {
                changeDialogStyle('none');
            }
        });

        const tooltipIcon = shadow.querySelector('.tooltip-icon');
        const tooltipDialog = shadow.querySelector('.tooltip-dialog');

        tooltipIcon.addEventListener('mouseenter', function () {
            tooltipDialog.style.display = 'block';
        });

        tooltipIcon.addEventListener('mouseleave', function () {
            tooltipDialog.style.display = 'none';
        });

        if (localStorage.getItem('embedClosed')) {
            shadow.querySelector('.page-footer').style.display = 'none';
            shadow.querySelector('.page-footer-mobile').style.display = 'none';
        }
    }
}

// Register custom element
customElements.define('footer-btn', FooterBtn);

// Plausible analytics
window.plausible = window.plausible || function() {
    (window.plausible.q = window.plausible.q || []).push(arguments);
};
plausible('custom-pageview', {
    props: {
        domain: window.location.host
    }
});
