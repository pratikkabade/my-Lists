import { useState } from "react";
import { FooterURL } from "../constants/URLS";

export const FooterItems = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch(FooterURL);
        const values = await response.json();

        const Archives = values.Archives

        // CREATE ARRAY FROM DICTIONARY
        const new_array = []
        for (let i = 0; i < Object.keys(Archives.name).length; i++) {
            new_array.push(
                [
                    { name: Archives.name[i] },
                    { url: Archives.url[i] },
                    { logo: Archives.logo[i] }
                ]
            )
        }

        setData(new_array)
    }
    fetchData();

    return (
        <div className="flex flex-row flex-wrap justify-center">
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>

                            <a target={"_blank"} rel="noreferrer" href={item[1].url} className="text-gray-600 font-bold hover:text-blue-700 dark:text-gray-200 dark:hover:text-white">
                                <div className="flex flex-row text-center justify-center items-center p-4" >
                                    <img src={item[2].logo} alt="{item[0].name}"
                                        className="w-10 rounded-md mr-3" />
                                    {item[0].name}
                                </div>
                            </a>

                        </div>
                    )
                })
            }
        </div>
    )
}   