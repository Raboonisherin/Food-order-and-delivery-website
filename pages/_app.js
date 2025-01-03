import "@/styles/globals.css";
import Layout from "../components/Layout";
import store from "../redux/store";
import {Provider} from "react-redux";
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Provider>
  
  );
}