import { BrowserRouter as Router } from 'react-router-dom';

import RoutesApp from './routes/index';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <RoutesApp />
    </Router>
  );
}

export default App;
