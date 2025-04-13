import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "./search.css";

const Search = ({ setSearchModal }) => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (query.trim().length === 0) {
                setData([]);
                return;
            }

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_STRIPE_APP_DEV_URL}/recipes?populate=*&filters[name][$contains]=${query}`
                );
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching search data:", error);
            }
        };

        fetchData();
    }, [query]);

    return (
        <div className="search-modal">
            <div className="search-form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for yummies"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setSearchModal(false)}
                />
            </div>

            <div className="search-result-content">
                {!data?.length && (
                    <div className="start-msg">
                        Start typing to see yummies you are looking for.
                    </div>
                )}
                <div className="search-results">
                    {data.map((item) => {
                        const recipe = {
                            documentId: item.id,
                            name: item.name,
                            desc: item.desc,
                            image: item.img?.data?.[0]?.url,
                        };

                        return (
                            <div
                                className="search-result-item"
                                key={recipe.documentId}
                                onClick={() => {
                                    navigate("/recipe/" + recipe.documentId);
                                    setSearchModal(false);
                                }}
                            >
                                <div className="image-container">
                                    <img
                                        src={`${import.meta.env.VITE_STRIPE_APP_DEV_URL}${recipe.image}`}
                                        alt={recipe.name}
                                    />
                                </div>
                                <div className="prod-details">
                                    <span className="prod-name">{recipe.name}</span>
                                    <span className="prod-desc">{recipe.desc}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Search;