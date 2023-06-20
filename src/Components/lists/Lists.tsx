import styles from "./Lists.module.css";
import circleFalse from "../../assets/false.svg";
import trash from "../../assets/trash.svg";
import { ChangeEvent, useState } from "react";
import { HandleTextInput } from "../input/Input";
import { ListItem } from "../../App";
import list from "../../assets/list.svg";
import done from "../../assets/true.svg"

interface PropsList {
  itemList: ListItem[];
  onAddItemList: (text: string) => void;
  onDeleteItemList: (item: ListItem) => void;
  onDoneItemList:(item: ListItem) => void;
}

export function Lists({
  itemList,
  onAddItemList,
  onDeleteItemList,
  onDoneItemList
}: PropsList) {
  const [textInput, setTextInput] = useState("");

  function onHandleTextInput(e: ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    setTextInput(text);
    console.log(text);
  }

  function addItemList() {
    if (textInput === "") {
      alert("digite algo");
    } else {
      onAddItemList(textInput);
      setTextInput("");
    }
  }


  function DoneItem(item:ListItem){
    if(item.isDone){
      return <img src={done}/>
    }else{
      return <img src={circleFalse}/>
    }
  }


const taskCount = itemList.filter((item)=> item.isDone).length

  return (
    <div>
      <HandleTextInput
        onHandleTextInput={onHandleTextInput}
        textInput={textInput}
        addItemList={addItemList}
      />
      <article>
        <div className={styles.counts}>
          <strong>
            Tarefas criadas <p>{itemList.length}</p>{" "}
          </strong>
          <strong>
            Concluidas{" "}
            {itemList.length === 0 ? <p>0</p> : <p> {taskCount} de {itemList.length} </p>}
          </strong>
        </div>
        {itemList.length === 0 ? (
        <div className={styles.noList}>
          <div className={styles.emptyLists}>
              <img src={list} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e orgaize seus itens a fazer</p>
            </div>
          </div>
        ) :
          // conteudo das litas

        (
          <div className={styles.wrapper}>
            <ul>
              {itemList.map((list) => {
                return (
                  <li className={list.isDone ? styles.listDone:""} key={list.id}>
                    <button onClick={()=>{onDoneItemList(list)}}>
                     <DoneItem isDone={list.isDone} id={list.id} item={""}/>
                    </button>
                    <span className={styles.isComplete}> {list.item}</span>

                    <div>
                      <button onClick={() => onDeleteItemList(list)}>
                        <img src={trash} />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
}
