const ContactMePage: React.FC = () => {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Contact Me</h1>
            <div>
                <p>
                    Email:{" "}
                    <span style={{ color: "blue", textDecoration: "underline" }}>
                        Email Me: pahujashreya5@gmail.com
                    </span>
                </p>
                <p>
                    LinkedIn:{" "}
                    <a href="https://www.linkedin.com/in/sp49/" target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
                        My LinkedIn
                    </a>
                </p>
                <p>
                    GitHub:{" "}
                    <a href="https://github.com/sp9324" target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
                        My GitHub
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ContactMePage;
