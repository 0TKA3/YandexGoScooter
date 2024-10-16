import Exclusive from './Exclusive'
import Bonuses from './Bonuses';



const Content = () => {
    return (
        <>
            <div className="content-container">
                <h1 className="main-header-text">Вот что даёт участие<br />в клубе</h1>
                <Bonuses />
                <Exclusive />
            </div>
        </>
    );
}

export default Content;