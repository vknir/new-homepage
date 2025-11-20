import Web3Mobile from '../assets/images/image-web-3-mobile.jpg'
import Web3Desktop from '../assets/images/image-web-3-desktop.jpg'

type HeroProps = {
    screenWidth: number
}



function Hero(props: HeroProps) {
    return <div className='my-7 flex flex-col gap-6 items-start'>
        <img src={props.screenWidth >= 768 ? Web3Desktop : Web3Mobile} alt="web-3-article-photo" />
        <h1 className='text-very-dark-blue font-extrabold text-5xl'>The Bright Future of Web 3.0?</h1>
        <p className='text-dark-grayish-blue text-left text-lg/7'>We dive into next evolution of web that claims to put the power of platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        <button className='bg-soft-red text-very-dark-blue font-extrabold py-4 px-8 text-[15px]'>R E A D &nbsp;&nbsp; M O R E</button>
    </div>
}

export default Hero;