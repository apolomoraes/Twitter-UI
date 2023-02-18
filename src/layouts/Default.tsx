import { Sidebar } from "../components/Sidebar";
import { router } from "../routes";


export function Default() {
  return (
    <div className='layout'>
      <Sidebar />

      <div className='content'>

      </div>
    </div>
  )
}