import Role1 from '../assets/role1.PNG';
import Role2 from '../assets/role2.PNG';
import Role3 from '../assets/role3.PNG';
import Role4 from '../assets/role4.PNG';
import Role5 from '../assets/role5.PNG';
export default function Stepfeature(){
    return <section><nav></nav>
        <div className='px-10 '>
            <table><tr><td className='f1'>
        <img src={Role1} alt='role1'/></td><td className='f2'><img src={Role2} alt='role2'/></td><td className='f3'><img src={Role3} alt='role3'/></td>
        <td className='f4'><img src={Role4} alt='role4'/></td><td className='f5'><img src={Role5} alt='role5'/></td>
        </tr>
        </table>
        </div>
    </section>
}