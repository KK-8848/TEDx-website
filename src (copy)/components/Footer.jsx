import React from "react";
import SocialIcons from "./SocialIcons";
import GoogleMapReact from 'google-map-react';

const SocialIcon = ({ children }) => (
  <div
    style={{
      width: 60,
      height: 62,
      padding: "9px 3px",
      background: "#FAFAFA",
      borderRadius: 10,
      overflow: "hidden",
      border: "1.50px #E31C25 solid",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

const Footer = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: 1236,
          height: 433,
          left: 102,
          top: 91,
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 50,
        }}
      >
        <div
          style={{
            width: 378.13,
            height: 434,
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            border: "2px #161616 solid",
          }}
        >
          <div
            style={{
              width: 349,
              left: 16.06,
              top: 75.5,
              position: "absolute",
              textAlign: "center",
              color: "#E31C25",
              fontSize: 123,
              fontFamily: "Vanguard",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            CONNECT
          </div>
          <div
            style={{
              left: 49.06,
              top: 189.5,
              position: "absolute",
              textAlign: "center",
              color: "#161616",
              fontSize: 76,
              fontFamily: "Vanguard",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            WITH US ON
          </div>
          <div
            style={{
              padding: 8,
              left: 23.06,
              top: 297.5,
              position: "absolute",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 25,
            }}
          >
            <SocialIcons />
          </div>
        </div>
        <div
          style={{
            width: 378.13,
            height: 434,
            position: "relative",
            background: "#161616",
            borderRadius: 20,
            overflow: "hidden",
            border: "2px #161616 solid",
          }}
        >
          <div
            style={{
              width: 289,
              left: 45.94,
              top: 75.5,
              position: "absolute",
              textAlign: "center",
              color: "#E31C25",
              fontSize: 80,
              fontFamily: "Vanguard",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            QUESTIONS?
          </div>
          <div
            style={{
              left: 49.94,
              top: 144.5,
              position: "absolute",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "#FAFAFA",
                fontSize: 47,
                fontFamily: "Vanguard",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              WE
            </span>
            <span
              style={{
                color: "#FAFAFA",
                fontSize: 47,
                fontFamily: "AvantGarde",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              '
            </span>
            <span
              style={{
                color: "#FAFAFA",
                fontSize: 47,
                fontFamily: "Vanguard",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              RE HERE TO HELP
            </span>
            <span
              style={{
                color: "#FAFAFA",
                fontSize: 47,
                fontFamily: "AvantGarde",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              !
            </span>
          </div>
          <div
            style={{
              left: 45.94,
              top: 229.5,
              position: "absolute",
              color: "#FAFAFA",
              fontSize: 29,
              fontFamily: "Microgramma",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            NAME
          </div>
          <div
            style={{
              left: 45.94,
              top: 309.5,
              position: "absolute",
              color: "#FAFAFA",
              fontSize: 29,
              fontFamily: "Microgramma",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            NAME
          </div>
          <div
            style={{
              left: 86.94,
              top: 265.5,
              position: "absolute",
              textAlign: "right",
            }}
          >
            <span
              style={{
                color: "#FAFAFA",
                fontSize: 29,
                fontFamily: "Microgramma",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              -
            </span>
            <span
              style={{
                color: "#E31C25",
                fontSize: 29,
                fontFamily: "Microgramma",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              123456789
            </span>
          </div>
          <div
            style={{
              left: 89.94,
              top: 338.5,
              position: "absolute",
              textAlign: "right",
            }}
          >
            <span
              style={{
                color: "#FAFAFA",
                fontSize: 29,
                fontFamily: "Microgramma",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              -
            </span>
            <span
              style={{
                color: "#E31C25",
                fontSize: 29,
                fontFamily: "Microgramma",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              123456789
            </span>
          </div>
        </div>
        <div
          style={{
            width: 378.13,
            borderRadius: 20,
            height: 434,
            overflow: "hidden",
            border: "2px #161616 solid",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <GoogleMapReact defaultCenter={{ lat: 8.545884830720146, lng: 76.90634321026491 }} defaultZoom={11} bootstrapURLKeys={{ key: "AIzaSyC8Nk_5APibqxRWHClK0-xBMrCxqWrGIws" }}/>
      

        </div>
      </div>
      <div style={{ left: 607, top: 615, position: "absolute" }}>
        <div style={{ left: 45, top: 2, position: "absolute" }}>
          <span
            style={{
              color: "#E31C25",
              fontSize: 47,
              fontFamily: "Vanguard",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            TED
          </span>
          <span
            style={{
              color: "#161616",
              fontSize: 47,
              fontFamily: "Vanguard",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            x CET
          </span>
        </div>
        <div
          style={{
            width: 40,
            height: 40,
            left: 0,
            top: 0,
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{ width: 33.33, height: 33.33, background: "#161616" }}
          ></div>
        </div>
      </div>
      <div
        style={{
          width: 1600,
          height: 0,
          left: 0,
          top: 597,
          position: "absolute",
          border: "2px #161616 solid",
        }}
      ></div>
      <div
        style={{
          width: 1600,
          height: 0,
          left: 0,
          top: 549,
          position: "absolute",
          border: "2px #161616 solid",
        }}
      ></div>
      <div
        style={{
          width: 1440,
          height: 35,
          left: 0,
          top: 22,
          position: "absolute",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            paddingLeft: 40,
            color: "#161616",
            fontSize: 29,
            fontFamily: "AvantGarde",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx
          CET - TEDx CET - TEDx CET - TEDx CET -
        </div>
      </div>
      <div
        style={{
          width: 1600,
          height: 0,
          left: 0,
          top: 66,
          position: "absolute",
          border: "2px #161616 solid",
        }}
      ></div>
      <div
        style={{
          width: 1600,
          height: 0,
          left: 0,
          top: 15,
          position: "absolute",
          border: "2px #161616 solid",
        }}
      ></div>
      <div
        style={{
          width: 1440,
          height: 35,
          left: 0,
          top: 555,
          position: "absolute",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "#161616",
            fontSize: 29,
            fontFamily: "AvantGarde",
            fontWeight: "400",

          }}
        >
          - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx
          CET -  TEDx CET - TEDx
          CET -  TEDx CET -
        </div>
      </div>
    </div>
  );
};

export default Footer;
