import { BrowserRouter as Router } from 'react-router-dom';

import RoutesApp from './routes/index';
import GlobalStyles from './styles/GlobalStyles';
import * as S from './styles';

function App() {
  return (
    <Router>
      <S.Container>
        <GlobalStyles />
        <RoutesApp />
      </S.Container>
    </Router>
  );
}

export default App;
