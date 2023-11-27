// `app/page.js` is the UI for the `/` URL
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";




export default function New() {
  return (
    <>
      <Layout>
        <p>nieuwe kleding</p>
        <Button onClick={() => alert("nee")}>klik</Button>
        <Button onClick={"wat"}>niet klikken</Button>
      </Layout>
    </>
  );
}
