import './Apptest.css';
import Headerp1 from './componentstest/Headerp1';
import Aboutp1 from './componentstest/Aboutp1';
import Detail from './componentstest/Detail';
import Featurep1 from './componentstest/Featurep1';
import User from './componentstest/User';
function Dashboard() {
  return (
    <div className="Dashboard">

   <Headerp1 />
   <Aboutp1 />
   <Detail />
   <Featurep1 />
   <User />

    </div>
  );
}
export default Dashboard;
