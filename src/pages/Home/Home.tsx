import Layout from "../../componets/Layout";
import Hero from "../../assets/Home.svg";
import Crafted from "../../assets/AIcrafted.svg";
import Interactive from "../../assets/Interactive.svg";
import Customizable from "../../assets/Customizable.svg";
import styles from "./Home.module.css";
import LinkButton from "../../componets/Button";
import { useAppContext } from "../../hooks/useModal";
import { FC } from "react";

const Home: FC = (): JSX.Element => {
  const { toggle } = useAppContext();

  return (
    <Layout>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.box}>
            <div>
              <h1 className="hero-title">
                Change your study habits with advanced{" "}
                <span>AI-powered flashcards</span>
              </h1>
              <p className="section-text">
                Unlock your potential with AI-driven studying techniques. Embark
                on a smarter learning path—join our waitlist now!
              </p>
              <LinkButton
                href="#"
                className="register"
                label="Free to register"
                onClick={toggle}
              />
            </div>
            <div>
              <img src={Hero} alt="Flash" className={styles.heroIMG} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.learning}>
        <div className="container">
          <div className={styles.content}>
            <h2 className="section-title">
              Revolutionize Your Learning Experience with AI-Powered Flashcards
            </h2>
            <p className="section-text">
              Welcome to vFlash, where the future of education is here. vFlash
              harnesses the power of AI to effortlessly convert your study
              materials into intelligent flashcards and help you study.
              Experience the convenience of AI-driven learning!
            </p>
            <LinkButton href="#" className="primary" label="Start for free" />
          </div>
          <div className={styles.blocks}>
            <div className={styles.flex}>
              <div className={styles.col}>
                <div className={`${styles.item} ${styles.rose}`}>
                  <div className={styles.title}>
                    <h3>Interactive Study Modes</h3>
                  </div>
                  <p>
                    Engage in dynamic study sessions with AI using
                    speech-to-text and voice recognition- your very own study
                    partner!
                  </p>
                </div>
              </div>
              <div className={styles.col}>
                <div className={`${styles.item} ${styles.orange}`}>
                  <div className={styles.title}>
                    <h3>AI-Powered Flashcards</h3>
                  </div>
                  <p>Instantly create flashcards from your study materials.</p>
                </div>
                <div className={`${styles.item} ${styles.green}`}>
                  <div className={styles.title}>
                    <h3>Effortless Learning</h3>
                  </div>
                  <p>
                    Whether you’re exploring new subjects or preparing for
                    exams, vFlash is your ultimate learning companion.
                  </p>
                </div>
              </div>
              <div className={styles.col}>
                <div className={`${styles.item} ${styles.lavender}`}>
                  <div className={styles.title}>
                    <h3>Stay Motivated</h3>
                  </div>
                  <p>
                    Keep your learning journey on track by effortlessly
                    monitoring the number of days you’ve dedicated to studying.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.quality}>
        <div className="container">
          <div className={styles.content}>
            <h2 className="section-title">Elevate your learning with vFlash</h2>
            <p className="section-text">
              Unlock the full potential of your educational journey with vFlash.
              Our innovative solutions seamlessly blend convenience and
              cutting-edge AI technology to deliver a personalized and highly
              effective learning experience. Discover a new era of education
              that adapts to your needs and empowers you to excel.
            </p>
            <LinkButton href="#" className="primary" label="Start for free" />
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <img src={Crafted} alt="Flash" />
            </div>
            <div className={styles.col}>
              <div className={styles.box}>
                <h3 className="middle-title">AI-crafted flashcards</h3>
                <p className="section-text">
                  Easily convert your study material into customized flashcards.
                  Provide a chapter or a block of text, and let vFlash's AI do
                  the rest.
                </p>
                <LinkButton
                  href="#"
                  className="primary"
                  label="Start for free"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.row} ${styles.reverse}`}>
            <div className={styles.col}>
              <div className={styles.box}>
                <h3 className="middle-title">Interactive study mode </h3>
                <p className="section-text">
                  Discover our friendly interactive study mode, where learning
                  feels like a chat with a study buddy. Navigate through
                  flashcards, ask questions, and make studying a breeze.
                </p>
                <LinkButton
                  href="#"
                  className="primary"
                  label="Start for free"
                />
              </div>
            </div>
            <div className={styles.col}>
              <img src={Interactive} alt="Flash" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <img src={Customizable} alt="Flash" />
            </div>
            <div className={styles.col}>
              <div className={styles.box}>
                <h3 className="middle-title">Customizable experience</h3>
                <p className="section-text">
                  Arrange, edit, and manage your flashcards with user-friendly
                  tools, enhancing your learning efficiency.
                </p>
                <LinkButton
                  href="#"
                  className="primary"
                  label="Start for free"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.start}>
        <div className="container">
          <div className={styles.content}>
            <h2 className="section-title">Start for free today!</h2>
            <p className="section-text">
              Join the vFlash waitlist today and be notified when it’s time to
              start your AI-enhanced study experience.
            </p>
            <LinkButton
              href="#"
              className="register"
              label="Register for free"
              onClick={toggle}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
