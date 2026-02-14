import React from "react";
import firstdivimage from "../image/1stdivimage.png";
import seconddivimage from "../image/div2.png";


export const FeaturedCourse = () => {
    const courses = [
        {
            title: "Fundamentals of Adobe XD Theory Learn New",
            instructor: "William Smith",
            tagColor: "#ff6633",
            price: "$30",
            // Only the first div gets the imported image
            image: firstdivimage 
        },
        {
            title: "Certified Graphic Design with Free Project Course",
            instructor: "Lora Smith",
            tagColor: "#1eb363",
            price: "$30",
            image: seconddivimage // Added second image
        },
        {
            title: "Theory Learn New Student And Fundamentals",
            instructor: "Robot Smith",
            tagColor: "#f1c40f",
            price: "$30",
           
        }
    ];

    return (
        <div style={{
            width: "100%",
            minHeight: "500px",
            backgroundColor: "#fff9f1",
            padding: "50px 20px",
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        }}>
            {courses.map((course, index) => (
                <div key={index} style={{
                    width: "330px",
                    backgroundColor: "#ffffff",
                    borderRadius: "4px",
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                    position: "relative"
                }}>
                    {/* Image Container with Dynamic Background */}
                    <div style={{
                        width: "100%",
                        height: "200px",
                        // Uses course.image if it exists, otherwise a light grey placeholder color
                        backgroundImage: course.image ? `url(${course.image})` : "none",
                        backgroundColor: "#eee", 
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        color: "#888"
                    }}>
                        {!course.image && "[Course Image Placeholder]"}
                    </div>

                    {/* Price Badge */}
                    <div style={{
                        position: "absolute",
                        top: "180px",
                        right: "20px",
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#ff6633",
                        borderRadius: "50%",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "18px",
                        border: "3px solid white",
                        zIndex: "10"
                    }}>
                        {course.price}
                    </div>

                    {/* Content Area */}
                    <div style={{ padding: "25px 20px" }}>
                        {/* Meta Row */}
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "15px", gap: "10px" }}>
                            <span style={{
                                backgroundColor: course.tagColor,
                                color: "white",
                                padding: "4px 12px",
                                borderRadius: "4px",
                                fontSize: "11px",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <span style={{ marginRight: "5px" }}>●</span> Adobe XD
                            </span>
                            <div style={{ color: "#ff6633", fontSize: "14px" }}>
                                ★★★★★ <span style={{ color: "#777", fontSize: "12px", marginLeft: "5px" }}>03 reviews</span>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 style={{
                            fontSize: "20px",
                            margin: "0 0 20px 0",
                            color: "#1a1a1a",
                            lineHeight: "1.3",
                            fontWeight: "700",
                            height: "52px",
                            overflow: "hidden"
                        }}>
                            {course.title}
                        </h3>

                        {/* Lessons & Type */}
                        <div style={{ 
                            display: "flex", 
                            justifyContent: "space-between", 
                            paddingBottom: "20px", 
                            borderBottom: "1px solid #f0f0f0",
                            color: "#777",
                            fontSize: "14px"
                        }}>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                🎞️ 18x Lesson
                            </span>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                📊 Online Class
                            </span>
                        </div>

                        {/* Footer / Instructor */}
                        <div style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "space-between", 
                            marginTop: "15px" 
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <div style={{ 
                                    width: "35px", 
                                    height: "35px", 
                                    borderRadius: "50%", 
                                    backgroundColor: "#ccc" 
                                }}></div>
                                <span style={{ fontWeight: "600", fontSize: "14px", color: "#333" }}>
                                    {course.instructor}
                                </span>
                            </div>
                            <div style={{ 
                                color: "#ff6633", 
                                fontSize: "14px", 
                                fontWeight: "600",
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer"
                            }}>
                                Read More <span style={{ marginLeft: "5px", fontSize: "16px" }}>⧉</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}