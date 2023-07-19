 import { ThemeProvider } from "styled-components";
 import Header from "./components/Header";
 import GlobalStyles from "./components/styles/Global.styled";
import { Container} from "./components/styles/Container.styled";
import Card from "./components/Card"
import content from "./content"
import Footer from "./components/Footer";


 function App() {
   const theme = {
     colors: {
    header:"#ebfbff",
    body:"#fff",
    footer:"#003333"
    },
   };
   return (

     <ThemeProvider theme={theme}>
       <GlobalStyles />
       <Header />
       <Container>

       {content.map((item,index)=>(<Card key={index} item={item}/>))}
       </Container>
       <Footer/>
     </ThemeProvider>
   );
 }
 export default App;