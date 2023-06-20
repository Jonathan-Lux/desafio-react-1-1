import { Header } from "./Components/header/Header";
import styles from "./App.module.css";
import { Lists } from "./Components/lists/Lists";
import {useState} from "react"
import {v4 as uuid} from "uuid"

export interface ListItem{
  id:string,
  item:string,
  isDone:boolean
}

function App() {
  const [itemList,setItemList] = useState<ListItem[]>([])
 
  function onAddItemList(text:string) {
    const newItem = {id:uuid(), item:text,isDone:false }
    setItemList([...itemList,newItem])
    
  } 

  function onDeleteItemList(item: ListItem) {
    const deleteItem = itemList.filter(it => it.id !== item.id)
    setItemList(deleteItem)
  }

  function onDoneItemList(item:ListItem) {
    const onDoneItem = itemList.map(it=>{
      if(it.id === item.id){
        it.isDone =!it.isDone
      }
      return it
    } )
    setItemList(onDoneItem)
  }


  return (
    <div>
      <Header />
      <div className={styles.container}>
       
        <Lists onAddItemList={onAddItemList} itemList={itemList} onDeleteItemList={onDeleteItemList} onDoneItemList={onDoneItemList}/>
      </div>
    </div>
  );
}

export default App;
