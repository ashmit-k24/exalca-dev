import React from 'react'
import PageBanner from '../Molecules/PageBanner/PageBanner'
import { IMAGE_URLS } from '@/constants/images.constants'

const ContactUsPage = () => {
    return (
        <>
            <PageBanner
                image={IMAGE_URLS.CONTACT_US_BANNER}
                title="We‘d Love To Hear From You !"
                description="Explore how Exalca drives innovation for our customers, our people, and the ecosystem around us."
            />

        </>
    )
}

export default ContactUsPage