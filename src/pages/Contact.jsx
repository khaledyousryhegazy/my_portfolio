import AnimatedPages from "../components/AnimatedPages";
import Title from "../components/Title";
import Form from "../components/contact/Form";
import Map from "../components/contact/Map";
function Contact() {
  return (
    <div className="py-24">
      <AnimatedPages>
        <Title main="contact" title="Get in Touch" />
        <Map />
        <Form />
      </AnimatedPages>
    </div>
  );
}

export default Contact;
