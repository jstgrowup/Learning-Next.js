import React from 'react'
import Image from 'next/image'
function ImageCompo() {
    console.log(process.env.API_BASE_URL);
    return (
        <>
            <Image src={"/images/posts/1.jpg"}
                alt="Picture of the author"
                width={500}
                height={500} />
        </>
    )
}

export default ImageCompo