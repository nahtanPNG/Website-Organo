import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logos">
        <a href="#">
          <img src="/images/fb.png" />
        </a>
        <a href="#">
          <img src="/images/tw.png" />
        </a>
        <a href="#">
          <img src="/images/ig.png" />
        </a>
      </div>
      <img src="/images/logo.png" className="logo"/>
      <div>
        <p>Desenvolvido por Alura e NahtanPNG.</p>
      </div>
    </footer>
  );
}
