import { createContext,useState } from "react";
import { baseUrl } from "../baseUrl";

export  const AppContext = createContext();


export default function AppContextProvider({children}){

    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(7);
    const [darkMode,setDarkMode] = useState(false);

// add two more features dark mode and ltr and rtl:


    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            
        }
        catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);

        }
        setLoading(false);
    }
    
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }
    function  toggleDarkMode(){
        setDarkMode(prevMode => !prevMode);
        
        const htmlElement = document.querySelector('html');
        if (darkMode) {
            htmlElement.classList.remove('dark');
        } else {
            htmlElement.classList.add('dark');
        }

    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
        darkMode,
        toggleDarkMode
    };

    return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    )

}