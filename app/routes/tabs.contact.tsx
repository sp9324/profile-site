const ContactMePage: React.FC = () => {
    return (
        <div className="text-center p-4">
            <h1 className="text-4xl text-pink-500 font-serif font-semibold">Contact Me</h1>
            <div className="mt-4 text-lg">
                <p>
                    Email:{" "}
                    <span style={{ color: "blue", textDecoration: "underline" }}>
                        pahujashreya5@gmail.com
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
