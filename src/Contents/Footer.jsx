import '../Style/Footer.css'
function Footer() {
  return (
    <section className="Ping--Footer--Container">
      <div className="Ping-Footer-Icon">
        <ul>
          <li>
          <i className="fa-brands fa-facebook fa-sm"></i>
          </li>
          <li>
          <i className="fa-brands fa-twitter fa-sm"></i>
          </li>
          <li>
          <i className="fa-brands fa-instagram fa-sm"></i>
          </li>
        </ul>
      </div>
      <div className="Ping-Footer-Content">
        <p>
        © Copyright Ping. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
