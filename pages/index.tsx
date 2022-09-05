import type { NextPage } from 'next'
import DetailsSection from '../components/DetailsSection/DetailsSection'
import FutureSection from '../components/FutureSection/FutureSection'
import InfrastructureSection from '../components/InfrastructureSection/InfrastructureSection'
import MainHero from '../components/MainHero/MainHero'

const Home: NextPage = () => {
    return (
        <div>
            <MainHero />
            <FutureSection />
            <InfrastructureSection />
            <DetailsSection />
        </div>
    )
}

export default Home
