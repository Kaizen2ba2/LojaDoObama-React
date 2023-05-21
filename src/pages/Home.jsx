import Header from '../contents/Header'
import Nav from '../contents/Nav'
import Footer from '../contents/Footer'
import PrincipalHome from '../contents/PrincipalHome'
import News from '../contents/News'

function Home(){
    return(
        <>
        <Header />
        <Nav />
        <PrincipalHome/>
        <News/>
        <Footer/>
        </>
    )
}
export default Home;