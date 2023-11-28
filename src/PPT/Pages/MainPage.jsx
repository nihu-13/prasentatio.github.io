import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useNavigate } from "react-router-dom";
import image01 from "../assests/dfd0.png";
import image02 from "../assests/dfd01.png";
function MainPage() {
  const arrayOfIndex = [
    "Index",
    "Introduction",
    "Object",
    "Features",
    "Tech Stack",
    "Future Scope",
    "DFD Level 0",
    "DFD Level 1",
    "Use Case Daigram",
    "modules",
    "Thank You",
    // if anything changes here make sure to change it inside data[index]
  ];
  const navigation = useNavigate();
  function handleClick() {
    navigation("/");
  }

  const data = {
    1: {
      heading: "Introduction",
      type: "list",
      keyPoints: [
        "Our project introduces a YouTube-like platform with voice command functionality, revolutionizing user interaction. Users can navigate, search, and control content hands-free, enhancing accessibility and convenience. The platform employs speech recognition technology for intuitive actions like searching videos, adjusting volume, and exploring personalized recommendations, creating a seamless and interactive browsing experience.",
      ],
    },
    0: {
      heading: "Index",
      type: "list",
      keyPoints: [
        "Introduction",
        "Project Objective",
        "Key Features Of This Project",
        "Tech Stack Of This Project",
        "Future Scope",
        "DFD Level 0",
        "DFD Level 1",
        "Use Case Daigram",
        "modules",
      ],
    },
    2: {
      heading: "Project Objective",
      type: "list",
      keyPoints: [
        "The project aims to develop a prototype of the YouTube clone with robust voice command features. Objectives include implementing speech recognition for hands-free interaction, prioritizing accessibility, and creating an ad-free environment for an enhanced user experience. The goal is to deliver a user-friendly platform that sets new standards in interactive content consumption.",
      ],
    },
    3: {
      heading: "Key Features Of This Project",
      type: "list",
      keyPoints: [
        "Search for videos hands-free using voice commands.",
        "Personalized video recommendations based on user preferences and viewing history.",
        "Navigate through video categories, playlists, and settings using voice prompts.",
        "Interactive Video Controls: Play, pause, skip, and control video playback with voice commands.",
        "Voice Commenting: Add comments and interact with the community using voice input.",
        "Voice Search Filters: Apply search filters like date, relevance, and duration through voice commands.",
        "Multilingual Voice Support: Recognize and respond to voice commands in multiple languages.",
        "Enjoy an uninterrupted viewing experience without ads.",
      ],
    },
    4: {
      heading: "Tech Stack Of This Project",
      type: "list",
      keyPoints: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "ReactJs",
        "MongoDB",
        "NodeJs",
        "Speech to text API",
        "Rasajs",
        "Dijital Ocean",
      ],
    },
    5: {
      heading: "Future Scope Of This Project",
      type: "list",
      keyPoints: [
        "Accessibility Trends: Show statistics or trends indicating the rise in demand for accessibility features across digital platforms. Include data on the increasing usage of voice assistants in everyday tasks.",
        "Market Research: Share market research findings or surveys showcasing user preferences towards hands-free browsing experiences and the positive impact on user engagement and retention.",
        "Technology Adoption: Illustrate the rapid adoption of voice-controlled devices and the integration of voice commands in various technologies, emphasizing the shift towards intuitive, hands-free interaction.",
        "Case Studies or Testimonials: Incorporate case studies or testimonials from users or organizations that have embraced hands-free browsing, highlighting the benefits and positive feedback",
      ],
    },
    6: {
      heading: "Data Flow Diagram Level 0",
      type: "img02",
      img:image01
    },
    7: {
      type: "img",
      heading: "Data Flow Diagram Level 1",
      img: image02,
    },
    8: {
      type: "img",
      heading: "Use Case Diagram",
      img: "",
    },
    9: {
      type: "modules",
      heading: "Modules",
      modules: [
        {
          name: "Front-end",
          components: [
            {
              name: "Home Page",
              functionalities: [
                "Display Recommended Videos",
                "Featured Content",
                "User Activity Feed",
              ],
              pages: ["HomePage"],
            },
            {
              name: "Search",
              functionalities: [
                "Search Bar",
                "Filter and Sorting Options",
                "Display Search Results",
              ],
              pages: ["SearchPage"],
            },
            {
              name: "User Profile",
              functionalities: [
                "User Dashboard",
                "User Video Library",
                "Subscription Management",
              ],
              pages: ["UserProfilePage", "SubscriptionPage"],
            },
            {
              name: "Upload Video",
              functionalities: [
                "Video Upload Form",
                "Thumbnail Selection",
                "Video Information Input",
              ],
              pages: ["UploadVideoPage"],
            },
            {
              name: "Settings",
              functionalities: [
                "Account Settings",
                "Privacy Settings",
                "Notification Preferences",
              ],
              pages: ["SettingsPage"],
            },
            // ... Add more frontend components as needed
          ],
        },
        // {
        //   name: "Back-end",
        //   components: [
        //     "User-authentication",
        //     "Video Upload / Deletion ",
        //     "Search Controller",
        //     "Recommendation System",
        //     ""
        //   ],
        // },
        {
          name: "Back-end",
          components: [
            {
              name: "User Authentication",
              functionalities: [
                "User Registration",
                "User Login",
                "Token Generation",
                "Token Validation",
              ],
              controllers: [
                "UserRegistrationController",
                "UserLoginController",
                "AuthenticationMiddleware",
              ],
              endpoints: [
                "/api/register",
                "/api/login",
                "/api/logout",
                // ... other authentication endpoints
              ],
            },
            {
              name: "Video Management",
              functionalities: [
                "Video Upload",
                "Video Retrieval",
                "Video Deletion",
              ],
              controllers: [
                "VideoUploadController",
                "VideoController",
                "VideoDeletionController",
              ],
              endpoints: [
                "/api/videos/upload",
                "/api/videos/:id",
                "/api/videos/:id/delete",
                // ... other video management endpoints
              ],
            },
            {
              name: "User Profile",
              functionalities: [
                "User Profile Retrieval",
                "Subscription Information",
              ],
              controllers: ["UserProfileController", "SubscriptionController"],
              endpoints: [
                "/api/users/:id",
                "/api/users/:id/subscriptions",
                // ... other user profile endpoints
              ],
            },
            {
              name: "Search",
              functionalities: ["Video Search"],
              controllers: ["SearchController"],
              endpoints: [
                "/api/search?q=:query",
                // ... other search endpoints
              ],
            },
            {
              name: "Comment Management",
              functionalities: ["Comment Management", "Comment Deletion"],
              controllers: ["CommentController", "CommentDeletionController"],
              endpoints: [
                "/api/comments/:videoId",
                "/api/comments/:commentId/delete",
                // ... other comment management endpoints
              ],
            },
            {
              name: "Subscription Management",
              functionalities: ["Subscription", "Subscription Deletion"],
              controllers: [
                "SubscriptionController",
                "SubscriptionDeletionController",
              ],
              endpoints: [
                "/api/subscriptions/:userId",
                "/api/subscriptions/:subscriptionId/delete",
                // ... other subscription management endpoints
              ],
            },
            {
              name: "Authentication Middleware",
              functionalities: ["Token Verification"],
              controllers: ["AuthenticationMiddleware"],
            },
            {
              name: "Recommendation Engine",
              functionalities: [
                "Analyze User Behavior",
                "Suggest Related Videos",
              ],
              controllers: ["RecommendationEngineController"],
            },
          ],
        },
      ],
    },
    10: {
      type: "thankyou",
      heading: "Thank you",
    },
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="w-full h-[100vh] flex">
      <div className="w-[20%] h-full bg-black overflow-y-auto">
        <div className="w-5/5 h-full bg-black flex items-center justify-start">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              width: "100%",
              ".Mui-selected": {
                backgroundColor: "black",
                color: "white ",
              },
            }}
          >
            {arrayOfIndex.map((val, index) => (
              <Tab
                key={index}
                label={val}
                sx={{
                  color: "white ",
                  margin: "10px",

                  "&.Mui-selected": {
                    color: "#ffb703 !important",
                    // backgroundColor: "#9a7925 ",
                    // opacity: 0.3,
                    fontSize: "16px",
                  },
                  fontSize: "12px",
                }}
              />
            ))}
          </Tabs>
        </div>
      </div>

      <div className="w-[80%] h-full flex items-center justify-center">
        <div className="shadow-2xl w-[100rem] min-h-[50rem] p-20">
          <div
            className=" w-auto px-10 py-3 flex items-center justify-start mb-10"
            style={{
              borderLeft: "5px solid #ffbf1d",
              backgroundColor: "#fffbef",
            }}
          >
            <div className="text-yellow-400 text-6xl font-extrabold ">
              {data[value]?.heading}
            </div>
          </div>

          {data[value].type == "list" && (
            <div className="flex flex-col">
              <QuoteContainer>
                <ol className="list-disc pl-8">
                  {data[value]?.keyPoints?.map((bullets, index) => (
                    <li className="text-[2rem] my-1" key={index}>
                      {bullets}
                    </li>
                  ))}
                </ol>
              </QuoteContainer>
            </div>
          )}
          
          {data[value].type == "img" && (
            <div>
              <img src={data[value].img} alt="img" />
            </div>
          )}
          {data[value].type == "img02" && (
            <div>
              <img src={data[value].img} alt="img" style={{width:'59%'}}/>
            </div>
          )}
          {data[value].type == "thankyou" && (
            <div
              className="w-full h-full flex items-center justify-center font-[20px] text-[50px] mt-10"
              style={{ marginTop: "10rem" }}
            >
              <i>Thank You...</i>
            </div>
          )}
          {data[value].type === "modules" && (
            <div
              className="w-full h-full flex justify-around"
              style={{ marginTop: "5rem" }}
            >
              {data[value].modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="flex flex-col space-y-5">
                  <div className="font-bold text-4xl">{module.name}</div>
                  <ul className="list-disc pl-5 grid grid-cols-2 gap-x-12 gap-y-12">
                    {module.components.map((component, componentIndex) => (
                      <li
                        key={componentIndex}
                        className="font-thin text-[14px] text-gray-600"
                      >
                        {component.name}
                        <ul className="list-disc pl-5">
                          {component.functionalities.map(
                            (functionality, functionalityIndex) => (
                              <li
                                key={functionalityIndex}
                                className="font-thin text-[14px] text-gray-600"
                              >
                                {functionality}
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => handleClick()}
        className="flex z-101 items-center p-[4px] bg-yellow-400 font-bold text-[20px] rounded  absolute bottom-10 right-10  shadow-2xl"
      >
        <ButtonDiv className="px-[15px] py-[6px] border-3 border-transparent rounded-sm hover:border-white">
          <ArrowBackIcon
            sx={{
              color: "white",
              width: "30px",
              height: "30px",
              mr: "5px",
            }}
          />
          <span className="text-white pr-[12px]">Back</span>
        </ButtonDiv>
      </button>
    </div>
  );
}

export default MainPage;

const ButtonDiv = styled.div`
  border: 3px solid transparent;
  &:hover {
    border: 3px solid white;
    border-radius: 1px;
  }

  .quoteLeft {
    width: 12px;
    height: 12px;
    color: gray;

    transform: rotateY(180deg) !important;
  }
  .quoteRight {
    width: 12px;
    height: 12px;
    color: gray;
  }
`;

const QuoteContainer = styled.div`
  position: relative;
  margin: 20px 0;
`;

const QuoteLeft = styled(FormatQuoteIcon)`
  position: absolute;
  left: -15px;
  top: -5px;
  color: gray;
  transform: rotate(180deg);
`;
  

const QuoteRight = styled(FormatQuoteIcon)`
  position: absolute;
  right: -15px;
  bottom: -5px;
  color: gray;
`;
