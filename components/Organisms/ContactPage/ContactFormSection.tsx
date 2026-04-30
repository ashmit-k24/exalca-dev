import {
    FormInput,
    FormSelect,
    FormTextArea,
    FormCheckbox,
    FormPhoneInput,
    FormWrapper,
} from "@/components/Atoms/Form/Form";
import { Button } from "@/components/ui/button";

const ContactFormSection = () => {
    return (
        <section className="ContactFormSection bg-[#F5F7FA]">
            <div className="container">
                <FormWrapper className="mx-auto w-full">
                    <form className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6">
                        {/* Row 1 */}
                        <div className="md:col-span-3">
                            <FormInput label="First Name" placeholder="John" required />
                        </div>
                        <div className="md:col-span-3">
                            <FormInput label="Last Name" placeholder="John" required />
                        </div>

                        {/* Row 2 */}
                        <div className="md:col-span-2">
                            <FormInput label="Email ID" placeholder="John" required />
                        </div>
                        <div className="md:col-span-2">
                            <FormSelect
                                label="Country"
                                placeholder="Select Country"
                                options={[{ label: "India", value: "india" }]}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <FormPhoneInput label="Contact Number" placeholder="12345 678" />
                        </div>

                        {/* Row 3 */}
                        <div className="md:col-span-3">
                            <FormSelect
                                label="Designation"
                                placeholder="Select Designation"
                                options={[{ label: "Manager", value: "manager" }]}
                            />
                        </div>
                        <div className="md:col-span-3">
                            <FormSelect
                                label="Service"
                                placeholder="Select Service"
                                options={[
                                    { label: "Consulting", value: "consulting" },
                                    { label: "Manufacture", value: "manufacture" },
                                    { label: "Distribution", value: "distribution" },
                                    { label: "Recruitment", value: "recruitment" },
                                    { label: "Other", value: "other" },
                                ]}
                            />
                        </div>

                        {/* Row 4 */}
                        <div className="md:col-span-6">
                            <FormTextArea label="Description" placeholder="Message" />
                        </div>

                        {/* Row 5 */}
                        <div className="md:col-span-6">
                            <FormCheckbox
                                label={
                                    <span>
                                        By checking here, you agree to receive marketing emails about
                                        our products and services. You can unsubscribe via a link in
                                        the email.
                                    </span>
                                }
                            />
                        </div>

                        {/* Row 6 */}
                        <div className="mt-4 flex flex-col gap-4 md:col-span-6 md:flex-row md:items-center md:justify-between">
                            <p className="text-[14px] text-[#666666]">
                                The information you provide will be used in accordance with the
                                terms of our{" "}
                                <a
                                    href="#"
                                    className="text-primary underline underline-offset-4"
                                >
                                    Privacy Policy
                                </a>
                                .
                            </p>
                            <Button className="h-[48px] rounded-[8px] bg-[#1B1266] px-10 text-[16px] font-semibold hover:bg-[#1B1266]/90">
                                Share
                            </Button>
                        </div>
                    </form>
                </FormWrapper>
            </div>
        </section>
    );
};

export default ContactFormSection;