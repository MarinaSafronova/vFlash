import { useState } from "react";
import { useScrollBlock } from "../../hooks/lock-scroll";
import { Modal } from "../Modal";

export interface IWaitListProps {
  isOpen: boolean;
  toggle: (e: React.SyntheticEvent) => void;
}
const WaitLIst = (props: IWaitListProps) => {
  const { isOpen, toggle } = props;
  const [isEmail, setEmail] = useState<string>("");
  const [blockScroll, allowScroll] = useScrollBlock();

  if (isOpen) {
    blockScroll();
  } else {
    allowScroll();
  }

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      if (isEmail) {
        toggle(e);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <form onSubmit={onSubmit}>
          <p>
            Enter your email to join the waitlist and be notified when it’s time
            to start your learning journey!
          </p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="primary">
            Get Notified!
          </button>
        </form>
      </Modal>
    </>
  );
};

export default WaitLIst;
