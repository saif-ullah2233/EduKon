import React from "react";
// Successfully using your local import
import newimage from "../image/newimage.png";
import mainimage from '../image/menimage.png';
import donaldlogan from '../image/Donaldlogan.png';

export const StudentFeedback = () => {
  const testimonials = [
    {
      name: "Oliver Beddows",
      role: "UX designer",
      content: "Rapidiously build collaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze",
      rating: 5,
      image: donaldlogan 
    },
    {
      name: "Madley Pondor",
      role: "UX designer",
      content: "Rapidiously build collaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze",
      rating: 5,
      image: mainimage 
    }
  ];

  return (
    <section className="feedback-section">
      <style>
        {`
          .feedback-section {
            padding: 80px 20px;
            background-color: #ffffff;
            font-family: 'Roboto', 'Segoe UI', sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            box-sizing: border-box;
          }

          /* World Map Pattern Overlay */
          .feedback-section::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            opacity: 0.05;
            z-index: 0;
            pointer-events: none;
            background-image: url('https://www.transparenttextures.com/patterns/world-map.png');
          }

          .header-group {
            text-align: center;
            margin-bottom: 50px;
            position: relative;
            z-index: 1;
          }

          

          .main-title {
            font-size: 36px;
            color: #1a1a1a;
            font-weight: 800;
            margin: 0;
          }

          .content-container {
            display: flex;
            gap: 40px;
            position: relative;
            z-index: 1;
            align-items: flex-start;
          }

          /* Left Side Image Container */
          .video-wrapper {
            flex: 1;
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0,0,0,0.08);
            height: 390px;
            background-color: #f0f0f0;
          }

          .video-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 85px;
            height: 85px;
            background: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 0 0 12px rgba(255, 255, 255, 0.25);
            transition: all 0.3s ease;
            z-index: 2;
          }

          .play-icon {
            width: 0;
            height: 0;
            border-top: 14px solid transparent;
            border-bottom: 14px solid transparent;
            border-left: 22px solid #ff6633;
            margin-left: 6px;
          }

          /* Right Side: Container kept same, Text sizes increased */
          .testimonial-list {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 25px;
          }

          .testimonial-card {
            background: #ffffff;
            padding: 30px;
            border-radius: 6px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
            border: 1px solid #f2f2f2;
            transition: transform 0.3s ease;
          }

          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 18px;
            padding-bottom: 15px;
            border-bottom: 1px solid #f8f8f8;
          }

          .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .avatar {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            object-fit: cover;
            background-color: #eee;
          }

          .user-name {
            font-weight: 700;
            font-size: 22px; /* Increased */
            color: #1a1a1a;
            margin: 0;
          }

          .user-role {
            font-size: 16px; /* Increased */
            color: #777;
            margin-top: 2px;
            display: block;
          }

          .stars {
            color: #ff6633;
            font-size: 18px; /* Increased */
            letter-spacing: 2px;
          }

          .testimonial-text {
            color: #555;
            line-height: 1.8;
            font-size: 19px; /* Increased */
            margin: 0;
          }

          @media (max-width: 992px) {
            .content-container {
              flex-direction: column;
            }
            .video-wrapper {
              width: 100%;
              height: 300px;
            }
            .testimonial-list {
              width: 100%;
            }
          }
        `}
      </style>

      <div className="header-group">
        <span className="uppercase tracking-[0.4em] text-orange-500 text-xl font-semibold text-center">Loved by 200,000+ Students</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">Students Community Feedback</h2>
      </div>

      <div className="content-container">
        <div className="video-wrapper">
          <img 
            src={newimage} 
            alt="Student Feedback Community" 
            className="video-image"
          />
          <div className="play-button" aria-label="Play Video">
            <div className="play-icon"></div>
          </div>
        </div>

        <div className="testimonial-list">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="card-header">
                <div className="user-info">
                  <img src={item.image} alt={item.name} className="avatar" />
                  <div>
                    <h4 className="user-name">{item.name}</h4>
                    <span className="user-role">{item.role}</span>
                  </div>
                </div>
                <div className="stars">
                  {"★".repeat(item.rating)}
                </div>
              </div>
              <p className="testimonial-text">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};