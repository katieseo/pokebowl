import { Dispatch, SetStateAction } from "react";
import styles from "../styles/Product.module.scss";

type BaseProp = {
  base: string;
  bowlBase: string;
  setBowlBase: Dispatch<SetStateAction<string>>;
};

const Base = ({ base, bowlBase, setBowlBase }: BaseProp) => {
  const baseLabel = base.replace("_", " ");

  return (
    <span>
      <input
        type="radio"
        name="base"
        id={base}
        value={base}
        onClick={() => setBowlBase(base)}
        checked={bowlBase === base}
      />
      <label htmlFor={base}>{baseLabel}</label>
    </span>
  );
};

export default Base;
