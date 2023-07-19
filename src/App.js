 import { ThemeProvider } from "styled-components";
 import Header from "./components/Header";
 import GlobalStyles from "./components/styles/Global.styled";
import { Container} from "./components/styles/Container.styled";
import Card from "./components/Card"
import content from "./content"


 function App() {
   const theme = {
     colors: {
    header:"#ebfbff",
    body:"#fff"
    },
   };
   return (

     <ThemeProvider theme={theme}>
       <GlobalStyles />
       <Header />
       <Container  />
       {content.map((item,index)=>(<Card key={index} item={item}/>))}
     </ThemeProvider>
   );
 }
 export default App;