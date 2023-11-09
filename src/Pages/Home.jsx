import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import agentImage from "../assets/agent2.jpg";
import userImage from "../assets/user-avatar.png";
import { BsThreeDots } from "react-icons/bs";
import { useLocation, useParams } from "react-router-dom";

function Home() {
  const location = useLocation()



  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);
  const [loading5, setLoading5] = useState(false);
  const [loading6, setLoading6] = useState(false);
  const [loading7, setLoading7] = useState(false);
  const [loading8, setLoading8] = useState(false);
  const [loading9, setLoading9] = useState(false);

  // for showing chat closed
  const [showChatClosed, setShowChatClosed] = useState(false);

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
  const [showImg14, setShowImg14] = useState(false);

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
  const [showMsgAca, setShowMsgAca] = useState(false);

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
  const [step5, setStep5] = useState(false);
  const [msg4, setMsg4] = useState("");
  const [msg5, setMsg5] = useState("");
  const [msg6, setMsg6] = useState("");
  const [msg6_1, setMsg6_1] = useState("");

  const [yes, setYes] = useState("Yes");
  const [no, setNo] = useState("No");

  // medic debt step
  const [step6, setStep6] = useState(false);
  const [response6, setResponse6] = useState("");
  const [msg7, setMsg7] = useState("");
  const [msg8, setMsg8] = useState("");

  const step1 = () => {
    setLoading(true);
    setShowMsg1(true);
    setShowImg1(true);
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false);
      }, 700);
      setHello("Hi There 👋");
    }, 1400);

    setLoading2(true);
    setTimeout(() => {
      setTimeout(() => {
        setLoading2(false);
      }, 700);
      setShowMsg2(true);
      setEvelyn("I'm Evelyn. I'm going to help you to get your debt removed");
      setShowImg1(false);
      setShowImg2(true);
    }, 2100);

    setLoading3(true);
    setTimeout(() => {
      setTimeout(() => {
        setLoading3(false);
      }, 700);
      setShowMsg3(true);
      setQualify(
        "In order to help you I need to know if you have more than $10,000 in debt?"
      );
      setShowImg1(false);
      setShowImg2(false);
      setShowImg3(true);
    }, 2800);
    setTimeout(() => {
      setButtonVisiblity(true);
      setShowImg1(false);
      setShowImg2(false);
      setShowImg3(false);
      setShowImg4(true);
    }, 3500);
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

  // vars for if reply is Yes
  // for images
  const [firstReplyYesImg1, setFirstReplyYesImg1] = useState(false);
  const [firstReplyYesImg2, setFirstReplyYesImg2] = useState(false);
  const [firstReplyYesImg3, setFirstReplyYesImg3] = useState(false);
  // for loading
  const [firstReplyYesLoad1, setFirstReplyYesLoad1] = useState(false);
  const [firstReplyYesLoad2, setFirstReplyYesLoad2] = useState(false);
  // for showing msg
  const [firstReplyYes_Msg1, setFirstReplyYes_Msg1] = useState("");
  const [firstReplyYes_Msg2, setFirstReplyYes_Msg2] = useState("");
  const [firstReplyYes_Msg3, setFirstReplyYes_Msg3] = useState("");

  // for dialable number
  const [firstReplyYes_setNumber, setFirstReplyYes_setNumber] = useState("");
  const reply = (value) => {
    if (value === "No") {
      setshowUserReply1(true);
      setButtonVisiblity(false);
      setResponse1("No");
      setTimeout(() => {
        setShowMsg4(true);
        setShowImg5(true);
      }, 600);

      setTimeout(() => {
        setStep2(true);
      }, 1200);
      setLoading4(true);
      setTimeout(() => {
        setTimeout(() => {
          setLoading4(false);
        }, 700);
        setMsg1("Okay, let me ask you two more quick questions.");
      }, 1400);

      setLoading5(true);
      setTimeout(() => {
        setTimeout(() => {
          setLoading5(false);
        }, 700);
        setShowImg5(false);
        setShowMsg5(true);
        setShowImg6(true);
        setMsg2("Do you make less than $50,000 a year? Press Yes or No.");
      }, 2100);

      // setBtn2(true)
      setTimeout(() => {
        setShowImg6(false);
        setShowImg7(true);
        setBtn2(true);
      }, 2800);
    } else {
      setshowUserReply1(true);
      setButtonVisiblity(false);
      setResponse1("Yes");
      // further code here
      setFirstReplyYesImg1(true);
      setFirstReplyYesLoad1(true);

      // showing first msg
      setTimeout(() => {
        setTimeout(() => {
          setFirstReplyYesImg1(false);
          setFirstReplyYesLoad1(false);
        }, 700);

        setFirstReplyYes_Msg1("🎉 Congratulations! 🎁");
      }, 1400);

      // showing second msg
      setFirstReplyYesLoad2(true);
      setFirstReplyYesImg2(true);
      setTimeout(() => {
        setTimeout(() => {
          setFirstReplyYesImg2(false);
          setFirstReplyYesLoad2(false);
        }, 700);
        setFirstReplyYes_Msg2(
          "Tap the number button below to call now and eliminate your debt, it only takes 2 minutes."
        );
      }, 2100);

      // showing third msg
      setFirstReplyYesImg3(true);
      setTimeout(() => {
        setFirstReplyYes_setNumber("+18556900292");
        setFirstReplyYes_Msg3("(855) 690-0292");
      }, 2100);

      setTimeout(() => {
        setShowChatClosed(true);
      }, 2800);
    }
  };

  // vars for answering 50000 a year
  // vars for NO

  const reply2 = (value) => {
    if (value === "Yes") {
      setshowUserReply2(true);
      setResponse2("Yes");
      setBtn2(false);

      console.log(btn2);

      setShowImg8(true);
      setShowMsg6(true);

      setTimeout(() => {
        setStep3(true);
      }, 0);

      setLoading6(true);
      setTimeout(() => {
        setTimeout(() => {
          setLoading6(false);
        }, 700);
        // setShowImg8(true);
        // setShowMsg6(true);
        setMsg3("Are you currently on Medicare?");
      }, 1400);

      setTimeout(() => {
        setShowImg8(false);
        setShowImg9(true);
        setBtn3(true);
      }, 2100);
    } else {
      // code here
      setLoading6(true);
      setShowImg8(true);
      setShowMsg6(true);

      setshowUserReply2(true);
      setResponse2("No");
      setBtn2(false);
      setTimeout(() => {
        setStep3(true);
      }, 100);

      setTimeout(() => {
        setTimeout(() => {
          setLoading6(false);
        }, 700);

        setMsg3(
          "Unfortunately I cannot help you based on the given answers. I will close this chat and when you give us feedback about this chat, you can get $500 Walmart gift card."
        );
      }, 1400);

      setTimeout(() => {
        setShowImg8(false);
        setShowImg10(true);
        setBtn3(true);
      }, 2100);

      setTimeout(() => {
        setShowChatClosed(true);
      }, 2100);
    }
  };

  const reply3 = (value) => {
    setResponse3(value);
    setBtn3(false);
    // setShowMsgAca(true);
    if (value === "Yes") {
      setshowUserReply3(true);
      setStep4(true);
      setResponse3("Yes");

      setShowMsg7(true);
      setLoading7(true);
      setShowImg11(true);
      setTimeout(() => {
        setTimeout(() => {
          setLoading7(false);
        }, 700);

        setMsg4("For Medicare:  🎉 Congratulations! 🎁");
      }, 1400);

      setLoading8(true);
      setLoading9(true);
      setTimeout(() => {
        setTimeout(() => {
          setLoading8(false);
        }, 700);
        setShowImg11(false);
        setShowImg12(true);
        setShowMsg8(true);
        // setLoading9(false);
        setTimeout(() => {
          setLoading9(false);
        }, 700);
        setMsg5(
          "for Medicare: Tap the number button below to call now and eliminate your debt, it only takes 2 minutes."
        );
        // setMsg6("+18556900292");
        // setMsg6_1("(855) 690-0292");
      }, 2100);
      setTimeout(() => {
        setShowImg11(false);
        setShowImg12(false);
        setShowImg13(true);
        setShowMsg9(true);
        setMsg6("+18885440239");
        setMsg6_1("(888) 544-0239");
      }, 2800);
      setTimeout(() => {
        setShowChatClosed(true);
      }, 2800);
    } else {
      setshowUserReply3(true);
      setStep4(true);
      setResponse3("No");

      setShowMsg7(true);
      setLoading7(true);
      setShowImg11(true);
      setTimeout(() => {
        setTimeout(() => {
          setLoading7(false);
        }, 700);

        setMsg4("For ACA: 🎉 Congratulations! 🎁");
      }, 1400);

      setLoading8(true);
      setLoading9(true);
      setTimeout(() => {
        setTimeout(() => {
          setLoading8(false);
        }, 700);
        setShowImg11(false);
        setShowImg12(true);
        setShowMsg8(true);
        // setLoading9(false);
        setTimeout(() => {
          setLoading9(false);
        }, 700);
        setMsg5(
          "For ACA: Tap the number button below to call now and eliminate your debt, it only takes 2 minutes."
        );
        // setMsg6("+18556900292");
        // setMsg6_1("(855) 690-0292");
      }, 2100);
      setTimeout(() => {
        setShowImg11(false);
        setShowImg12(false);
        setShowImg13(true);
        setShowMsg9(true);
        setMsg6("+18445590632");
        setMsg6_1("(844) 559-0632");
      }, 2800);
      setTimeout(() => {
        setShowChatClosed(true);
      }, 2800);
    }
  };


  useEffect(() => {
    step1();

    const params = new URLSearchParams(location.search)

    const clickId = params.get("clickid")

    console.log(clickId)


  }, []);
  return (
    <div className="App">
      <div className="">
        {/* header */}
        <Header />
        {/* End header */}

        <div className="max-w-[450px] mx-auto min-h-[85vh] px-4 ">
          {/* step 1 */}
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
                  {loading === true ? (
                    <div>
                      <BsThreeDots className="text-4xl text-gray-400 duration-300 opacity-85" />
                    </div>
                  ) : (
                    hello
                  )}
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
                  {loading2 === true ? (
                    <div>
                      <BsThreeDots className="text-4xl text-gray-400 duration-300 opacity-85" />
                    </div>
                  ) : (
                    evelyn
                  )}
                  {/* {evelyn} */}
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
                  {loading3 === true ? (
                    <div>
                      <BsThreeDots className="text-4xl text-gray-400 duration-300 opacity-85" />
                    </div>
                  ) : (
                    qualify
                  )}
                  {/* qualify */}
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
                <div className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] flex gap-2">
                  {/* yes button first step */}
                  <button
                    onClick={() => reply("Yes")}
                    className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full"
                  >
                    {" "}
                    Yes
                  </button>

                  {/* No button first step */}
                  <button
                    onClick={() => reply("No")}
                    className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full"
                  >
                    {" "}
                    No
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* end step 1 */}

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
            {response1 === "No" && (
              <div>
                {/* quick question */}
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
                      {loading4 === true ? (
                        <div>
                          <BsThreeDots className="text-4xl text-gray-400 duration-300 opacity-85" />
                        </div>
                      ) : (
                        msg1
                      )}
                      {/* msg1 */}
                    </p>
                  </div>
                )}

                {/* do you make 50000 a year */}
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
                      {loading5 === true ? (
                        <div>
                          <BsThreeDots className="text-4xl text-gray-400 duration-300 opacity-85" />
                        </div>
                      ) : (
                        msg2
                      )}
                      {/* msg2 */}
                    </p>
                  </div>
                )}

                {/* yes no button */}
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
            )}

            {response1 === "Yes" && (
              <div>
                {/* msg 1 if reply is yes */}
                <div className="flex gap-2 items-end mb-3">
                  <div className="w-8">
                    {firstReplyYesImg1 === true ? (
                      <img className="rounded-full" src={agentImage} alt="" />
                    ) : (
                      <div> </div>
                    )}
                  </div>
                  <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                    {firstReplyYesLoad1 === true ? (
                      <div>
                        <BsThreeDots className="text-4xl text-gray-400 duration-300 opacity-85" />
                      </div>
                    ) : (
                      firstReplyYes_Msg1
                    )}
                    {/* {evelyn} */}
                  </p>
                </div>
                {/*End msg 1 if reply is yes */}

                {/* msg 2 if reply is yes */}
                {firstReplyYesLoad1 === false && (
                  <div className="flex gap-2 items-end mb-3">
                    <div className="w-8">
                      {firstReplyYesImg2 === true ? (
                        <img className="rounded-full" src={agentImage} alt="" />
                      ) : (
                        <div> </div>
                      )}
                    </div>
                    <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                      {firstReplyYesLoad2 === true ? (
                        <div>
                          <BsThreeDots className="text-4xl text-gray-400 duration-300 opacity-85" />
                        </div>
                      ) : (
                        firstReplyYes_Msg2
                      )}
                      {/* {evelyn} */}
                    </p>
                  </div>
                )}
                {/* End msg 2 if reply is yes */}

                {/* msg 3 if reply is yes */}
                {firstReplyYesLoad2 === false && (
                  <div>
                    <div className="flex gap-2 items-end mb-3">
                      <div className="w-8">
                        {firstReplyYesImg3 === true ? (
                          <img
                            className="rounded-full"
                            src={agentImage}
                            alt=""
                          />
                        ) : (
                          <div> </div>
                        )}
                      </div>
                      <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                        {firstReplyYes_Msg3 && (
                          <div className="flex gap-2 items-end ">
                            <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                              <a
                                className="bg-blue-600 py-2 px-4 rounded-full text-white"
                                href={`tel:${firstReplyYes_setNumber}`}
                              >
                                {firstReplyYes_Msg3}
                              </a>
                            </p>
                          </div>
                        )}
                      </p>
                    </div>
                  </div>
                )}
                {/* End msg 3 if reply is yes */}
              </div>
            )}
          </div>
          {/* End step 2*/}

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
              {/* Thank you msg for answering NO in 50000 a year question*/}
              {/* asking if in medicare for answering YES in 50000 a year question*/}
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
                          {loading6 === true ? (
                            <div>
                              <BsThreeDots className="text-4xl text-gray-400 duration-300 opacity-85" />
                            </div>
                          ) : (
                            msg3
                          )}
                        </p>
                      </div>
                    )}
                  </p>
                </div>
              )}

              {/* link after thank you msg */}
              {btn3 &&
                (response2 === "Yes" ? (
                  // 50000 a year question answer YES buttons
                  <div className="flex gap-2 items-end mb-3">
                    <div className="w-8">
                      {showImg9 === true ? (
                        <img className="rounded-full" src={agentImage} alt="" />
                      ) : (
                        <div> </div>
                      )}
                    </div>
                    <div className=" bg-gray-200 w-fit  px-3 py-2 rounded-md max-w-[305px] flex gap-2 ">
                      <button
                        className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full"
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
                  // 50000 a year question answer No buttons
                  <div className="flex gap-2 items-end mb-3">
                    <div className="w-8">
                      {showImg10 === true ? (
                        <img className="rounded-full" src={agentImage} alt="" />
                      ) : (
                        <div> </div>
                      )}
                    </div>
                    <div className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] flex gap-2">
                      <a
                        href="https://www.google.com/"
                        target="_blank"
                        className="cursor-pointer bg-blue-600 text-white px-10 py-3 font-bold rounded-full mr-2"
                      >
                        Get $500 Gift Card
                      </a>
                    </div>
                  </div>
                ))}
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
                          {loading7 === true ? (
                            <div>
                              <BsThreeDots className="text-4xl text-gray-400 duration-300 opacity-85" />
                            </div>
                          ) : (
                            // change here for the optionsss
                            <div>
                              <p>{msg4}</p>
                              {/* <button onClick={() => reply3("ACA")}>ACA</button>
                                <button onClick={() => reply3("Mediciad")}>Medicaid</button>
                                <button onClick={() => reply3("Medicare")}>Medicare</button> */}
                            </div>
                          )}
                          {/* {msg4} */}
                        </p>
                      </div>
                    )}
                  </p>
                </div>
              )}

              {response3 === "Yes" ? (
                //show if medicare question's answer is yes
                <div>
                  {/* <p>{msg4}</p> */}
                  {showMsg8 && (
                    <div className="flex gap-2 items-end mb-3">
                      <div className="w-8">
                        {showImg12 === true ? (
                          <img
                            className="rounded-full"
                            src={agentImage}
                            alt=""
                          />
                        ) : (
                          <div> </div>
                        )}
                      </div>
                      <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                        {showMsg6 && (
                          <div className="flex gap-2 items-end ">
                            <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                              {loading9 === true ? (
                                <div>
                                  <BsThreeDots className="text-4xl text-gray-400 duration-300 opacity-85" />
                                </div>
                              ) : (
                                msg5
                              )}
                              {/* {msg5} */}
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
                          <img
                            className="rounded-full"
                            src={agentImage}
                            alt=""
                          />
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
              ) : (
                // show if medicare question's answer is NO
                <div>
                  {showMsg8 && (
                    <div className="flex gap-2 items-end mb-3">
                      <div className="w-8">
                        {showImg12 === true ? (
                          <img
                            className="rounded-full"
                            src={agentImage}
                            alt=""
                          />
                        ) : (
                          <div> </div>
                        )}
                      </div>
                      <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                        {showMsg6 && (
                          <div className="flex gap-2 items-end ">
                            <p className="bg-gray-200 w-fit px-3 py-2 rounded-md max-w-[305px] ">
                              {loading9 === true ? (
                                <div>
                                  <BsThreeDots className="text-4xl text-gray-400 duration-300 opacity-85" />
                                </div>
                              ) : (
                                msg5
                              )}
                              {/* {msg5} */}
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
                          <img
                            className="rounded-full"
                            src={agentImage}
                            alt=""
                          />
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
            </div>
          )}
          {/* step 4 ends */}

          {/* step 5 and response20 are not needed */}
          {/* step 5 */}

          {showChatClosed && (
            <div className="grid grid-cols-3 items-center justify-around mt-10 mb-24">
              <div className="h-[1px] w-full bg-gray-300 "></div>
              <span className="text-gray-400 text-[12px] text-center">
                Chat Closed
              </span>
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
