import data from '../data/data.json';
import './sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <nav>
            <ul>
                {data.map(item =>
                    <li>
                        <a href={item.href}>{item.title}</a>
                    </li>
                )}
            </ul>         
            </nav>                    
        </div>
    );
}
export default Sidebar;