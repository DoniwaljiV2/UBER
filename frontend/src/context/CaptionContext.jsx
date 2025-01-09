import  { createContext, useContext, useState } from 'react';

export const CaptionDataContext = createContext();


 const CaptionContext = ({ children }) => {
    const [caption, setCaption] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaption = async (captionData) => {
        setCaption(captionData);
    }
    const value={
        caption,
        setCaption,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaption
    }

    return (
        <CaptionDataContext.Provider value={value}>

            {children}
        </CaptionDataContext.Provider>
    );
};

export default CaptionContext;