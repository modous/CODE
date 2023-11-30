// `app/page.js` is the UI for the `/` URL
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <>
      <Layout>
        <ContactForm></ContactForm>
        <Button onClick={() => alert("nee")}>bla</Button>
        <Button onClick={() => alert("wat")}>niet klikken</Button>
      </Layout>
    </>
  );
}
