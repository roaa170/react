import './MyPage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function MyPage() {

    const redirect = () => {
        window.location.href = '/public/index.html';
    };

    return (
        <div className="container">
            <div className='leftDivs'>
                <div className="leftDiv">
                    <p>LIFE STYLE COLLECTION</p>
                    <h1>MEN</h1>
                    <p>SALE UP TO <span>30% OFF</span></p>
                    <p style={{ fontWeight: "lighter" }}>Get Free Shipping on orders over $99.00</p>
                    <button onClick={redirect}>Shop now</button>
                </div>

                <div className="rightDiv">
                    <img
                        src="/imgs/man.jpg"
                        alt="man"
                        style={{ width: '100%', height: '400px' }}
                    />
                </div>
            </div>
            <div className="RightDivs">
                <div className="topRightDiv" onClick={redirect}>
                <p style={{ fontWeight: "lighter" }}>NEW ARRIVALS</p>
                    <p>SUMMER</p>
                    <p>SALE 20% OFF</p>
                    <p className='shop'>Shop now &nbsp; <FontAwesomeIcon icon={faArrowRight} /></p>
                </div>

                <div className="bottomRightDiv" onClick={redirect}>
                <p style={{ fontWeight: "lighter" }}>GAMING 4K</p>
                    <p>DESKTOPS &</p>
                    <p>LAPTOPS</p>
                    <p className='shop'>Shop now &nbsp; <FontAwesomeIcon icon={faArrowRight} /></p>
                </div>
            </div>
        </div>
    );
}

export default MyPage;