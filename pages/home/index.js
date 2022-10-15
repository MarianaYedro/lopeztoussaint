import Layout from "../../components/Layout/Layout";
import styles from "./index.module.css";
import Navbar from "../../components/Navbar/Navbar";


export const Home = ({ data }) => {
    return (
        
            <Layout title="LTS | Home">
                <div className={styles.container}>
                    <Navbar/>
                    
                    
                </div>
                
                
            </Layout>
        
    );
};



export default Home;

