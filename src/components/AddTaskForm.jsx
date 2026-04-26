import {useState} from 'react'

const AddTaskForm = ({tasks, setTasks}) => {

    const [task, setTask] = useState('')
    const [day, setDay] = useState('')
    
    // console.log(task)

    const handleSubmit = (e) => {
        e.preventDefault() //! sayfanın yenilenmesini engellemek için...

        // ! eğer task boş ise, uyarı ver ve fonksiyondan çık;
        //! form inputlarına required verirsek buna gerek kalmaz.
        // if (!task) {
        //     alert('Please add a task')
        //     return
        // }

        const newTask = {
            // id: tasks.length + 1,
            id: new Date().getTime(), // ! benzersiz id için...
            task: task,
            day: day,
            isDone: false,
        }

        console.log(newTask)

        // ! yeni task'ı eklemek için, mevcut tasks array'ini kopyalayıp, yeni task'ı sona ekliyoruz;
        setTasks([...tasks, newTask])

        //! formu submit ettikten sonra inputların içini temizlemek için;
        setTask('')
        setDay('')
    }
  
    return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
            <div className="form-control">
                <label 
                    htmlFor="task"
                    >Task
                </label>
                <input 
                    type="text"
                    name='task'
                    id="task" 
                    placeholder="Add Task"
                    required 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label 
                    htmlFor="day"
                    >Day & Time
                </label>
                <input 
                    type="date" 
                    name='day'
                    id="day" 
                    placeholder="Add Day & Time"
                    required
                    value={day}
                    onChange={(e)=> setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <button 
                    className='btn btn-submit'
                    type='submit'
                    >SUBMİT
                </button>
            </div>
        </form>
    </div>
  )
}

export default AddTaskForm