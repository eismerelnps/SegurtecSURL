import { useState, useEffect } from "react";

export const useScreen = () => {

    const [ isMobile, setMobile ] = useState(false);

    useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 1000 );
    handleResize();
    window.addEventListener( 'resize', handleResize);
    return () => window.removeEventListener( 'resize', handleResize );
    }, []);

    return isMobile 
}