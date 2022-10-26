import React from 'react'

function StyledJSX() {
    return (
        <>


            <style jsx>
                {
                    `
                    .dummy{
                        background:yellow
                    }
                    `
                }

            </style>
            <div className='dummy'>StyledJSX</div>
        </>
    )
}

export default StyledJSX