import Hero from "../component/Hero";
import NewCollections from "../component/NewCollections/NewCollections";
import Offer from "../component/offer/Offer";
import Popular from "../component/popular/popular";
import NewsLetter from "../component/newletter/NewsLetter";

function Shop(){
    return (
    <>
    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollections/>
    <NewsLetter/>
    </>
    );
}
export default Shop;