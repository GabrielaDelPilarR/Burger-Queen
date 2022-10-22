import Header from "../../components/Header/Header";
import NavChef from "../../components/Nav/NavChef";
import chef from "../../img/chef.png"

function ViewPreparedOrders () {
    return(
        <>
         <Header img={chef} view={'chef'} nav={<NavChef/>}/>
        </>
    )
}

export default ViewPreparedOrders