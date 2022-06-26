import { useEffect } from 'react'

const detectedComponent = (ref, callback) => {
    const handleViewport = () => {
        if (ref.current && !ref.current.contains(e.target)) {
            // callback();
            console.log('in handleViewport');
        }
    }

    useEffect(() => {
        document.addEventListener()
    })
};

export default detectedComponent;
