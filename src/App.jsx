import { BrowserRouter as Router } from 'react-router-dom';
import HomeBig from './Pages/HomeBig';  // Importing default export correctly

function App() {
    return (
        <Router>
            <HomeBig />
        </Router>
    );
}

export default App;
