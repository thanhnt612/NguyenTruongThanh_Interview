/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
function App() {
  const [topicList, setTopicList] = useState([
    {
      id: 1,
      content: `"A child asked his father, 'How were people born?' So his father said,
    'Adam and Eve made babies, then their babies became adults and made
    babies, and so on.' The child then went to his mother, asked her the
    same question and she told him, 'We were monkeys then we evolved to
    become like we are now.' The child ran back to his father and said,
    'You lied to me!' His father replied, 'No, your mom was talking about
    her side of the family.'"`,
      funny: 0,
      notFunny: 0,
    },
    {
      id: 2,
      content: `Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"`,
      funny: 0,
      notFunny: 0,
    },
    {
      id: 3,
      content: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
      funny: 0,
      notFunny: 0,
    },
    {
      id: 4,
      content: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
      funny: 0,
      notFunny: 0,
    },
  ]);
  const [currentTopic, setCurrentTopic] = useState(0);
  const [funnyVote, setFunnyVote] = useState(0);
  const [notFunnyVote, setNotFunnyVote] = useState(0);

  const handleFunnyVote = () => {
    setFunnyVote(funnyVote + 1);
    Cookies.set(`Joke_on_Topic_${currentTopic}`, "Funny");
    if (currentTopic < topicList.length - 1) {
      setCurrentTopic(currentTopic + 1);
    } else {
      alert("That's all the jokes for today! Come back another day!");
      window.location.reload();
    }
  };

  const handleNotFunnyVote = () => {
    setNotFunnyVote(notFunnyVote + 1);
    Cookies.set(`Joke_on_Topic_${currentTopic}`, "NotFunny");
    if (currentTopic < topicList.length - 1) {
      setCurrentTopic(currentTopic + 1);
    } else {
      alert("That's all the jokes for today! Come back another day!");
      window.location.reload();
    }
  };

  return (
    <>
      <div className="header container d-flex flex-row justify-content-between py-3">
        <div className="logo col-6">
          <a href="">
            <img src="/img/logo.jpg" alt="" />
          </a>
        </div>
        <div className="info col-6 d-flex justify-content-end align-items-center">
          <div className="px-2">
            <span className="text-secondary fst-italic">Handicrafted by</span>
            <p className="mb-0 text-end">Jim HLS</p>
          </div>
          <div className="">
            <img
              src="https://fastly.picsum.photos/id/295/200/200.jpg?hmac=nsWHMt5f11TALPFeS_0t6tIlO2CkViBNAbAbSlhu8P4"
              className="rounded-circle"
              width={70}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="title text-light text-center">
        <h2>A joke a day keeps the doctor away</h2>
        <span className="fw-bold">
          If you joke wrong way, your teeth have to pay. (Serious)
        </span>
      </div>
      <div className="content container py-5">
        <p>{topicList[currentTopic].content}</p>
        <div className="vote text-center">
          <button
            className="btn-funny text-light mb-3 me-md-3"
            onClick={handleFunnyVote}
          >
            This is Funny!
          </button>
          <button
            className="btn-not-funny text-light ms-0 ms-md-3"
            onClick={handleNotFunnyVote}
          >
            This is not Funny.
          </button>
        </div>
      </div>
      <div className="border-top pt-5"></div>
      <div className="footer container text-center">
        This website is created as part of Hlsolutions program. The materials
        contained on this website are provided for general information only and
        do not constitute any form of advice. HLS assumes no responsibility for
        the accuracy of any particular statement and accepts no liability for
        any loss or damage which may arise from reliance on the information
        contained on this site.
        <p className="mt-2">Copyright 2021 HLS</p>
      </div>
    </>
  );
}
export default App;
