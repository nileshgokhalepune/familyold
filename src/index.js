import ReactDOM from 'react-dom';
import './index.css';
import routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
