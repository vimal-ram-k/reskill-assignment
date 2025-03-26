import { useEffect } from 'react'
import offerbanner from '../assets/5700556_21235.jpg'

export const OfferBanner = () =>{

    useEffect(() => {
        const reduceBannerSize = () => {
            const bannerImage = document.getElementById("banner-img");
            if (bannerImage) {
                const scrollPosition = window.scrollY;
                const scaleValue = Math.max(0.5, 1 - scrollPosition / 1000); 
                bannerImage.style.transform = `scale(${scaleValue})`;
            }
        };

        window.addEventListener('scroll', reduceBannerSize);

        return () => {
            window.removeEventListener('scroll', reduceBannerSize);
        };
    }, []);

    return(
        <div className='banner'>

            <img src={offerbanner} className='offer-banner' id="banner-img" alt="" />
        </div>
    )
}