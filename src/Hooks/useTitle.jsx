import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - SnackDeck`
    },[title])
};

export default useTitle;