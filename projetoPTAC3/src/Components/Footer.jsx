export default function Footer({ footer }) {
    return (
        <header>
            <h1>{footer}</h1>
            <a href="https://github.com/olavo-goes" style={{
                textDecoration: "none",
                marginTop: "10px",
                 color: "white",
                 fontWeight: "bold",
                 marginLeft: "55%",
            }}>
            OlavoGitHub</a>
        </header>
    );
}
