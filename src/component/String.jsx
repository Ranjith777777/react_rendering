import logo from "../assets/images/download.jpg";

const String = () => {
  const title = "Powerful people make places powerful – Rocky in KGF reliase 2010";
  const para = "KGF tells the rise of Rocky, a boy born into poverty who dreams of becoming the most powerful man in the world. After losing his mother, her final wish pushes him to chase power at any cost. Rocky grows into a fearless gangster in Mumbai and is sent on a dangerous mission to assassinate Garuda, the brutal ruler of the Kolar Gold Fields. When Rocky enters KGF, he witnesses thousands of people suffering under slavery. Moved by their pain, he slowly becomes their hope. In a dramatic and powerful climax, Rocky kills Garuda and frees the workers, rising as the new king of KGF. The movie ends with Rocky becoming a symbol of strength, setting the stage for an even bigger battle ahead."
  const temple=`KGF is a Kannada action movie series directed by Prashanth Neel and starring Yash as the hero (Rocky Bhai)`

  return (
    <>
      <header>
        <nav>
          <div>
            <h1 className="title">{title}</h1>
          </div>
        </nav>
      </header>

      <section>
        <div>
          <img src={logo} alt="KGF" className="imgkgf" />
        </div>
        <p  className="para">{para},{title}</p>
        <p className="temple">${temple}</p>
      </section>
      
    </>
  );
};

export default String;
