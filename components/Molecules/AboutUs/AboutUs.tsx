interface AboutUsProps {
  content: string[];
  className?: string;
}

const AboutUs = ({ content, className = "sec_padding" }: AboutUsProps) => {
  return (
    <section className={className}>
      <div className="container">
        {content?.map((text, index) => (
          <p
            key={index}
            className={`text-[24px] text-[#0E121B] font-light leading-[42px]! ${
              index > 0 ? "mt-5" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
