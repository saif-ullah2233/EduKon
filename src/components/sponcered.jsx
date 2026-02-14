import React from "react";
import gooleimage from "../image/google.png";
import netfleximage from '../image/netflix.png';
import nestimage from "../image/nest.png";
import dsnepimage from "../image/Disnep.png";

export const Sponcered = () => {
    const images = [gooleimage, netfleximage, nestimage, dsnepimage];

    return (
        <>
            <style>
                {`
                @keyframes big-jump-ticker {
                    /* Each 25% represents one of the 4 images */
                    0%, 20% { transform: translateX(0); }
                    25%, 45% { transform: translateX(-25%); }
                    50%, 70% { transform: translateX(-50%); }
                    75%, 95% { transform: translateX(-75%); }
                    100% { transform: translateX(-100%); }
                }
                .ticker-container {
                    display: flex;
                    width: 100%;
                    /* 4 images * 3 seconds each = 12s total duration */
                    animation: big-jump-ticker 12s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
                }
                .image-wrapper {
                    flex: 0 0 100%; /* Each jump moves exactly one screen width */
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                .sponsor-img {
                    height: 80px; /* Increased size as requested earlier */
                    object-fit: contain;
                }
                `}
            </style>
            <div style={{
                backgroundColor: "#fff9f1",
                width: "100%",
                height: "120px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                position: "relative"
            }}>
                <div className="ticker-container">
                    {/* First View: All 4 images together */}
                    <div className="image-wrapper">
                        {images.map((img, index) => (
                            <img key={`v1-${index}`} src={img} alt="sponsor" className="sponsor-img" />
                        ))}
                    </div>
                    {/* Second View: Cloned for seamless transition */}
                    <div className="image-wrapper">
                        {images.map((img, index) => (
                            <img key={`v2-${index}`} src={img} alt="sponsor" className="sponsor-img" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}