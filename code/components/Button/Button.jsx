import { pink, blue  } from "./Button.module.css";

//export default function Button({children, onClick})
export default function Button(props) {
  return (
    <button className={pink} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
