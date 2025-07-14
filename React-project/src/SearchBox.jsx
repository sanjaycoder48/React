import userIcon from './assets/user.png';
import robotIcon from './assets/robot.png';
import './SearchBox.css';

function SearchBox() {
    return (
        <div className="search-box">
            <input type="text" placeholder="Type a message" />
            <button>Send</button>
        </div>
    );
}

function Message(props) {
    const { message, sender } = props;

    if (sender === 'user') {
        return (
            <div className="message-container user-message">
                <div className="message-content">
                    <p>{message}</p>
                </div>
                <img src={userIcon} alt="user" width="30px" height="30px" />
            </div>
        );
    } else {
        return (
            <div className="message-container bot-message">
                <img src={robotIcon} alt="robot" width="30px" height="30px" />
                <div className="message-content">
                    <p>{message}</p>
                </div>
            </div>
        );
    }
}

export default SearchBox;
export { Message };
