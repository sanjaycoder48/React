import SearchBox from './SearchBox.jsx'
import {Message} from './SearchBox.jsx'


function ChatBot(){
    return(
        <>
            <SearchBox />
            <Message message = 'hello chatbot' sender = 'user' />
            <Message message = 'hello!, how can i help you?' sender = 'chatbot' />
            <Message message = 'flip a coin' sender = 'user' />
            <Message message = 'the result is heads' sender = 'chatbot' />
            <Message message = 'what is the date today' sender = 'user' />
            <Message message = 'the date is 14/07/2025' sender = 'chatbot' />

        </>
    );
}

export default ChatBot;