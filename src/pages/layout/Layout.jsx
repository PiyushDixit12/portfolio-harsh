import {Container} from 'react-bootstrap'
import {Header} from '../Header/Header'
import {Footer} from '../footer/Footer'
import {Home} from '../home/Home'
import {About} from '../about/About'
import {Skills} from '../skill/Skills'
import {Projects} from '../projects/Projects'
import {Contact} from '../contact/Contact'

export const Layout = () => {
    return (
        <>
            <Header />
            <Container>
                <main className=' w-100 h-100'>
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
            </Container>
            <Footer />
        </>
    )
}
