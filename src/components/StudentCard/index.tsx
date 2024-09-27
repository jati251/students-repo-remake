import React from "react";

const StudentCard: React.FC = () => {
  const joinedDate = "07/08/18";
  const studentName = "LARRY WILSON";
  const studentId = "180710242242";

  return (
    <div className="w-fit bg-white shadow-lg p-5 rounded-lg mt-5 lg:mt-0">
      <div className="h-[420px] w-full lg:h-[644px] lg:w-[403px] bg-gray-100 shadow-xl rounded-sm relative">
        {/* University Name */}
        <div
          className="rotate-180 text-[#CB5A73] absolute right-5 font-black text-[20px] lg:text-[30px] flex flex-row mt-2 lg:mt-5 z-10"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="tracking-wide">UNIVERSITAS PADJADJARAN</span>
        </div>

        {/* Joined Date Section */}
        <div className="absolute bottom-0 ml-10 mb-2 flex flex-col z-10">
          <span className="text-cardStudentTwo text-xs lg:text-md font-semibold">
            JOINED DATE
          </span>
          <span className="lg:font-black text-md text-xs lg:text-md mb-2">
            {joinedDate}
          </span>
          <div className="w-16 h-8 lg:w-60 lg:h-16 text-xs lg:text-lg mb-5 lg:mb-1">
            <svg
              width="244"
              height="70"
              viewBox="0 0 244 70"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="244" height="70" fill="#ffffff" />
              <g transform="translate(10, 10)" fill="#000000">
                {Array.from({ length: 60 }, (_, i) => (
                  <rect
                    key={i}
                    x={i * 4}
                    y="0"
                    width={i % 2 === 0 ? 1 : 3}
                    height="50"
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>

        {/* Card Background */}
        <div className="bg-white h-[100px] w-[200px] lg:w-[403px] lg:h-[551px] rounded-br-[200px] relative">
          <div className="border bg-[#1A3153] rounded-br-[100px] w-[219px] h-[301px] lg:w-[319px] lg:h-[501px]">
            <img
              alt="avatar"
              src="https://i.pinimg.com/originals/b2/ae/57/b2ae57d690edfcf09de7dadffc521052.jpg"
              className="absolute h-36 w-32 lg:h-64 lg:w-56 bg-gray-100 mt-10 ml-10 z-20 object-fill"
            />
            <div className="h-[173px] lg:h-[273px] rounded-br-[80px] bg-cardStudentTwo z-10 bg-[#29446F]">
              <img
                alt="buildCard"
                src="https://v2-students.unpad.ac.id/assets/card/cardBuild.svg"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-10 lg:mt-16 ml-10 flex flex-col">
              <span className="w-[250px] text-gray-100 text-xs lg:text-xl font-semibold">
                {studentName}
              </span>
              <span className="text-gray-100 text-xs lg:text-lg mt-3 lg:mt-5 font-semibold">
                {studentId}
              </span>
              <span className="text-xs lg:text-lg mt-2 lg:mt-5 text-gray-100">
                STUDENT ID
              </span>
            </div>
          </div>
        </div>

        {/* Additional Image Section */}
        <div className="bg-white w-10 lg:w-44 h-[30px] lg:h-[90px]">
          <div className="bg-gray-100 w-[300px] h-[30px] lg:w-[403px] lg:h-[90px] rounded-tl-[500px] flex flex-col">
            <div className="absolute bottom-5 right-5">
              <img
                alt="avatar"
                src="https://v2-students.unpad.ac.id/assets/card/unpadhitam.svg"
                className="w-20 h-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
