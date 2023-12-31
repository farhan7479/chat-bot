
import ChatBot from "react-simple-chatbot";

export default function Chatbot() {
  return (
    
    <ChatBot
      steps={[
        {
          id: "1",
          message: "Welcome to SciAstra! How can I assist you today?",
          trigger: "2"
        },
        {
          id: "2",
          options: [
            {
              value: 1,
              label: "What services does SciAstra offer to students?",
              trigger: "3"
            },
            {
              value: 2,
              label: "Can you tell me more about the mentors at SciAstra?",
              trigger: "4"
            },
            {
              value: 3,
              label: "What is SciAstra's educational philosophy?",
              trigger: "5"
            }
          ]
        },
        {
          id: "3",
          message:
            "SciAstra offers comprehensive guidance for institutes like IISERs, NISER, IISc Bangalore, ISI, CMI, and assists students in preparing for research entrance exams like IAT, NEST, ISI, CMI, IACS, and more.",
          trigger: "6"
        },
        {
          id: "4",
          message:
            "SciAstra has achieved remarkable results, including 600+ selections in IISERs, 100+ selections in NISER and CEBS, AIR 1 in IAT, AIR 12 in NEST, AIR 13 in KVPY, and mentoring over 10,000 students.",
          trigger: "11"
        },
        {
          id: "5",
          message:
            "SciAstra actively engages with a community of over 100,000 students, providing career guidance and support through various online platforms.",
          trigger: "12"
        },
        {
          id: "6",
          options: [
            {
              value: 4,
              label: "Ask More Question",
              trigger: "7"
            }
          ]
        },
        {
          id: "11",
          options: [
            {
              value: 5,
              label: "Ask More Question",
              trigger: "7"
            }
          ]
        },
        {
          id: "12",
          options: [
            {
              value: 6,
              label: "Ask More Question",
              trigger: "7"
            }
          ]
        },
        {
          id: "7",
          options: [
            {
              value: 7,
              label:
                "How has SciAstra evolved since its inception in March 2021?",
              trigger: "8"
            },
            {
              value: 8,
              label:
                "How does SciAstra encourage critical thinking in students?",
              trigger: "9"
            },
            {
              value: 9,
              label: "Which entrance exams does SciAstra provide guidance for?",
              trigger: "10"
            }
          ]
        },
        {
          id: "8",
          message:
            "SciAstra has evolved significantly since its inception in March 2021. We started from a hostel room and a small YouTube channel, and now we have over 60 mentors from premier research institutes of the world and India like Harvard, Oxford, Max Planck, IISc, IISERs, etc.",
          end: true
        },
        {
          id: "9",
          message:
            "SciAstra encourages critical thinking by designing educational programs that go beyond rote memorization. Our focus is to foster critical thinking in students, moving beyond exam qualifications. We aspire to guide students to think like scientists!",
          end: true
        },
        {
          id: "10",
          message:
            "SciAstra provides guidance for a variety of entrance exams, including but not limited to IISERs, NISER, IISc Bangalore, ISI, CMI, IAT, NEST, ISI, CMI, IACS, and more.",
          end: true
        }
      ]}
    />
  );
}
