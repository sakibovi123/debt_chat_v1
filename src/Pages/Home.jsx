import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import agentImage from "../assets/agent.jpeg";
import userImage from "../assets/user-avatar.png";

function Home() {
    const [loading, setLoading] = useState(false);
  
    const [hello, setHello] = useState("");
    const [evelyn, setEvelyn] = useState("");
    const [qualify, setQualify] = useState("");
  
    const [showLoad, setShowLoad] = useState("");
  
    // image show or hide
    const [showImg1, setShowImg1] = useState(false);
    const [showImg2, setShowImg2] = useState(false);
    const [showImg3, setShowImg3] = useState(false);
    const [showImg4, setShowImg4] = useState(false);
    const [showImg5, setShowImg5] = useState(false);
    const [showImg6, setShowImg6] = useState(false);
    const [showImg7, setShowImg7] = useState(false);
    const [showImg8, setShowImg8] = useState(false);
    const [showImg9, setShowImg9] = useState(false);
    const [showImg10, setShowImg10] = useState(false);
    const [showImg11, setShowImg11] = useState(false);
    const [showImg12, setShowImg12] = useState(false);
    const [showImg13, setShowImg13] = useState(false);
  
    // msg div show or hide
    const [showMsg1, setShowMsg1] = useState(false);
    const [showMsg2, setShowMsg2] = useState(false);
    const [showMsg3, setShowMsg3] = useState(false);
    const [showMsg4, setShowMsg4] = useState(false);
    const [showMsg5, setShowMsg5] = useState(false);
    const [showMsg6, setShowMsg6] = useState(false);
    const [showMsg7, setShowMsg7] = useState(false);
    const [showMsg8, setShowMsg8] = useState(false);
    const [showMsg9, setShowMsg9] = useState(false);
    const [showMsg10, setShowMsg10] = useState(false);
  
    // show user reply
    const [showUserReply1, setshowUserReply1] = useState(false);
    const [showUserReply2, setshowUserReply2] = useState(false);
    const [showUserReply3, setshowUserReply3] = useState(false);
  
    // step 2
    const [step2, setStep2] = useState(false);
    const [msg1, setMsg1] = useState("");
    const [msg2, setMsg2] = useState("");
    const [btn2, setBtn2] = useState(false);
  
    const [buttonVisiblity, setButtonVisiblity] = useState(false);
  
    const [answer, setAnswer] = useState("");
    const [response1, setResponse1] = useState("");
    const [response2, setResponse2] = useState("");
    const [response3, setResponse3] = useState("");
    const [response4, setResponse4] = useState("");
  
    // step 3
    const [step3, setStep3] = useState(false);
    const [msg3, setMsg3] = useState("");
    const [btn3, setBtn3] = useState(false);
  
    // step4
    const [step4, setStep4] = useState(false);
    const [msg4, setMsg4] = useState("");
    const [msg5, setMsg5] = useState("");
    const [msg6, setMsg6] = useState("");
    const [msg6_1, setMsg6_1] = useState("");
  
    const [yes, setYes] = useState("Yes");
    const [no, setNo] = useState("No");
  
    const step1 = () => {
      setLoading(true);
      setTimeout(() => {
        setShowMsg1(true);
        setHello("Hello");
        setShowImg1(true);
      }, 700);
      setTimeout(() => {
        setShowMsg2(true);
        setEvelyn("I'm Evelyn from Debt Settlement.");
        setShowImg1(false);
        setShowImg2(true);
      }, 1600);
  
      setTimeout(() => {
        setShowMsg3(true);
        setQualify(
          "Do you want to know if you qualify for over $10,000 in debt relief? Tap Yes! 😃"
        );
        setShowImg1(false);
        setShowImg2(false);
        setShowImg3(true);
      }, 2400);
      setTimeout(() => {
        setButtonVisiblity(true);
        setShowImg1(false);
        setShowImg2(false);
        setShowImg3(false);
        setShowImg4(true);
      }, 4000);
    };
  
    //   const reply = (value) => {
    //     if (value === "Yes") {
    //       setButtonVisiblity(false);
    //       setInterval(() => {
    //         setResponse1("Yes");
    //       }, 1200);
  
    //       setInterval(() => {
    //         setStep2(true);
    //       }, 2000);
  
    //       setInterval(() => {
    //         setMsg1("Alright, let me ask you two quick questions.");
    //         setInterval(() => {
    //           setMsg2("Do you have more than $15,000 in debt? Press Yes or No.");
  
    //           setInterval(() => {
    //             setBtn2(true);
    //           }, 3000);
    //         }, 2500);
    //       }, 1800);
    //     }
    //   };
    const reply = (value) => {
      if (value === "Yes") {
        setshowUserReply1(true);
        setButtonVisiblity(false);
        setResponse1("Yes");
        setTimeout(() => {
          setShowMsg4(true);
          setShowImg5(true);
        }, 1200);
  
        setTimeout(() => {
          setStep2(true);
        }, 2000);
  
        setTimeout(() => {
          setMsg1("Alright, let me ask you two quick questions.");
        }, 1200);
  
        setTimeout(() => {
          setShowImg5(false);
          setShowMsg5(true);
          setShowImg6(true);
          setMsg2("Do you have more than $15,000 in debt? Press Yes or No.");
        }, 2500);
  
        // setBtn2(true)
        setTimeout(() => {
          setShowImg6(false);
          setShowImg7(true);
          setBtn2(true);
        }, 3000);
      }
    };
  
    const reply2 = (value) => {
      if (value === "Yes") {
        setshowUserReply2(true);
        setResponse2("Yes");
        setBtn2(false);
  
        console.log(btn2);
  
        setTimeout(() => {
          setStep3(true);
        }, 1200);
  
        setTimeout(() => {
          setShowImg8(true);
          setShowMsg6(true);
          setMsg3("Would you like to Clear Your Debt?");
        }, 2000);
  
        setTimeout(() => {
          setShowImg8(false);
          setShowImg9(true);
          setBtn3(true);
        }, 3000);
      } else {
        // code here
        setshowUserReply2(true);
        setResponse2("No");
        setBtn2(false);
        setInterval(() => {
          setStep3(true);
        }, 1200);
  
        setTimeout(() => {
          setShowImg8(true);
          setShowMsg6(true);
          setMsg3("Are you on Debt Relief, ACA or Medicare?");
        }, 2000);
  
        setTimeout(() => {
          setShowImg8(false);
          setShowImg10(true);
          setBtn3(true);
        }, 3000);
      }
    };
  
    const reply3 = (value) => {
      setBtn3(false);
      if (value === "Yes") {
        setshowUserReply3(true);
        setStep4(true);
        setResponse3("Yes");
  
        setTimeout(() => {
          setShowImg11(true);
          setShowMsg7(true);
          setMsg4("🎉 Congratulations! 🎁");
        }, 1200);
        setTimeout(() => {
          setShowImg11(false);
          setShowImg12(true);
          setShowMsg8(true);
          setMsg5(
            "Tap the number button below to call now and eliminate your debt, it only takes 2 minutes."
          );
          // setMsg6("+18556900292");
          // setMsg6_1("(855) 690-0292");
        }, 1500);
        setTimeout(() => {
          setShowImg11(false);
          setShowImg12(false);
          setShowImg13(true);
          setShowMsg9(true);
          setMsg6("+18556900292");
          setMsg6_1("(855) 690-0292");
        }, 2300);
      } else {
        // code here
        setStep4(true);
        setshowUserReply3(true);
        setResponse3(value);
  
        setTimeout(() => {
          setShowImg11(true);
          setShowMsg7(true);
          setMsg4("🎉 Congratulations! 🎁");
        }, 1200);
        setTimeout(() => {
          setShowImg11(false);
          setShowImg12(true);
          setShowMsg8(true);
          setMsg5(
            "Tap the number button below to call now and eliminate your debt, it only takes 2 minutes."
          );
        }, 1500);
  
        setTimeout(() => {
          setShowImg11(false);
          setShowImg12(false);
          setShowImg13(true);
          setShowMsg9(true);
          if (value === "Debt") {
            setMsg6("+18556900292");
            setMsg6_1("(855) 690-0292");
          } else if (value === "ACA") {
            setMsg6("+18445590632");
            setMsg6_1("(844) 559-0632");
          } else if (value === "Medicare") {
            setMsg6("+18885440239");
            setMsg6_1("(888) 544-0239");
          } else {
            setMsg6("+18556900292");
            setMsg6_1("(855) 690-0292");
          }
        }, 2300);
      }
    };
  
    useEffect(() => {
      step1();
    }, []);
    return (
      <div className="App">
        <div className="">
          {/* header */}
          <Header />
          {/* End header */}
  
          <div className="max-w-[450px] mx-auto min-h-[85vh] px-4 ">
            <div id="step-1" className="mt-10">
              {showMsg1 && (
                <div className="flex gap-2 items-end mb-3">
                  <div className="w-8">
                    {showImg1 === true ? (
                      <img className="rounded-full" src={agentImage} alt="" />
                    ) : (
                      <div> </div>
                    )}
                  </div>
                  <p
                    className={
                      "bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px]"
                    }
                  >
                    {hello}
                  </p>
                </div>
              )}
  
              {showMsg2 && (
                <div className="flex gap-2 items-end mb-3">
                  <div className="w-8">
                    {showImg2 === true ? (
                      <img className="rounded-full" src={agentImage} alt="" />
                    ) : (
                      <div> </div>
                    )}
                  </div>
                  <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                    {evelyn}
                  </p>
                </div>
              )}
  
              {showMsg3 && (
                <div className="flex gap-2 items-end mb-3">
                  <div className="w-8">
                    {showImg3 === true ? (
                      <img className="rounded-full" src={agentImage} alt="" />
                    ) : (
                      <div> </div>
                    )}
                  </div>
                  <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                    {qualify}
                  </p>
                </div>
              )}
  
              {buttonVisiblity === true && (
                <div className="flex gap-2 items-end mb-3">
                  <div className="w-8">
                    {showImg4 === true ? (
                      <img className="rounded-full" src={agentImage} alt="" />
                    ) : (
                      <div> </div>
                    )}
                  </div>
                  <div className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                    <button
                      onClick={() => reply("Yes")}
                      className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full"
                    >
                      {" "}
                      Yes
                    </button>
                  </div>
                </div>
              )}
            </div>
  
            {/* reply section 1 */}
            {showUserReply1 && (
              <div className="flex items-end justify-end gap-2 my-6">
                <p className="bg-blue-600 text-white w-fit p-3 rounded-md max-w-[305px] ">
                  {response1}
                </p>
                <div className="w-8">
                  <img src={userImage} alt="" />
                </div>
              </div>
            )}
  
            {/* step2 */}
  
            <div id="step2">
              {showMsg4 && (
                <div className="flex gap-2 items-end mb-3">
                  <div className="w-8">
                    {showImg5 === true ? (
                      <img className="rounded-full" src={agentImage} alt="" />
                    ) : (
                      <div> </div>
                    )}
                  </div>
                  <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                    {msg1}
                  </p>
                </div>
              )}
              {/* <p>{msg1}</p> */}
  
              {showMsg5 && (
                <div className="flex gap-2 items-end mb-3">
                  <div className="w-8">
                    {showImg6 === true ? (
                      <img className="rounded-full" src={agentImage} alt="" />
                    ) : (
                      <div> </div>
                    )}
                  </div>
                  <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                    {msg2}
                  </p>
                </div>
              )}
              {/* <p>{msg2}</p> */}
              {btn2 && (
                <div className="flex gap-2 items-end mb-3">
                  <div className="w-8">
                    {showImg7 === true ? (
                      <img className="rounded-full" src={agentImage} alt="" />
                    ) : (
                      <div> </div>
                    )}
                  </div>
                  <div className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                    <button
                      className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full mr-2"
                      onClick={() => reply2("Yes")}
                    >
                      Yes
                    </button>
  
                    <button
                      className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full"
                      onClick={() => reply2("No")}
                    >
                      No
                    </button>
                  </div>
                </div>
                // <div>
                //   <button
                //     className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full mr-2"
                //     onClick={() => reply2("Yes")}
                //   >
                //     Yes
                //   </button>
                //   <button
                //     className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full"
                //     onClick={() => reply2("No")}
                //   >
                //     No
                //   </button>
                // </div>
              )}
            </div>
  
            {/* reply section 2 */}
            {showUserReply2 && (
              <div className="flex items-end justify-end gap-2 my-6">
                <p className="bg-blue-600 text-white w-fit p-3 rounded-md max-w-[305px] ">
                  {response2}
                </p>
                <div className="w-8">
                  <img src={userImage} alt="" />
                </div>
              </div>
            )}
  
            {/* <div>
            <p>{response2}</p>
          </div> */}
  
            {/* step 3 */}
            {step3 && (
              <div id="step-3">
                {showMsg6 && (
                  <div className="flex gap-2 items-end mb-3">
                    <div className="w-8">
                      {showImg8 === true ? (
                        <img className="rounded-full" src={agentImage} alt="" />
                      ) : (
                        <div> </div>
                      )}
                    </div>
                    <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                      {showMsg6 && (
                        <div className="flex gap-2 items-end ">
                          <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                            {msg3}
                          </p>
                        </div>
                      )}
                      {/* {msg3} */}
                    </p>
                  </div>
                )}
                {/* <p>{msg3}</p> */}
  
                {btn3 &&
                  (response2 === "Yes" ? (
                    <div className="flex gap-2 items-end mb-3">
                      <div className="w-8">
                        {showImg9 === true ? (
                          <img className="rounded-full" src={agentImage} alt="" />
                        ) : (
                          <div> </div>
                        )}
                      </div>
                      <div className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                        <button
                          className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full mr-2"
                          onClick={() => reply3("Yes")}
                        >
                          Yes
                        </button>
                        <button
                          className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full"
                          onClick={() => reply3("No")}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2 items-end mb-3">
                      <div className="w-8">
                        {showImg10 === true ? (
                          <img className="rounded-full" src={agentImage} alt="" />
                        ) : (
                          <div> </div>
                        )}
                      </div>
                      <div className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] flex flex-col gap-2">
                        <button
                          className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full"
                          onClick={() => reply3("Debt")}
                        >
                          Debt Relief
                        </button>
                        <button
                          className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full"
                          onClick={() => reply3("ACA")}
                        >
                          ACA
                        </button>
                        <button
                          className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full"
                          onClick={() => reply3("Medicare")}
                        >
                          Medicare
                        </button>
                      </div>
                    </div>
                  ))}
                {/* {btn3 &&
                (response2 === "Yes" ? (
                  <div>
                    <button onClick={() => reply3("Yes")}>Yes</button>
                    <button onClick={() => reply3("No")}>No</button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => reply3("No")}>No</button>
                    <button onClick={() => reply3("Mediciad")}>Medicaid</button>
                    <button onClick={() => reply3("Medicare")}>Medicare</button>
                  </div>
                ))} */}
              </div>
            )}
  
            {/* step 3 ends */}
  
            {/* reply section 3 */}
            {showUserReply3 && (
              <div className="flex items-end justify-end gap-2 my-6">
                <p className="bg-blue-600 text-white w-fit p-3 rounded-md max-w-[305px] ">
                  {response3}
                </p>
                <div className="w-8">
                  <img src={userImage} alt="" />
                </div>
              </div>
            )}
            {/* End reply section 3 */}
  
            {/* step 4 */}
            {step4 && (
              <div id="step-4">
                {showMsg7 && (
                  <div className="flex gap-2 items-end mb-3">
                    <div className="w-8">
                      {showImg11 === true ? (
                        <img className="rounded-full" src={agentImage} alt="" />
                      ) : (
                        <div> </div>
                      )}
                    </div>
                    <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                      {showMsg6 && (
                        <div className="flex gap-2 items-end ">
                          <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                            {msg4}
                          </p>
                        </div>
                      )}
                    </p>
                  </div>
                )}
                {/* <p>{msg4}</p> */}
                {showMsg8 && (
                  <div className="flex gap-2 items-end mb-3">
                    <div className="w-8">
                      {showImg12 === true ? (
                        <img className="rounded-full" src={agentImage} alt="" />
                      ) : (
                        <div> </div>
                      )}
                    </div>
                    <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                      {showMsg6 && (
                        <div className="flex gap-2 items-end ">
                          <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                            {msg5}
                          </p>
                        </div>
                      )}
                    </p>
                  </div>
                )}
                {/* <p>{msg5}</p> */}
                {showMsg9 && (
                  <div className="flex gap-2 items-end mb-3">
                    <div className="w-8">
                      {showImg13 === true ? (
                        <img className="rounded-full" src={agentImage} alt="" />
                      ) : (
                        <div> </div>
                      )}
                    </div>
                    <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                      {showMsg6 && (
                        <div className="flex gap-2 items-end ">
                          <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                            <a
                              className="bg-blue-600 py-2 px-4 rounded-full text-white"
                              href={`tel:${msg6}`}
                            >
                              {msg6_1}
                            </a>
                          </p>
                        </div>
                      )}
                    </p>
                  </div>
                )}
                {/* <a href={msg6}>{msg6_1}</a> */}
              </div>
            )}
            {/* step 4 ends */}
  
            {showMsg9 && (
              <div className="grid grid-cols-3 items-center justify-around mt-10 mb-24">
                <div className="h-[1px] w-full bg-gray-300 "></div>
                <span className="text-gray-400 text-[12px] text-center">Chat Closed</span>
                <div className="h-[1px] w-full max-w-[150px] bg-gray-300 "></div>
              </div>
            )}
          </div>
  
          <Footer />
        </div>
      </div>
    );
  }

export default Home;
