import React from 'react'; 
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './redux/store';

/* ReactDOM.createRoot를 사용하여 루트 DOM 노드를 지정하고, 해당 노드에 React 앱을 렌더링 */
ReactDOM.createRoot(document.getElementById('root')).render(
  /* React.StrictMode를 사용하여 개발 모드에서 부가적인 검사 활성화 */
  <React.StrictMode>
    {/* Redux 스토어를 제공하는 Provider로 앱을 감싸기 */}
    <Provider store={store}>
      {/* React Router의 BrowserRouter로 앱을 감싸고, 라우터를 설정하기 */}
      <Router>
        {/* 메인 애플리케이션 컴포넌트 렌더링 */}
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
