// `app/page.js` is the UI for the `/` URL
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";

export default function About() {
  return (
    <>
      <Layout>
        About
        <Button onClick={() => alert("nee")}>bla</Button>
        <Button onClick={() => alert("wat")}>niet klikken</Button>
      </Layout>
    </>
  );
}
