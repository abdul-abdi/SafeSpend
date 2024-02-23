import MainContainer from "../components/Containers/MainContainer";
import Searchbar from "../components/homeComponents/Searchbar";
import { Title } from "../components/Titles/Titles";
import CategoryCard from "../components/Cards/CategoryCard";
import TransactionCard from "../components/Cards/TransactionCard";
import HomeProfile from "../components/homeComponents/HomeProfile";



import styles from "../styles/homeComponents/Home.module.scss";

const Home = () => {
  return ( <MainContainer optionClass={styles.container}>
<div className={styles.main}>
    <div className={styles.searchbar}> 
    <Searchbar />
    </div>
    <div className={styles.categories}> 
    <Title>Categories Last 30 Days</Title>
    <div className={styles.content}> 
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    </div>
    </div>
    <div className={styles.transactions}> 
    <Title>Latest Transactions</Title>
    <div className={styles.content}>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
    </div>
    </div>
</div>
<div className={styles.profile}>
    <HomeProfile />
</div>
  </MainContainer>
  );
};

export default Home;