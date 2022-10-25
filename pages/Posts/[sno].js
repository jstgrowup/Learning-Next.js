import { useRouter } from "next/router";

import React from 'react'

function RouterPosts() {
    const router = useRouter()
    const { sno } = router.query

    return (
        <div>RouterPosts{sno}</div>
    )
}

export default RouterPosts