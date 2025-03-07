const style = document.createElement("style");
style.innerHTML = `
    @media (max-width: 1024px) {
        a.logo-header {
            width: 90px !important;
        }
    }
`;
document.head.appendChild(style);
