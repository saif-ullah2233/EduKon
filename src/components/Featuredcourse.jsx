import React, { useState } from "react";
import firstdivimage from "../image/1stdivimage.png";
import seconddivimage from "../image/div2.png";
import thirddivimage from "../image/thirdimage.png";
import div1image from "../image/div1manimage.png";
import div2image from "../image/div2womenimage.png";
import div3image from "../image/thirddivimage.png";
import image1 from "../image/div21stimage.png";
import image2 from "../image/div22ndimage.png";
import image3 from "../image/div23rdimage.png";
import angilmali from "../image/Angelmali.png";
import rajibraj from "../image/Rajibraj.png";
import zinatzare from "../image/zinatzaare.png";

export const FeaturedCourse = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [imgHoveredIndex, setImgHoveredIndex] = useState(null);

    const courses = [
        {
            title: "Fundamentals of Adobe XD Theory Learn New",
            instructor: "William Smith",
            tagColor: "#ff6633",
            price: "$30",
            image: firstdivimage,
            instructorImage: div1image 
        },
        {
            title: "Certified Graphic Design with Free Project Course",
            instructor: "Lora Smith",
            tagColor: "#1eb363",
            price: "$30",
            image: seconddivimage,
            instructorImage: div2image 
        },
        {
            title: "Theory Learn New Student And Fundamentals",
            instructor: "Robot Smith",
            tagColor: "#f1c40f",
            price: "$30",
            image: thirddivimage,
            instructorImage: div3image 
        },
        {
            title: "Computer Fundamentals Basic Startup Ultricies...",
            instructor: "Zinat Zaara",
            tagColor: "#c6a5b6",
            price: "$30",
            image: image1,
            instructorImage: zinatzare 
        },
        {
            title: "Boozy Halloween Drinks for the Grown Eleifend...",
            instructor: "Rajib Raj",
            tagColor: "#49a8b1",
            price: "$30",
            image: image2,
            instructorImage: rajibraj 
        },
        {
            title: "Student Want to Learn About Science And Arts",
            instructor: "Angel Mili",
            tagColor: "#f9a14d",
            price: "$30",
            image: image3,
            instructorImage: angilmali 
        }
    ];

    return (
        <div style={{
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#fff9f1",
            padding: "60px 0",
            display: "flex",
            justifyContent: "center",
            fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            boxSizing: "border-box"
        }}>
            {/* Optimized Responsive Media Queries */}
            <style>
                {`
                    .course-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 30px;
                        max-width: 1200px;
                        width: 90%;
                        margin: 0 auto;
                    }

                    /* Tablet View */
                    @media (max-width: 1024px) {
                        .course-grid {
                            grid-template-columns: repeat(2, 1fr);
                            gap: 20px;
                        }
                    }

                    /* Mobile View */
                    @media (max-width: 768px) {
                        .course-grid {
                            grid-template-columns: 1fr;
                            justify-items: center;
                            width: 95%;
                        }
                        
                        .course-card {
                            max-width: 100% !important;
                        }

                        .course-title {
                            font-size: 18px !important;
                        }
                    }
                `}
            </style>

            <div className="course-grid">
                {courses.map((course, index) => (
                    <div 
                        key={index} 
                        className="course-card"
                        style={{
                            maxWidth: "380px", 
                            width: "100%",
                            backgroundColor: "#ffffff",
                            borderRadius: "8px",
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                            position: "relative",
                            border: "1px solid #f0f0f0",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        
                        {/* Image Section */}
                        <div 
                            onMouseEnter={() => setImgHoveredIndex(index)}
                            onMouseLeave={() => setImgHoveredIndex(null)}
                            style={{
                                width: "100%",
                                height: "220px",
                                overflow: "hidden",
                                backgroundColor: "#f5f5f5",
                                cursor: "pointer",
                                position: "relative"
                            }}
                        >
                            {course.image ? (
                                <div style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: `url(${course.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    transition: "transform 0.5s ease",
                                    transform: imgHoveredIndex === index ? "scale(1.08)" : "scale(1)"
                                }} />
                            ) : (
                                <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#ccc" }}>
                                    [ Preview ]
                                </div>
                            )}
                        </div>

                        {/* Price Badge */}
                        <div style={{
                            position: "absolute",
                            top: "195px",
                            right: "20px",
                            width: "52px",
                            height: "52px",
                            backgroundColor: "#ff6633",
                            borderRadius: "50%",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "700",
                            fontSize: "16px",
                            border: "4px solid white",
                            zIndex: "5",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                        }}>
                            {course.price}
                        </div>

                        {/* Content Section */}
                        <div style={{ padding: "25px 20px" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "12px", gap: "10px", flexWrap: "wrap" }}>
                                <span style={{
                                    backgroundColor: course.tagColor,
                                    color: "white",
                                    padding: "4px 10px",
                                    borderRadius: "4px",
                                    fontSize: "11px",
                                    fontWeight: "bold",
                                    textTransform: "uppercase"
                                }}>
                                    Adobe XD
                                </span>
                                <div style={{ color: "#ffb400", fontSize: "12px" }}>
                                    ★★★★★ <span style={{ color: "#888", marginLeft: "4px" }}>(03)</span>
                                </div>
                            </div>

                            <h3 
                                className="course-title"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    fontSize: "20px",
                                    margin: "0 0 15px 0",
                                    color: hoveredIndex === index ? "#ff6633" : "#1a1a1a",
                                    transition: "color 0.3s ease",
                                    cursor: "pointer",
                                    lineHeight: "1.4",
                                    fontWeight: "700",
                                    minHeight: "56px"
                                }}
                            >
                                {course.title}
                            </h3>

                            <div style={{ 
                                display: "flex", 
                                justifyContent: "space-between", 
                                paddingBottom: "15px", 
                                borderBottom: "1px solid #f1f1f1",
                                color: "#666",
                                fontSize: "14px"
                            }}>
                                <span>🎞️ 18x Lesson</span>
                                <span>📊 Online Class</span>
                            </div>

                            <div style={{ 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "space-between", 
                                marginTop: "15px" 
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <div style={{ 
                                        width: "32px", 
                                        height: "32px", 
                                        borderRadius: "50%", 
                                        backgroundColor: "#eee",
                                        backgroundImage: course.instructorImage ? `url(${course.instructorImage})` : "none",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }} />
                                    <span style={{ fontWeight: "600", fontSize: "13px", color: "#444" }}>
                                        {course.instructor}
                                    </span>
                                </div>
                                <div style={{ 
                                    color: "#1a1a1a", 
                                    fontSize: "14px", 
                                    fontWeight: "700",
                                    cursor: "pointer"
                                }}>
                                    Read More <span style={{ color: "#ff6633" }}>⧉</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};