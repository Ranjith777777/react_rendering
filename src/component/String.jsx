import logo from "../assets/images/download.jpg";

const String = () => {
  const title = "Powerful people make places powerful – Rocky in KGF (2010)";
  const para = "KGF tells the rise of Rocky, a boy born into poverty who dreams of becoming the most powerful man in the world...";
  const temple = "KGF is a Kannada action movie series directed by Prashanth Neel and starring Yash.";

  return (
    <>
      <header>
        <h1 className="title">{title}</h1>
      </header>
      <section>
        <img src={logo} alt="KGF" className="imgkgf" />
        <p className="para">{para}</p>
        <p className="temple">{temple}</p>
      </section>
      <hr />
    </>
  );
};

export default String;
