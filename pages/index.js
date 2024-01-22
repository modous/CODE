// `app/page.js` is the UI for the `/` URL
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clph02cha0ml501t761bs521c/master",
  cache: new InMemoryCache(),
});

// GraphQL query
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      name
      description
      image
      availability
      slug
    }
  }
`;

// Function to fetch data
export async function getProducts() {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });
  return data.products;
}


console.log(client);

export default function Home() {
  return (
    <>
      <Layout>
        <p>wa</p>
        <Button onClick={() => alert("Dit is Alert nummer 1")}>klik</Button>
        <Button onClick={() => alert("Dit is een andere alert")}>
          niet klikken
        </Button>
      </Layout>
    </>
  );
}
