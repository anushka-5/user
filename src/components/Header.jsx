import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import Search from "./Search";

const Header = () => {
    const [searchModal, setSearchModal] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    // Get cart items from Redux state
    const { cartItems } = useSelector((state) => state.cart);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 200);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
            <div className="header-content">
                <ul className="left">
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/about")}>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center" onClick={() => navigate("/")}>
                    Pastel Bites
                </div>
                <div className="right flex items-center gap-3">
                    <TbSearch
                        className="cursor-pointer"
                        onClick={() => setSearchModal(true)}
                    />
                    <AiOutlineHeart className="cursor-pointer" />
                    <span
                        className="cart-icon"
                        onClick={() => navigate("/cart")}
                    >
                        <CgShoppingCart />
                        {!!cartCount && (
                            <span className="cart-count">{cartCount}</span>
                        )}
                    </span>
                    <Link to="/user/login">
                        <button className="bg-[#b48a78] text-white px-3 py-1 rounded-xl text-sm hover:bg-[#9c7364] transition">
                            Login
                        </button>
                    </Link>
                    <Link to="/user/signup">
                        <button className="bg-[#b48a78] text-white px-3 py-1 rounded-xl text-sm hover:bg-[#9c7364] transition">
                            Signup
                        </button>
                    </Link>
                    <Link to="/user/profile">
                        <button className="bg-[#b48a78] text-white px-3 py-1 rounded-xl text-sm hover:bg-[#9c7364] transition">
                            Profile
                        </button>
                    </Link>
                </div>
            </div>
            {searchModal && <Search setSearchModal={setSearchModal} />}
        </header>
    );
};

export default Header;