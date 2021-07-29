import JumbotronImage from "../assets/img-banner1.jpg";
import Typing from "react-typing-animation";
import Typical from "react-typical";

const Jumbotron = () => {
  return (
    <div class="jumbotron">
      <img src={JumbotronImage} alt="Jumbotron Image" />

      <Typing speed={100} className="jum-intro-container">
        <span className="intro-iam">Hello ✋🏼, I'm </span>
        <Typing.Speed ms={200} />
        <span className="intro-myName">Lutfi</span>
      </Typing>

      <p className="jum-myLove">
        I love{" "}
        <Typical
          loop={Infinity}
          className="myLove-list"
          wrapper="b"
          steps={[
            "programming 💻",
            1000,
            "design 🎨",
            1000,
            "studying 📙",
            1000,
            "searching 🔍",
            1000,
          ]}
        />
      </p>
    </div>
  );
};

export default Jumbotron;
