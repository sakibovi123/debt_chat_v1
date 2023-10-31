import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  const [loading, setLoading] = useState(false);

  const [hello, setHello] = useState("");
  const [evelyn, setEvelyn] = useState("");
  const [qualify, setQualify] = useState("");

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

  const step1 = ()=> {
        setLoading(true)
        setInterval(()=> {
            setHello("Hello")
        }, 700)
        setInterval(()=>{
            setEvelyn("I'm Evelyn from Debt Settlement.")
        }, 1200)

        setInterval(()=>{
            setQualify("Do you want to know if you qualify for over $10,000 in debt relief? Tap Yes! 😃")
        }, 2000)
        setTimeout(()=>{
            setButtonVisiblity(true)
        }, 5000)
    }

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
const reply = (value)=> {
        if( value === "Yes" ) {
            setButtonVisiblity(false)
            setInterval(()=>{
                setResponse1("Yes")
            }, 1200)

            setInterval(()=> {
                setStep2(true)
            }, 2000)

            setInterval(()=>{
                setMsg1("Alright, let me ask you two quick questions.") 
            }, 1200)

            setInterval(()=>{
                setMsg2("Do you have more than $15,000 in debt? Press Yes or No.")

            }, 2500)

            // setBtn2(true)
            setTimeout(()=>{
                setBtn2(true)
            }, 3000)

        }
    }

  const reply2 = (value) => {
    if (value === "Yes") {
      setResponse2("Yes");
      setBtn2(false);
      console.log(btn2);

      setInterval(() => {
        setStep3(true);
      }, 1200);
      

      setInterval(() => {
        setMsg3("Would you like to Clear Your Debt?");
      }, 2000);

      setTimeout(()=> {
                setBtn3(true)
            }, 5000);
    } else {
      // code here
      setResponse2("No");
      setBtn2(false);
      setInterval(() => {
        setStep3(true);
      }, 1200);

      setInterval(() => {
        setMsg3("Are you on medicaid or medicare?");
      }, 2000);

      setTimeout(()=> {
                setBtn3(true)
            }, 5000)
    }
  };

  const reply3 = (value) => {
    setBtn3(false);
    if (value === "Yes") {
      setStep4(true);

      setInterval(() => {
        setMsg4("🎉 Congratulations! 🎁");
      }, 1200);
      setInterval(() => {
        setMsg5(
          "Tap the number button below to call now and eliminate your debt, it only takes 2 minutes."
        );
        setMsg6("+18556900292");
        setMsg6_1("(855) 690-0292");
      }, 1500);
    } else {
      // code here
      setStep4(true);

      setInterval(() => {
        setMsg4("🎉 Congratulations! 🎁");
      }, 1200);
      setInterval(() => {
        setMsg5(
          "Tap the number button below to call now and eliminate your debt, it only takes 2 minutes."
        );
        setMsg6("+18556900292");
        setMsg6_1("(855) 690-0292");
      }, 1500);
    }
  };

  useEffect(() => {
    step1();
  }, []);

  return (
    <div className="">
      {/* header */}
      <Header />
      {/* End header */}

      <div id="step-1" className="">
        <p>{hello}</p>
        <p>{evelyn}</p>
        <p>{qualify}</p>
        {buttonVisiblity === true && (
          <button
            onClick={() => reply("Yes")}
            className="cursor-pointer bg-blue-600 p-3 rounded w-[100px]"
          >
            {" "}
            Yes
          </button>
        )}
      </div>

      {/* reply section 1 */}
      <div>
        <p>{response1}</p>
      </div>

      {/* step2 */}

      <div id="step2">
        <p>{msg1}</p>
        <p>{msg2}</p>
        {btn2 && (
          <div>
            <button onClick={() => reply2("Yes")}>Yes</button>
            <button onClick={() => reply2("No")}>No</button>
          </div>
        )}
      </div>

      {/* reply section 2 */}
      <div>
        <p>{response2}</p>
      </div>

      {/* step 3 */}
      {step3 && (
        <div id="step-3">
          <p>{msg3}</p>
          {btn3 && (
            response2 === "Yes" ? <div>
              <button onClick={() => reply3("Yes")}>Yes</button>
              <button onClick={() => reply3("No")}>No</button>
            </div> : <div>
                <button onClick={() => reply3("No")}>No</button>
                <button onClick={() => reply3("Mediciad")}>Medicaid</button>
                <button onClick={() => reply3("Medicare")}>Medicare</button>
            </div>
          )}
        </div>
      )}

      {/* step 3 ends */}

      {/* step 4 */}
      {step4 && (
        <div id="step-4">
          <p>{msg4}</p>
          <p>{msg5}</p>
          <a href={msg6}>{msg6_1}</a>
        </div>
      )}
      {/* step 4 ends */}

      <Footer />
    </div>
  );
}

export default Home;
