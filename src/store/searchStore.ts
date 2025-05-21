import { create } from "zustand";

type SearchStore = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

const useSearchStore = create<SearchStore>((set)=>({
    searchQuery:"",
    setSearchQuery: (query)=> set({searchQuery:query})
}))
export default useSearchStore