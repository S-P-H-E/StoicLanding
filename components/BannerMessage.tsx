import clsx from 'clsx'
import { Playfair } from 'next/font/google'
import CountdownButton from './CountdownButton'

const font = Playfair({
    subsets: ['latin'],
    weight: ['400'],
})

export default function BannerMessage() {
 return(
    <div className="h-[600px] flex flex-col items-center justify-center relative">
        <div className='flex flex-col justify-center items-center gap-10'>
            <h1 className={clsx("text-[5.5rem] leading-[5rem] text-center w-[1000px]", font.className)}>
                Over <mark className='bg-transparent text-white italic'>5 Billion</mark> People are on social media <mark className='bg-transparent text-white italic'>everyday</mark>
            </h1>
            <p className='text-[--description] tracking-widest text-center'>Don't you want to have a piece of that pie. People are making money everyday <br/> and you don't need 5 billion followers, just a few hundred thousand will do.</p>
            <CountdownButton />
        </div>
        <div className='w-[100vw] h-[100vh] top-0 left-0 absolute -z-10'>
            <div className='w-full h-full bg-gradient-to-t from-[--bg] via-transparent to-[--bg] z-10 absolute'/>
            <img src='banner.png' className='w-full h-full'/>
        </div>
    </div>
 )
}