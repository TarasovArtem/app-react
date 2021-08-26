import './main.css';
import data from '../data/data.json';
 
function Main () {
    return (
        <div className="main">
            {data.map(item => 
            <section>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </section>
            )}
        </div>
    );
}
export default Main;