import Details from "./components/Details";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles.styled";
import { Layout } from "./components/styles/Layout.styled";
import Books from "./components/Books";

function App() {
  return (
    <> 
      <GlobalStyles/>
      <Layout>
        <Header/>
        <Details/>
        <Container>
            <Books/>
        </Container>
      </Layout>
    </>
  );
}

export default App;
