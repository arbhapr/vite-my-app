const Footer = () => {
    const year = new Date().getFullYear();
    const time = new Date().toLocaleTimeString("en-US", { hour12: false });
    const isOpen = time > "08:00" && time < "22:00";
    return (
        <footer className="footer">
            <p>
                Warung Pak ABC,{" "}
                {isOpen ? "silahkan memesan" : "buka jam 08.00 - 22.00"} |
                All Rights Reserved &copy; {year} 
            </p>
        </footer>
    );
};

export default Footer;
