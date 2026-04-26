import Header from "../components/Header"
import ShowTasks from "../components/ShowTasks"
import { useState, useEffect } from "react"
import data from "../helper/starterData"

const Home = () => {

    // ! tasks state'ini localStorage'dan başlatmak için;
    // ! eğer localStorage'da 'tasks' yoksa, 'data' (starterData) kullanılacak;
    // ! localStorage'daki değerler string olduğu için JSON.parse ile objeye çeviriyoruz;
    // ! eğer localStorage boş veya geçersiz ise, fallback olarak 'data' kullanılacak;
    const [tasks, setTasks] = useState(() => {
      // Fonksiyon içine alarak sadece İLK render'da çalışmasını sağlıyoruz.
      return JSON.parse(localStorage.getItem('tasks')) || data;
    });

    // console.log(tasks)

    // ! her 'tasks' değiştiğinde, güncel state'i localStorage'a yaz;    
    useEffect(()=>{
       localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

  return (
    <div>
        <Header tasks={tasks} setTasks={setTasks}/>
        <ShowTasks tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default Home