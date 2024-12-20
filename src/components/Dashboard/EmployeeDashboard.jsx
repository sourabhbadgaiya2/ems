import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

// eslint-disable-next-line react/prop-types
 //data={data}
const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>

      <Header data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
     
    </div>
  )
}

export default EmployeeDashboard