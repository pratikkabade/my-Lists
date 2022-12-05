import { Spinner } from 'flowbite-react'
import { useState } from 'react'

const today = new Date()
const day = today.getDay()
// TODO - ADD LOADING SCREEN
export const ThisData = () => {

    const [bookname, setBookname] = useState("")
    const [author, setAuthor] = useState("")
    const [link, setLink] = useState("")
    const [watchlist, setWatchlist] = useState([])
    const [watchlist_link, setWatchlist_link] = useState("")
    const [watchlist_platform, setWatchlist_platform] = useState("")

    const Sheets_URL = "https://script.google.com/macros/s/AKfycbyNswRkc-0bjo29MMUdGY58CXyUFz8EKYNtSNGo_F7ZmJrwV7gNkmbXpaXupfgjaH-n/exec"

    const fetchData = async () => {
        const response = await fetch(Sheets_URL)
        const data = await response.json()

        const books = data.Books
        const watchlist = data.Watchlist

        setBookname(books.name[day])
        setAuthor(books.author[day])
        setLink(books.link[day])
        setWatchlist(watchlist.name[day])
        setWatchlist_link(watchlist.link[day])
        setWatchlist_platform(watchlist.platform[day])
    }

    fetchData()

    return (
        <div className="flex justify-center flex-row items-center flex-wrap text-center mb-10">
            <div className="m-10">
                <div className="cursor-default block p-6 rounded-lg shadow-lg bg-gray-50 w-96 dark:bg-gray-700">
                    <h5 className="text-gray-900 text-6xl leading-tight font-medium mb-2 dark:text-gray-100">
                        {
                            bookname === "" ? <Spinner /> : bookname
                        }
                    </h5>
                    <p className="text-gray-700 text-base mb-4 dark:text-gray-200">
                        by <b>{author}</b>
                    </p>
                    <a target={"_blank"} rel="noreferrer" href={link}
                        className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Open
                    </a>
                </div>
            </div>

            <div className="m-10">
                <div className="cursor-default block p-6 rounded-lg shadow-lg bg-gray-50 w-96 dark:bg-gray-700">
                    <h5 className="text-gray-900 text-6xl leading-tight font-medium mb-2 dark:text-gray-100">
                        {
                            watchlist.length === 0 ? <Spinner /> : watchlist
                        }
                    </h5>
                    <p className="text-gray-700 text-base mb-4 dark:text-gray-200">
                        on <b>{watchlist_platform}</b>
                    </p>
                    <a target={"_blank"} rel="noreferrer" href={watchlist_link}
                        className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Watch
                    </a>
                </div>
            </div>
        </div>
    )
}