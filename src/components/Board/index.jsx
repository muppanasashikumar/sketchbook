import React, { useEffect, useRef } from 'react'

const Board = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (!canvasRef)
            return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, [])
    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}

export default Board