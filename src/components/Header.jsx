import React from 'react'
import AddTaskForm from './AddTaskForm'
import { useState } from 'react'

const Header = ({tasks, setTasks}) => {
    
    //! show add task bar gösterme/gizleme için state;
    const[show, setShow] = useState(false)
    
    //! button style için state;
    const[btnStyle, setBtnStyle] = useState({
        name: 'SHOW ADD TASK BAR',
        bgColor: 'purple',
    })

    //! show/hide add task bar ve btn style değiştirme fonksiyonu;
    const handleShow = () => {

        if (show) { //! onClick ile, eğer show true ise, butonun yazısı ve rengi değişecek;
            setBtnStyle({
              name: 'SHOW ADD TASK BAR',
              bgColor: 'purple',
        });
        } else { //! onClick ile, eğer show true değil ise;
            setBtnStyle({
                name: 'CLOSE ADD TASK BAR',
                bgColor: 'red',
            });
        }
        //! onClick ile show state'ini tersine çeviriyoruz;
        setShow(!show)
        // console.log(showAddTaskBar); // React state'leri anında güncellemiyor.asyncron bir şekilde güncelliyor..
    }
    // console.log(showAddTaskBar);

  return (
    <header className='header'>
        <h1>TASK TRACKER</h1>
        <button 
            className='btn'
            //!  butona tıklayınca show/hide fonksiyonu çalışacak;
            onClick={handleShow}
            //! butonun arka plan rengi state'den gelecek;
            style={{backgroundColor : btnStyle.bgColor}}>
            
                {/* { showAddTaskBar ? 'SHOW' : 'ADD TASK BAR' }  */}
                { btnStyle.name } 
        </button>
        
        {/** show true ise AddTaskForm componentini göster */}
        {show && <AddTaskForm tasks={tasks} setTasks={setTasks}/>}

    </header>
  )
}

export default Header