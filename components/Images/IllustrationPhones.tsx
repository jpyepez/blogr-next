import Image from 'next/image'
import illustrationPhones from '../../assets/illustration-phones.svg'

const IllustrationPhones = () => {
    return (
        <Image
            src={illustrationPhones}
            alt="Illustration: Blogr mobile phones"
        />
    )
}

export default IllustrationPhones
