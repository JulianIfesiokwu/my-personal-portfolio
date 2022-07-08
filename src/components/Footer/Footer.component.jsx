import "./Footer.styles.scss";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year}</p>
    </footer>
  );
};

export default Footer;
