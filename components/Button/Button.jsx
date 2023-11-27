import { pink, blue, black } from "./Button.module.css";

//export default function Button({children, onClick})
export default function Button(props) {
  return (
    <button className={black} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
