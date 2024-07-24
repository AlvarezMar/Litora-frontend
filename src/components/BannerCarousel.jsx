"use client";

import styles from "./BannerCarousel.module.css"

import { Carousel } from "flowbite-react";

export function BannerCarousel() {
  return (
    <div className="h-[27rem] sm:h-[27rem] xl:h-[27rem] 2xl:h-[27rem] overflow-hidden rounded-2xl">
      <Carousel pauseOnHover slide={false}> 
      <div className={`${styles.fade_image} h-[27rem] grid bg-[#f2f0fe] p-20 relative`} style={{gridTemplateColumns: "2fr 1fr"}}>
                <div className={` flex flex-col gap-4`}>
                    <span className="text-[#6D5DD7] font-semibold text-xl">Now on Sale</span>
                    <h1 className="text-4xl font-bold">The classics of literature in the palm of your hand</h1>
                    <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem veritatis sapiente numquam nesciunt labore aperiam amet nihil, incidunt minus pariatur blanditiis!</p>
                    <button className={`${styles.button} self-start bg-[#6D5DD7] text-white px-6 py-3 rounded-lg font-semibold`}>Get the deal</button>
                    <div className={styles.circle}></div>
                    <div className={styles.circle_2}></div>
                    <div className="circle"></div>
                </div>
                {/* <img src="src\assets\2114939289.png" alt="" className="absolute -right-20 left-auto -top-10"/> */}
                {/* <img src="src\assets\books.webp" alt="" className="absolute -right-10 left-auto -top-32" width="350px"/> */}
                {/* <img src="src\assets\classics_books.webp" alt="" className="absolute -right-[500px] rotate-6" width="900px"/> */}
                <img src="src\assets\new_intro_books_8_11.png" alt="" className="absolute -right-28 -top-3 rotate-45" width="520px"/>
            </div> 
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
      </Carousel>
    </div>
  );
}

export default BannerCarousel;
