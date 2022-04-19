import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Container from './components/Container/Container';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import { Routes, Route } from 'react-router-dom';
import PageTitle from './components/PageTitle/PageTitle';


const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={
            <PageTitle title="404 Not Found" />
            }
          />
        </Routes>
      </Container>
    </main>
  );
};

export default App;