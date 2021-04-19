import ReactMarkdown from "react-markdown";
const About = (props) => {
  return (
    <div className="container mx-auto lg:py-32 py-16">
      <h2 className="lg:text-5xl text-4xl">
        <span className="relative pb-2 title-decorator">About</span>
      </h2>
      <div className="py-12 lg:text-lg text-base">
        <ReactMarkdown source={props.about.description} escapeHtml={false} />
      </div>
    </div>
  );
};

export default About;
