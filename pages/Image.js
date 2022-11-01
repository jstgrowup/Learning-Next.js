import React from 'react'
import Image from 'next/image'
function ImageCompo() {
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