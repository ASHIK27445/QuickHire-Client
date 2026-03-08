import Marquee from "react-fast-marquee";
const MarqueSection = () => {
    return(
        <div>
            <p className="text-lg text-[#202430] font-epilogue opacity-50 py-8">Companies we helped grow</p>
            <Marquee autoFill={true} className="mb-8 text-[#202430]">
                <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Intel-logo-2022.png'} 
                className="h-8 pr-20 grayscale" alt="" />
                <img src={'https://famfonts.com/wp-content/uploads/tesla-wide.png'} 
                className="h-8 pr-20 grayscale" alt="" />
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfbKO38gk17tXg2FqqXV58MlvBkkh3Awq_w&s'} 
                className="h-10 pr-20 grayscale" alt="" />
                <img src={'https://logowik.com/content/uploads/images/talkit6584.logowik.com.webp'} 
                className="h-15 pr-20 grayscale" alt="" />
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_loPRpaPu-XJHkWzFuZRrp95Avix9AGN_QQ&s'} 
                className="h-8 pr-20 grayscale" alt="" />
                <img src={'https://static.vecteezy.com/system/resources/thumbnails/014/018/578/small/microsoft-logo-on-transparent-background-free-vector.jpg'} 
                className="h-12 pr-20 grayscale" alt="" />
            </Marquee>
        </div>
    )
}
export default MarqueSection