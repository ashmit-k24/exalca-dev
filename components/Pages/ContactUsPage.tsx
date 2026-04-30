import React from 'react'
import PageBanner from '../Molecules/PageBanner/PageBanner'
import { IMAGE_URLS } from '@/constants/images.constants'
import ConnectUsSection from '../Organisms/ContactPage/ConnectUsSection'
import LookingForSomething from '../Organisms/ContactPage/LookingForSomething'
import ContactFormSection from '../Organisms/ContactPage/ContactFormSection'
import MapSection from '../Organisms/ContactPage/MapSection'
import LocationDetails from '../Organisms/ContactPage/LocationDetails'

const ContactUsPage = () => {
    return (
        <>
            <PageBanner
                image={IMAGE_URLS.CONTACT_US_BANNER}
                title="We‘d Love To Hear From You !"
                description="Explore how Exalca drives innovation for our customers, our people, and the ecosystem around us."
            />
            <ConnectUsSection />
            <LookingForSomething />
            <ContactFormSection />
            <MapSection
                pillText="Our Head Quarters"
                heading="Corporate Office"
                extraContent={<LocationDetails />}
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583769188046!2d77.63319087595304!3d12.934483715694297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15cd4b553e11%3A0xe53e80064a37f549!2sExalca%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1714460000000!5m2!1sen!2sin"
            />
            <MapSection
                pillText="Our Fulfilment Location"
                heading="Delivery Center - I"
                className='pt-0!'
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583769188046!2d77.63319087595304!3d12.934483715694297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15cd4b553e11%3A0xe53e80064a37f549!2sExalca%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1714460000000!5m2!1sen!2sin"
            />
            <MapSection
                pillText="Our Business Unit"
                heading="Delivery  Center - II"
                className='pt-0!'
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583769188046!2d77.63319087595304!3d12.934483715694297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15cd4b553e11%3A0xe53e80064a37f549!2sExalca%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1714460000000!5m2!1sen!2sin"
            />
            <MapSection
                pillText="Our Business Unit"
                heading="Exalca Arabia"
                className='pt-0!'
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583769188046!2d77.63319087595304!3d12.934483715694297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15cd4b553e11%3A0xe53e80064a37f549!2sExalca%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1714460000000!5m2!1sen!2sin"
            />

        </>
    )
}

export default ContactUsPage
