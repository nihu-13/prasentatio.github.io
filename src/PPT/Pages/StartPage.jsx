import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import image from "../assests/logo.jpeg"
import { useNavigate } from "react-router-dom";
function StartPage() {
  const navigation = useNavigate();
  const students = [
    {
      name: "Niharika Sahu",
      id: "0228cs201023",
    },
    {
      name: "Aniket Kesharwani",
      id: "0228cs201004",
    },
    {
      name: "Deepanshu Vishwakarma",
      id: "0228cs201014",
    },
  ];

  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.trim().toLowerCase();
      console.log(command);
      if (
        command === "start" ||
        command === "press start" ||
        command === "enter start" ||
        command == "enter"
      ) {
        handleClick();
      }
    };

    recognition.onend = () => {
      if (isRecording) {
        recognition.start();
      }
    };

    if (isRecording) {
      recognition.start();
    }

    return () => {
      recognition.stop();
    };
  }, [isRecording]);

  const handleClick = () => {
    navigation("/slides");
  };

  const toggleRecording = () => {
    setIsRecording((prev) => !prev);
  };

  return (
    <div className="w-full h-screen flex relative">
      <div className="w-1/2 bg-black h-full"></div>
      <div className="bg-yellow-400 h-full w-1/2"></div>
      <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[80vh] shadow-xl">
        <div className="w-full h-full flex flex-col px-10 py-8">
          <div className="h-[60%] flex flex-col items-center space-y-[1.5rem]">
            <div className="text-blue-900 text-[25px] font-bold pb-[2rem]" style={{marginBottom:'-32px'}}> STUDENT RESOURCES </div>
            <div className="text-black-900 text-[18px] font-bold pb-[2rem] ">Major Project</div>
            <div className="text-blue-900 text-[14px] " style={{marginTop:'-20px'}}>Submitted in 7th Semester of Bachelor of Technology</div>
            <div className="text-blue-900 text-[14px] font-bold pb-[2rem]" style={{marginTop:'3px'}}>{`SHRI RAM INSTITUTE OF TECHNOLOGY, JABALPUR (M.P.)`}</div>
            <div>
              <img src={image} alt="img"style={{marginTop:'-40px'}} />
            </div>
            <div className="text-blue-900 text-[12px] font-bold pb-[2rem]" style={{marginTop:'3px'}}>In</div>
            <div className="text-blue-900 text-[15px] font-bold pb-[2rem]" style={{marginTop:'-20px'}}>Computer Science & Engineering</div>
            <div className="text-blue-900 text-[12px] font-bold pb-[2rem] " style={{marginTop:'-20px'}}>{`Session : 20023-24`}</div>
    
          </div>

          <div className="h-[40%] flex justify-around">
            <div className=" flex flex-col" style={{marginLeft:'-80px'}}>
              <div className="text-blue-900 text-[16px] font-bold pb-[1rem] ">
                Submitted By
              </div>
              <div className="flex flex-col space-y-[1rem]">
                {students.map((student, index) => {
                  return (
                    <div className="flex flex-col space-y-[3px] " key={index}>
                      <div>
                        <span className="text-[12px] font-bold text-gray-700">
                          Student Name
                        </span>{" "}
                        :{" "}
                        <span className="text-[13px] font-bold text-black-900">
                          {student?.name}
                        </span>
                      </div>
                      <div>
                        <span className="text-[12px] font-bold text-gray-700">
                          Enroll No
                        </span>{" "}
                        :{" "}
                        <span className="text-[13px] font-bold text-black-900">
                          {student?.id}{" "}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" flex flex-col" style={{marginRight:'-80px'}}>
              <div className="text-blue-900 text-[16px] font-bold pb-[1rem]">
                Under the guidance of
              </div>
              <div>
                <div className="text-red-900 text-[1rem] font-bold">
                  Dr. Xyz
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          handleClick();
        }}
        className="flex  items-center p-[4px] bg-black font-bold text-[20px] rounded  absolute bottom-10 right-10 40 right-10 shadow-xl"
      >
        <ButtonDiv className="px-[15px] py-[6px] border-3 border-transparent rounded-sm hover:border-white">
          <ArrowForwardIcon
            sx={{
              color: "white",
              width: "30px",
              height: "30px",
              mr: "5px",
            }}
          />
          <span className="text-white pr-[12px]">Start</span>
        </ButtonDiv>
      </button>
      <button
        onClick={() => {
          toggleRecording();
        }}
        className="flex  items-center p-[4px] bg-black font-bold text-[18px] rounded  absolute bottom-40 right-10 shadow-xl"
      >
        <ButtonDiv className="px-[15px] py-[6px] border-3 border-transparent rounded-sm hover:border-white">
          <span className="text-white pr-[12px]">
            {isRecording ? "Listening..." : "Press Me"}
          </span>
        </ButtonDiv>
      </button>
    </div>
  );
}

export default StartPage;
const ButtonDiv = styled.div`
  border: 3px solid transparent;
  &:hover {
    border: 3px solid white;
    border-radius: 1px;
  }
`;
