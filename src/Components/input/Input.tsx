import { ChangeEvent } from "react";
import plus from "../../assets/plus.svg";
import styles from "./Input.module.css";

interface PropsTextInput {
  onHandleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
  textInput: string;
  addItemList: () => void;
}

export function HandleTextInput({
  onHandleTextInput,
  textInput,
  addItemList,
}: PropsTextInput) {
  return (
    <div className={styles.container}>
      <input
        onChange={onHandleTextInput}
        value={textInput}
        type="text"
        placeholder="Adicione uma nova tarefa"
      ></input>
      <button onClick={addItemList}>
        Criar <img src={plus} />{" "}
      </button>
    </div>
  );
}
