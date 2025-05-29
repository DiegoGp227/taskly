import Style from './style.module.css'
import CreateCard from './createCard'
import Card from './Card'
import Nav from '../Nav'

const Home = () => {
    return (
        <>
            <Nav />
            <main className={Style.main}>
                <CreateCard/>
                <Card/>
            </main>
        </>

    )
}
export default Home