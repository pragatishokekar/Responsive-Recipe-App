import CustomImage from "./CoustomImage"
export default function HeroSection(){
    const images=[
        "/img/gallary/img_1.jpg",
        "/img/gallary/img_2.jpg",
        "/img/gallary/img_3.jpg",
        "/img/gallary/img_4.jpg",
        "/img/gallary/img_5.jpg",
        "/img/gallary/img_6.jpg",
        "/img/gallary/img_7.jpg",
        "/img/gallary/img_8.jpg",
        "/img/gallary/img_9.jpg",
    ]
    return (
        <>
            <div className="section hero">
                <div className="col typography">
                    <h1 className="title">What Are we About</h1>
                    
                    <p className="info">Foodies is a place where you can please your soul and tummy with delicious food recipe of all cuisine.And our service is absolutely free.So start expolring now</p>
                    
                    <button className="btn">Explore Now</button>
                </div>
                <div className="col gallery">
                {
                    images.map((src,index)=>(
                    <CustomImage key={index} imgSrc={src} pt={"90%"}/>
                    ))
                }
                </div>
            </div>
        </>
    )
}