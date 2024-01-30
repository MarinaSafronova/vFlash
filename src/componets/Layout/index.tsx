import { useAppContext } from "../../hooks/useModal";
import CookieMessage from "../Cookie";
import Footer from "../Footer";
import Header from "../Header";
import WaitLIst from "../WaitList";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  const { isOpen, toggle } = useAppContext();

  return (
    <>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieMessage />
        <WaitLIst isOpen={isOpen} toggle={(e) => toggle(e)} />
      </div>
    </>
  );
};

export default Layout;
